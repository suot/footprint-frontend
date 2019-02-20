import app from 'firebase/app';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAMqGy3D4aygkACM_IgmyzEh69Q7Xn5ZO8",
    authDomain: "footprint-c5a39.firebaseapp.com",
    databaseURL: "https://footprint-c5a39.firebaseio.com",
    projectId: "footprint-c5a39",
    storageBucket: "footprint-c5a39.appspot.com",
    messagingSenderId: "568360049395"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;


