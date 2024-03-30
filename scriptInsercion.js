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
  const nombreElement = document.getElementById("nombre");
  const apellidoElement = document.getElementById("apellidos"); // Corregido el ID a "apellidos"
  const generoElement = document.getElementById("genero");
  const fechaNacimientoElement = document.getElementById("fechaNacimiento");

  // Verificar si los elementos existen
  if (nombreElement && apellidoElement && generoElement && fechaNacimientoElement) { // Actualizado el nombre del elemento
    const nombre = nombreElement.value;
    const apellido = apellidoElement.value;
    const genero = generoElement.value;
    const fechaNacimiento = fechaNacimientoElement.value;

    // Crear un nuevo objeto con los datos del usuario
    const nuevoUsuario = {
      Nombre: nombre,
      Apellidos: apellido,
      Genero: genero,
      FechaNacimiento: fechaNacimiento
    };

    // Agregar el nuevo usuario a la base de datos
    push(usersRef, nuevoUsuario)
      .then(() => {
        console.log("Usuario agregado correctamente");
        // Limpiar el formulario después de agregar el usuario
        nombreElement.value = "";
        apellidoElement.value = "";
        generoElement.value = "";
        fechaNacimientoElement.value = "";
      })
      .catch((error) => {
        console.error("Error al agregar el usuario:", error);
      });
  } else {
    console.error("Uno o más elementos del formulario no existen");
  }
});
