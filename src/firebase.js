import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import dotenv from "dotenv";
import toast from "react-hot-toast";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


export const registr = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        toast.success("Qeydiyyatdan keçdiniz!");
        return user
    } catch (error) {
        toast.error(error.message);
    }
}

export const login = async (email, password) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    if (user) {
        try {
            toast.success("Giriş olundu!");
            return user

        } catch (error) {
            console.log( error);
        }
    }
}


// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

export const logout = async () => {
    try {
        await signOut(auth)
        toast.success("Çıxış olundu");
        return true
    } catch (error) {
        toast.error(error.message);
    }
}

export default app