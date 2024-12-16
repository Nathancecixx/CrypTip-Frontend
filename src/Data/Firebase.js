import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCelBpQPzTJLBSg-3uYlPPahVwSl0BUDlU",
    authDomain: "cryptip-a6a64.firebaseapp.com",
    projectId: "cryptip-a6a64",
    storageBucket: "cryptip-a6a64.firebasestorage.app",
    messagingSenderId: "697855066258",
    appId: "1:697855066258:web:a5ab2b26525dd8791e664b"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
