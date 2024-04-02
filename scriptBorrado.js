console.log("El archivo script.js se ha cargado correctamente.");

// Importar las funciones necesarias del SDK de Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js';
import { getDatabase, ref, push, get, query, orderByChild, equalTo, remove } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

// Your web app's Firebase configuration
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
    //const queryRef = query(usersRef, orderByChild("Nombre"), equalTo(nombre)); // Ordenar por el campo 'nombre' y filtrar por nombre igual al proporcionado
    const queryRef = query(usersRef);
    // Realizar la consulta y manejar los resultados
    get(queryRef)
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const userData = childSnapshot.val();
          // Aquí puedes hacer algo con los datos del usuario, por ejemplo, mostrarlos en la consola
          console.log(userData);

          // Eliminar el usuario de la base de datos
          const userId = childSnapshot.key; // Obtener el ID del usuario
          if(userData.Nombre==nombre && userData.Apellidos==apellido){
            
            remove(ref(db, `Usuarios/${userId}`))
          }
          // remove(ref(db, `Usuarios/${userId}`))
          //   .then(() => {
          //     console.log("Usuario eliminado correctamente");
          //   })
          //   .catch((error) => {
          //     console.error("Error al eliminar el usuario:", error);
          //   });
        });
      })
      .catch((error) => {
        console.error("Error al realizar la consulta:", error);
      });
  } else {
    console.error("Uno o más elementos del formulario no existen");
  }
});
