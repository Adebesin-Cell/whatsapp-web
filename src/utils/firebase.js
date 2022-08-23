import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBAqnVS611leKkV8CH1Je1HO5LkKAddrKc',
  authDomain: 'whatsapp-23063.firebaseapp.com',
  projectId: 'whatsapp-23063',
  storageBucket: 'whatsapp-23063.appspot.com',
  messagingSenderId: '678468252115',
  appId: '1:678468252115:web:5d4bd59a760992c7ea7f26',
  measurementId: 'G-NL6LQ10R3J',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
