import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonIcon,
  IonSearchbar
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { alarmOutline, calculatorOutline } from 'ionicons/icons';



const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const [searchText, setSearchText] = useState('');

  const goToCalculator = () => {
    history.push('/calculator');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonSearchbar
          value={searchText}
          onIonChange={e => setSearchText(e.detail.value!)}
          placeholder="Search here..."
        />

        <IonCard>
          <img src="https://m.media-amazon.com/images/M/MV5BMzlkYTI3MWItMjU2NS00MjIzLTg2MzAtZDNiODQzMjBhMmM3XkEyXkFqcGdeQTNwaW5nZXN0._V1_QL75_UX500_CR0,0,500,281_.jpg" alt="Profile" />
          <IonCardHeader>
            <IonCardTitle>Welcome to my Application</IonCardTitle>
            <IonCardSubtitle>canceran naaa</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Feel free to contact me when you have concerns. Love yahhhh:)</IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonButton expand="block" routerLink="/Tab2">
              <IonIcon icon={alarmOutline} slot="start" />
              Clickcounter
            </IonButton>
          </IonCardContent>
          <IonCardContent>
            <IonButton expand="block" routerLink="/Tab3">
              <IonIcon icon={calculatorOutline} slot="start" />
              Calculator
            </IonButton>
          </IonCardContent>
          <IonCardContent>
            <IonButton expand="block" routerLink="/tab4">
              <IonIcon icon={calculatorOutline} slot="start" />
              Todolist
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
