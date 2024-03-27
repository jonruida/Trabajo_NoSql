<script type="module">
  console.log("El archivo script.js se ha cargado correctamente.");
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Obtener una referencia a la colección "Usuarios" en la base de datos
const db = firebase.database();
const usersRef = db.ref("Usuarios");

// Agregar un evento "submit" al formulario
document.getElementById("userForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenir que el formulario se envíe

  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;

  // Enviar los datos a la base de datos
  usersRef.push({
    Nombre: nombre,
    Apellido: apellido,
    Edad: edad
  });

  // Limpiar el formulario después de enviar los datos
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("edad").value = "";
});
</script>
