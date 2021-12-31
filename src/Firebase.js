import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxmZmP66b4YdhkgFa1iuhXDJSOEuVTFKI",
  authDomain: "forum-1fbb0.firebaseapp.com",
  databaseURL: "https://forum-1fbb0-default-rtdb.firebaseio.com",
  projectId: "forum-1fbb0",
  storageBucket: "forum-1fbb0.appspot.com",
  messagingSenderId: "454966833894",
  appId: "1:454966833894:web:01df0b285fe427776f0127",
  measurementId: "G-5PL8XKB3LQ"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
