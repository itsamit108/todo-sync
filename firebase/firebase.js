import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBA0DpVfPiKBV6h4nBaxWMCCeGuasmTivI",
    authDomain: "todo-8467b.firebaseapp.com",
    projectId: "todo-8467b",
    storageBucket: "todo-8467b.appspot.com",
    messagingSenderId: "1028057357077",
    appId: "1:1028057357077:web:79c33fe4f27be925eda71c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
