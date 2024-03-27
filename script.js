console.log("El archivo script.js se ha cargado correctamente.");

// Importación de las funciones necesarias de Firebase SDK
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js';
import { getDatabase, ref, push, child, update } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

// Configuración de Firebase
const firebaseConfig = {
  // Tu configuración de Firebase
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicialización de la referencia a la base de datos
const db = getDatabase(app);
const usersRef = ref(db, "Usuarios");

document.getElementById("userForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenir que el formulario se envíe

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;

  const newUserId = push(usersRef).key; // Generar clave única
  const newUserRef = child(usersRef, newUserId);

  const userData = { Nombre: nombre, Apellido: apellido, Edad: edad };
  update(newUserRef, userData); // Actualizar la base de datos

  // Limpiar el formulario
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("edad").value = "";
});
