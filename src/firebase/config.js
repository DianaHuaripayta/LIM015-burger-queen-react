// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use.
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-j8jiwMrxsGT_Bq1X0vtYuMRxIQe2KEg",
    authDomain: "burger-queen-react-b5fd7.firebaseapp.com",
    projectId: "burger-queen-react-b5fd7",
    storageBucket: "burger-queen-react-b5fd7.appspot.com",
    messagingSenderId: "590900891807",
    appId: "1:590900891807:web:71ce3ae93399363f70d2aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export default app;