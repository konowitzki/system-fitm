// TODO: Initialize Firebase
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

// qrcode
document.addEventListener('DOMContentLoaded', function () {
    if($('#qrcode').length > 0) {
        var qrcode = new QRCode("qrcode", {
            text: "https://fitm-system-3.firebaseapp.com/report.html",
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}, false);