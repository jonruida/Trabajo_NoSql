// Configurar Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "https://trabajo-final-nosql-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Referencia a la lista de usuarios en la base de datos
const userListRef = database.ref('users');

// Manejador de envío del formulario
document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener los datos del formulario
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Guardar los datos en la base de datos
    userListRef.push({
        name: name,
        age: age
    });

    // Limpiar el formulario
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
});

// Observador de cambios en la base de datos
userListRef.on('value', (snapshot) => {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    snapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();
        const listItem = document.createElement('div');
        listItem.textContent = `${userData.name}, ${userData.age} years old`;
        userList.appendChild(listItem);
    });
});
