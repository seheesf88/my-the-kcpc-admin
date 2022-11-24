// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVSMMch2P-r7EItgON5DlQljYj0zzN9Zo",
  authDomain: "my-the-kcpc-admin-a9030.firebaseapp.com",
  projectId: "my-the-kcpc-admin-a9030",
  storageBucket: "my-the-kcpc-admin-a9030.appspot.com",
  messagingSenderId: "278716040417",
  appId: "1:278716040417:web:9bf4ee6fbcac7685bc63a0",
  measurementId: "G-JPK8GMXPW4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
