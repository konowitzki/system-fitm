// Session
let local = localStorage.getItem("session");
if (local === "undefined" || local === null) {
    window.location.href = "../login.html";
}else{
    // session
    let userId = localStorage.getItem("session");
    // alert(userId);
    firebase.database().ref('users/data/' + userId).once('value').then(function(snapshot) {
        $("#result").text(snapshot.val().name);
    });
}

// logout
function logout() {
  localStorage.removeItem("session");
  window.location.href = "../login.html";
}

