import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBdrsqxTbuWq9oy5lKJBKv3Vm_F8N4COTw",
  authDomain: "todo-d2686.firebaseapp.com",
  projectId: "todo-d2686",
  storageBucket: "todo-d2686.appspot.com",
  messagingSenderId: "757677223383",
  appId: "1:757677223383:web:d0c2c08c2150561243af92",
  measurementId: "G-VK5RB10CMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);
export { app, auth, db };

