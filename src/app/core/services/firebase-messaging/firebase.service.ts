import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getMessaging,
  onMessage,
  getToken,
  Messaging,
  MessagePayload,
} from 'firebase/messaging';
import { onBackgroundMessage } from 'firebase/messaging/sw';

import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private _message: any = new BehaviorSubject(null);
  public get message(): BehaviorSubject<MessagePayload> {
    return this._message;
  }
  private setMessage(message: MessagePayload) {
    this._message.next(message);
  }

  constructor() {}

  init(): void {
    initializeApp(environment.firebase);
    // window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .getRegistrations()
        .then(async (registrations: readonly ServiceWorkerRegistration[]) => {
          for (let registration of registrations) {
            await registration.unregister();
          }
          navigator.serviceWorker
            .register('./firebase-messaging-sw.js')
            .then((registration: ServiceWorkerRegistration) => {
              console.log(
                'Registration successful, scope is:',
                registration.scope
              );

              const messaging = getMessaging();
              console.log('::messaging', messaging);

              getToken(messaging)
                .then((currentToken: string) => {
                  if (currentToken) {
                    console.log('current token for client: ', currentToken);

                    // Track the token -> client mapping, by sending to backend server
                    // show on the UI that permission is secured

                    const messaging: Messaging = getMessaging();
                    onMessage(messaging, (payload: MessagePayload) => {
                      console.log('onMessage:', payload);
                      // setMessage(payload);
                    });
                    // onBackgroundMessage(messaging, (payload) => {
                    //   console.log('onBackgroundMessage:', payload);
                    //   // setMessage(payload);
                    // });
                  } else {
                    console.log(
                      'No registration token available. Request permission to generate one.'
                    );

                    // shows on the UI that permission is required
                  }
                })
                .catch((err) => {
                  console.log(
                    'An error occurred while retrieving token. ',
                    err
                  );
                  // catch error while creating client token
                });
            })
            .catch(function (err) {
              console.log('error:', err);
            });
        });
    }
    // });
  }
}
