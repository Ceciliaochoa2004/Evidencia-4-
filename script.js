 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyDuKWd9CaVpUkeBJJksaKUS2t6CXWn6GPw",
  authDomain: "flowers-cecii.firebaseapp.com",
  projectId: "flowers-cecii",
  storageBucket: "flowers-cecii.appspot.com",
  messagingSenderId: "347178546213",
  appId: "1:347178546213:web:8db90765d9b9ef8e34fbcc",
  measurementId: "G-QG4PTFP19Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let emailR = document.querySelector("#emailR")
let passR = document.querySelector("#passR")
let buttonR = document.querySelector("#buttonR")
let emailL = document.querySelector("#emailL")
let passL = document.querySelector("#passL")
let buttonL = document.querySelector("#buttonL")
let buttonO = document.querySelector('#buttonO')

//Registro usuario
buttonR.addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, emailR.value, passR.value)
    .then((userCredential) => { 
      const user = userCredential.user;
      console.log("Exito");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });

})

//Login
buttonL.addEventListener('click', ()=>{
  signInWithEmailAndPassword(auth, emailL.value, passL.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("Login");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
  });
})

//LogOut
buttonO.addEventListener('click', ()=>{
  signOut(auth).then(() => {
  }).catch((error) => {
  });
})

//Detecta los cambios en la secion
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(user.email);
  } else {
    console.log("Desconectado");
  }
});