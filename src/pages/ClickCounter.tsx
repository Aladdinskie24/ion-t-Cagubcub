import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab2: React.FC = () => {
    // State to keep track of the number of clicks
    const [clickCount, setClickCount] = useState(0);

    // Function to handle button click
    const handleButtonClick = () => {
        // Increment the click count
        setClickCount(clickCount + 1);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Clickcounter</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Clickcounter</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton onClick={handleButtonClick}>Click Me</IonButton>
                {/* Click counter */}
                <p>Number of Clicks: {clickCount}</p>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
