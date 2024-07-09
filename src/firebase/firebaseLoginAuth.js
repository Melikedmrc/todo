import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseConfig';

const signInWithEmailAndPasswordAsync = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export { signInWithEmailAndPasswordAsync };
