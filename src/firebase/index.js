// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";


const vapidKey = "BOhTuW-RiLunVDToebfz7YKAXfv4bG1P81n03kn-x04RyxdI1AZ5D1OxbXAhT0cCY_iSWCqa8NziCPmql7wIxTY"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfo4sfEtAumAcveqikF4nFeQFb7wk18Wc",
    authDomain: "fir-shopping-8e43d.firebaseapp.com",
    projectId: "fir-shopping-8e43d",
    storageBucket: "fir-shopping-8e43d.appspot.com",
    messagingSenderId: "686926329797",
    appId: "1:686926329797:web:9f733d3c9fe910b08ffdac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();
getToken(messaging, {vapidKey})
    .then(currentToken => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
            console.log('currentToken', currentToken);
            sendTokenToServer(currentToken);
        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    })

const sendTokenToServer = token => {
    if(localStorage.getItem('tokenSentToServer')) return;
    // TODO implementar lógica de que en el servidor se almacene el token
    console.log('Ha almacenado el token');
    localStorage.setItem('tokenSentToServer', '1')
}

export const db = getFirestore(app);