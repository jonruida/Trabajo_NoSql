console.log("El archivo script.js se ha cargado correctamente.");

// Importar las funciones necesarias del SDK de Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDhOogls9sWiA4KAEf-REHkN1slpvgYBg4",
    authDomain: "trabajo-final-nosql.firebaseapp.com",
    databaseURL: "https://trabajo-final-nosql-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "trabajo-final-nosql",
    storageBucket: "trabajo-final-nosql.appspot.com",
    messagingSenderId: "1029951381100",
    appId: "1:1029951381100:web:d3fe73fcf2cdeda6f94249",
    measurementId: "G-F1EVQ7W0PT"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

// Referencia a la base de datos de usuarios
const usersRef = ref(db, 'Usuarios');

// Agregar un evento "submit" al formulario
document.getElementById("userForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenir que el formulario se envíe

  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;

  // Generar una clave única para el nuevo usuario
  const newUserId = push(usersRef).key;

  // Construir los datos del nuevo usuario
  const userData = {
    Nombre: nombre,
    Apellido: apellido,
    Edad: edad
  };

  // Actualizar el nuevo usuario en la base de datos
  set(ref(db, `Usuarios/${newUserId}`), userData);

  // Limpiar el formulario después de enviar los datos
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("edad").value = "";
});
