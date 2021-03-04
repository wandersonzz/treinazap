import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyB0dXGUnqzrn9Mdj3pTGgTDy2vwn6N3syw",
    authDomain: "treinazap-d4870.firebaseapp.com",
    projectId: "treinazap-d4870",
    storageBucket: "treinazap-d4870.appspot.com",
    messagingSenderId: "786902820742",
    appId: "1:786902820742:web:b5c2979a8cdc081247ee07"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
