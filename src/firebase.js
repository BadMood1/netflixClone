import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDR0pM2f4O16o5XpobeMtTdtwhnmfepBw",
    authDomain: "netflix-clone-d2c0b.firebaseapp.com",
    projectId: "netflix-clone-d2c0b",
    storageBucket: "netflix-clone-d2c0b.firebasestorage.app",
    messagingSenderId: "542515715918",
    appId: "1:542515715918:web:f7dad8fac4ac5bd2aac81f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        console.log(user);
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name: name,
            authProvider: "local",
            email: email,
        });
    } catch (error) {
        console.log(error.code);
        toast.error(error.code.split("/")[1].replaceAll("-", " "));
    }
};

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log("ОШИБКА");
        console.log(error.code);
        toast.error(error.code.split("/")[1].replaceAll("-", " "));
    }
};

const logout = () => {
    signOut(auth);
};

export { auth, db, signUp, login, logout };
