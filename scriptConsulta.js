console.log("El archivo script.js se ha cargado correctamente.");

// Importar las funciones necesarias del SDK de Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js';
import { getDatabase, ref, push, orderByChild } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';


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
  const apellidoElement = document.getElementById("apellidos");

  // Verificar si los elementos existen
  if (nombreElement && apellidoElement) {
    const nombre = nombreElement.value;
    const apellido = apellidoElement.value;

    // Realizar la consulta a la base de datos
    const queryRef = orderByChild(usersRef,"nombre"); // Ordenar por el campo 'nombre'
    const query = queryRef.equalTo(nombre); // Filtrar por nombre igual al nombre proporcionado

    // Realizar la consulta y manejar los resultados
    get(query)
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const userData = childSnapshot.val();
          // Aquí puedes hacer algo con los datos del usuario, por ejemplo, mostrarlos en la consola
          console.log(userData);
        });
      })
      .catch((error) => {
        console.error("Error al realizar la consulta:", error);
      });
  } else {
    console.error("Uno o más elementos del formulario no existen");
  }
});
