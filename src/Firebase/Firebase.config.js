// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFyWafAeEECjYZyg6CCObMhKE496jJHXw",
  authDomain: "drinko-coffee.firebaseapp.com",
  projectId: "drinko-coffee",
  storageBucket: "drinko-coffee.appspot.com",
  messagingSenderId: "248982429110",
  appId: "1:248982429110:web:c4d419b7201c81c96cf517"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;