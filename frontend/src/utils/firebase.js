import * as firebase from 'firebase/app';
import 'firebase/storage';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDWK3R4WZjVoLDY_7ONBDHy9sGNih95MHw",
    authDomain: "findme-56.firebaseapp.com",
    databaseURL: "https://findme-56.firebaseio.com",
    projectId: "findme-56",
    storageBucket: "findme-56.appspot.com",
    messagingSenderId: "1089747313144",
});

const Storage = app.storage();

export { Storage }