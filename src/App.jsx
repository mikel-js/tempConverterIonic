import React, { useState, useRef } from 'react';
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => {
  const [fahrenheitToCelcius, setFahrenheitToCelcius] = useState(true);

  const [degree, setDegree] = useState(0);
  const fahrenheitInput = useRef();
  const celciusInput = useRef();

  const convert = () => {
    if (fahrenheitToCelcius) {
      let enteredFah = ((fahrenheitInput.current.value - 32) * 5) / 9;

      setDegree(enteredFah);
    } else if (!fahrenheitToCelcius) {
      let enteredCel = (celciusInput.current.value * 9) / 5 + 32;
      setDegree(enteredCel);
    }
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Temperature Converter</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className='ion-padding'>
        {fahrenheitToCelcius ? (
          <div>
            <h2>Fahrenheit to Celcius</h2>
            <IonButton
              color='warning'
              onClick={() => {
                setFahrenheitToCelcius(false);
                setDegree(0);
              }}
            >
              °C to °F
            </IonButton>
          </div>
        ) : (
          <div>
            <h2>Celcius to Fahrenheit</h2>
            <IonButton
              color='success'
              onClick={() => setFahrenheitToCelcius(true)}
            >
              °C to °F
            </IonButton>
          </div>
        )}
        <IonGrid>
          <IonRow>
            <IonCol>
              {fahrenheitToCelcius ? (
                <IonItem>
                  <IonLabel>
                    Temp in Fahrenheit
                    <IonInput type='number' ref={fahrenheitInput}></IonInput>
                  </IonLabel>
                </IonItem>
              ) : (
                <IonItem>
                  <IonLabel>
                    Temp in Celcius
                    <IonInput type='number' ref={celciusInput}></IonInput>
                  </IonLabel>
                </IonItem>
              )}
            </IonCol>
          </IonRow>
          <IonCol>
            <IonButton onClick={convert}>Calculate</IonButton>
          </IonCol>
          <IonCol>
            <h2>{`${degree} ${
              fahrenheitToCelcius ? 'degree celcius' : 'degree fahrenheit'
            } `}</h2>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
