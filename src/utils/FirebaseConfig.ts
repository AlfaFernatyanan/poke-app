import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDx7cT57v2azIRt430LC1oFsC3SvGuJRoE",
  authDomain: "poke-app-com.firebaseapp.com",
  projectId: "poke-app-com",
  storageBucket: "poke-app-com.appspot.com",
  messagingSenderId: "824747625788",
  appId: "1:824747625788:web:2acfdc68492986e8a4e239",
  measurementId: "G-5S4YNK3KMP",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
