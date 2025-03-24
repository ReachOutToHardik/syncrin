
// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyC058zkZHux9IaWOVorCtajMgZ5kaO6EHE",
  authDomain: "hardik-example-1.firebaseapp.com",
  databaseURL: "https://hardik-example-1-default-rtdb.firebaseio.com",
  projectId: "hardik-example-1",
  storageBucket: "hardik-example-1.appspot.com",
  messagingSenderId: "739740755839",
  appId: "1:739740755839:web:f6d98436299dd2d7235c4a",
  measurementId: "G-2Z3NQ5W7BX"
};
export const app = initializeApp(firebaseConfig);
