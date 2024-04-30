import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonButton,
  IonInput,
  IonIcon
} from '@ionic/react';
import { calendarNumberOutline, listCircle, listCircleOutline, trashOutline } from 'ionicons/icons';

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTasks[index] + ' (completed)';
    setTasks(updatedTasks);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>todolist</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
       {/* Todo input */}
        <IonItem>
          <IonInput
            placeholder="Add a new task"
            value={newTask}
            onIonChange={(e) => setNewTask(e.detail.value!)}
          />
          <IonButton slot="end" onClick={addTask}>
            Add
          </IonButton>
        </IonItem>
        
      {/* Todo output */}
        <IonList>
          {tasks.map((task, index) => (
            <IonItem key={index}>
              <IonCheckbox onIonChange={() => toggleTask(index)} />
              <IonLabel>{task}</IonLabel>
              <IonButton slot="end" onClick={() => removeTask(index)}>
                <IonIcon icon={calendarNumberOutline} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TodoList;