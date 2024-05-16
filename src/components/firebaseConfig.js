import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'; 


const firebaseConfig = {
  apiKey: "AIzaSyDGFc8_2dV6pNQJeXiUM9qQEocpbwLQlZg",
  authDomain: "dia18-04.firebaseapp.com",
  databaseURL: "https://dia18-04-default-rtdb.firebaseio.com",
  projectId: "dia18-04",
  storageBucket: "dia18-04.appspot.com",
  messagingSenderId: "50463218640",
  appId: "1:50463218640:web:3e5f65ad1212b0164577d5",
  measurementId: "G-FZ4080JYSJ"
};

// Inicialize o Firebase
// Delete o Firebase App existente, se existir
if (firebase.apps.length) {
  firebase.apps[0].delete()
    .then(() => {
      console.log('Firebase App excluído com sucesso');
      // Inicialize o Firebase com a nova configuração
      firebase.initializeApp(firebaseConfig);
    })
    .catch(error => {
      console.error('Erro ao excluir o Firebase App:', error);
    });
} else {
  console.log('Nenhum Firebase App encontrado para excluir');
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
