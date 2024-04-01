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
const db = getDatabase(); // Obtener una referencia a la base de datos

// Agregar un evento "submit" al formulario
document.getElementById("userForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevenir que el formulario se envíe

  // Obtener el valor del campo de userID
  const userId = document.getElementById("userId").value;

  // Verificar si el campo de userID no está vacío
  if (userId) {
    try {
      // Realizar la consulta a la base de datos
      const queryRef = ref(db, `Usuarios/${userId}`);
      const snapshot = await get(queryRef);

      // Verificar si el usuario existe
      if (snapshot.exists()) {
        const userData = snapshot.val();
        console.log(userData); // Mostrar los datos del usuario en la consola

        // Eliminar el usuario de la base de datos
        await remove(queryRef);
        console.log("Usuario eliminado correctamente");
      } else {
        console.error("El usuario con el userID proporcionado no existe");
      }
    } catch (error) {
      console.error("Error al realizar la consulta o al eliminar el usuario:", error);
    }
  } else {
    console.error("El campo de userID está vacío");
  }
});
