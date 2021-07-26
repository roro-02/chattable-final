var firebaseConfig = {
      apiKey: "AIzaSyBf6wvHZgHMMftS488QbLxvR9lJjxTETGk",
      authDomain: "chattable-842e7.firebaseapp.com",
      projectId: "chattable-842e7",
      storageBucket: "chattable-842e7.appspot.com",
      messagingSenderId: "151697924146",
      appId: "1:151697924146:web:ba3817c2b54e452aeedc2b",
      measurementId: "G-1NJHPW9SXS"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
