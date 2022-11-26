import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlz7G6_Wy9ULkvf670e3z6LTYxzPjK8Ks",
  authDomain: "serratec-2ce3f.firebaseapp.com",
  projectId: "serratec-2ce3f",
  storageBucket: "serratec-2ce3f.appspot.com",
  messagingSenderId: "869398358821",
  appId: "1:869398358821:web:4f271a485993d841f308cc",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const emailAdministrador = "amelhorturma4ever@gmail.com";
