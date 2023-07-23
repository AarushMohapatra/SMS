var firebaseConfig = {
  apiKey: "AIzaSyDJhzwo_nAyUIdqxSDzGNyL4QeRy_GWk2Q",
  authDomain: "login-cb19c.firebaseapp.com",
  databaseURL: "https://login-cb19c-default-rtdb.firebaseio.com",
  projectId: "login-cb19c",
  storageBucket: "login-cb19c.appspot.com",
  messagingSenderId: "35014884101",
  appId: "1:35014884101:web:075f7824e9021984c7556c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//
// ADD YOUR FIREBASE LINKS

function addUser() {

    user_name = document.getElementById("user_name").value;
    pass_word = document.getElementById("passwordinput").value;
    try {
      //.child(user_name)
    firebase.database().ref("/").update({
      username: user_name,
      password: pass_word
    });
    } catch(error) {
      window.alert("error adding user to FireBase");
      console.log(error);
      window.alert(error);
    }
    localStorage.setItem("user_name", user_name);
    window.alert("User Added!");
      window.location = "room";
  }