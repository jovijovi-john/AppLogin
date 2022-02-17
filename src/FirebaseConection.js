import firebase from 'firebase';
import "firebase/database";
import "firebase/auth";

let firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
};
  
// Initialize Firebase

if (!firebase.apps.length) { // Isso aqui é pra não abrir duas conexões juntas, pois isso gera um erro
    firebase.initializeApp(firebaseConfig);
}
export default firebase;