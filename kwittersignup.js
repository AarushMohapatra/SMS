var firebaseConfig = {
  apiKey: "AIzaSyDTscdRlz7-TnvICi336UotmTensyv52Yc",
  authDomain: "login-f9f06.firebaseapp.com",
  databaseURL: "https://login-f9f06-default-rtdb.firebaseio.com",
  projectId: "login-f9f06",
  storageBucket: "login-f9f06.appspot.com",
  messagingSenderId: "402235516350",
  appId: "1:402235516350:web:f14952632b49dc7fa085ef"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// ADD YOUR FIREBASE LINKS

function addUser() {

    user_name = document.getElementById("user_name").value;
    pass_word = document.getElementById("passwordinput").value;
    try {
      //.child(user_name)
    firebase.database().ref("/").push({
      username: user_name,
      password: pass_word,
      Admin: "false"
    });
    } catch(error) {
      window.alert("error adding user to FireBase");
      console.log(error);
      window.alert(error);
    }
    localStorage.setItem("user_name", user_name);
    window.alert("User Added!");
      window.location = "kwitter_room.html";
  }