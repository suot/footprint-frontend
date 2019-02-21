import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAMqGy3D4aygkACM_IgmyzEh69Q7Xn5ZO8",
    authDomain: "footprint-c5a39.firebaseapp.com",
    databaseURL: "https://footprint-c5a39.firebaseio.com",
    projectId: "footprint-c5a39",
    storageBucket: "footprint-c5a39.appspot.com",
    messagingSenderId: "568360049395"
};


firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;


