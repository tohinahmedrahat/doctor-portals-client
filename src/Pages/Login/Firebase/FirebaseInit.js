import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConf";


const initializeFirebase = () => {
   
   initializeApp(firebaseConfig)
}

export default initializeFirebase;