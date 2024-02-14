import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import toast from "react-hot-toast";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGIN_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const registr = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)

        return user
    } catch (error) {
        toast.error(error.message);
    }
}

export const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        toast.error(error.message);
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
        return true
    } catch (error) {
        toast.error(error.message);
    }
}

export default app