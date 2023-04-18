import {initializeApp } from "firebase/app";
import {getFirestore,serverTimestamp} from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
    apiKey: "XXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXX.firebaseapp.com",
    projectId: "XXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXX.appspot.com",
    messagingSenderId: "XXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    measurementId: "XXXXXXXXXXXX"
}

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export const storage = getStorage(app);
