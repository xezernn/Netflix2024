import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    return user
}


export default app