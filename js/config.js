// Initialize Firebase
var config = {
    apiKey: "AIzaSyBqxqnlvnDeucySAakhZ_OvU-D5s9tTLSU",
    authDomain: "fitm-system-3.firebaseapp.com",
    databaseURL: "https://fitm-system-3.firebaseio.com",
    projectId: "fitm-system-3",
    storageBucket: "fitm-system-3.appspot.com",
    messagingSenderId: "1083923833969"
  };
firebase.initializeApp(config);
var dbRef = firebase.database().ref();
var database = firebase.database();
