import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1f10T3R73dpZFNto3_IH0zbK26rtLM5s",
    authDomain: "budo-shop.firebaseapp.com",
    projectId: "budo-shop",
    storageBucket: "budo-shop.appspot.com",
    messagingSenderId: "422863566555",
    appId: "1:422863566555:web:cb55ea6789652a58f53efe"
};

// Inicializamos la app



const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)

}