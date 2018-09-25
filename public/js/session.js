// Session
let userId = localStorage.getItem("session");
if (userId === "undefined" || userId === null) {
  window.location.href = "../index.html";
} else {
  firebase
    .database()
    .ref("users/data/" + userId)
    .once("value")
    .then(function(snapshot) {
      $("#result").text(snapshot.val().name);
      var account = snapshot.val().name;
    });
}

// logout
function logout() {
  localStorage.removeItem("session");
  window.location.href = "../index.html";
}
