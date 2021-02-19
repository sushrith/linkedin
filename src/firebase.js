import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD7JwK_D5bPdk0M3ms5Q4ddkYGW6Rxy1Z8",
    authDomain: "linkedin-clone-8c985.firebaseapp.com",
    projectId: "linkedin-clone-8c985",
    storageBucket: "linkedin-clone-8c985.appspot.com",
    messagingSenderId: "342597785378",
    appId: "1:342597785378:web:fb6f91e4113730ce04b77b"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export{db,auth};