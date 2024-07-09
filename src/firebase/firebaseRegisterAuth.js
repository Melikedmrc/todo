// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from './firebaseConfig';
// import { doc, setDoc, collection } from 'firebase/firestore';

// const signUpWithEmailAndPassword = async (email, password, name, surname) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     // 'users' koleksiyonunu kullanarak yeni bir belge oluştur
//     await setDoc(doc(collection(db, "users"), user.uid), {
//       name: name,
//       surname: surname,
//       email: email
//       // İhtiyaca göre diğer bilgileri de ekleyebilirsiniz
//     });

//     return user;
//   } catch (error) {
//     console.error("Error signing up:", error);
//     throw error;
//   }
// };

// export { signUpWithEmailAndPassword };
