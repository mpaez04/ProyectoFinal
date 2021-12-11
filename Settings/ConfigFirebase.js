import firebase from 'firebase/app';
import 'firebase/database';

const config={
    apiKey: "AIzaSyC9TvFSMuXL5UYcaTzzgzdmkjvPrCLPk3E",
    authDomain: "proyectofinal-d622a.firebaseapp.com",
    databaseURL: "https://proyectofinal-d622a-default-rtdb.firebaseio.com",
    projectId: "proyectofinal-d622a",
    storageBucket: "proyectofinal-d622a.appspot.com",
    messagingSenderId: "786063409297",
    appId: "1:786063409297:web:9578bdf0962b1d682f3f30",
    measurementId: "${config.measurementId}"

}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()

export default fb;