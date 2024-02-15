import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import toast from "react-hot-toast";
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_APP_API_KEY,
//     authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_APP_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_APP_MESSAGIN_SENDER_ID,
//     appId: import.meta.env.VITE_APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyAry5kuvUY7NuVlYzD1p5idqsOJjqruS_U",
    authDomain: "netflix-dd305.firebaseapp.com",
    projectId: "netflix-dd305",
    storageBucket: "netflix-dd305.appspot.com",
    messagingSenderId: "851595218010",
    appId: "1:851595218010:web:f8f505a50d1620941c9c63"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const registr = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        console.log("register oldu");
        return user
    } catch (error) {
        toast.error(error.message);
    }
}

export const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        console.log("login eledi");
        return user

    } catch (error) {
        toast.error(error.message);
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
        console.log("cixis eledi");
        return true

    } catch (error) {
        toast.error(error.message);
    }
}

export default app