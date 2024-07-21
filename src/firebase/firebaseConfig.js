import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  initializeAuth,
  getReactNativePersistence
} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBdrsqxTbuWq9oy5lKJBKv3Vm_F8N4COTw",
  authDomain: "todo-d2686.firebaseapp.com",
  projectId: "todo-d2686",
  storageBucket: "todo-d2686.appspot.com",
  messagingSenderId: "757677223383",
  appId: "1:757677223383:web:d0c2c08c2150561243af92",
  measurementId: "G-VK5RB10CMY"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth'ı başlat ve AsyncStorage kullan
const auth = getAuth(app); // Firebase Auth'ı almak için sadece getAuth kullanılır

// Firestore'u başlat
const db = getFirestore(app);


// Email ile giriş yapma fonksiyonu
export const signInWithEmail = async(email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user; 
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Hata: ', errorCode, errorMessage);
    throw error; // Hata fırlat
  }
}


// Email ile kullanıcı oluşturma fonksiyonu
export const createUserWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Hata Kod:', errorCode);
    console.log('Hata Mesajı:', errorMessage);
    // Daha fazla bilgi için error nesnesini detaylı şekilde loglayabilirsiniz
    console.log('Hata Detayları:', error);
    throw error;
  }
}


export { db, collection, addDoc, getDocs };