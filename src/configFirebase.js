const admin = require("firebase-admin");
const firebase = require('firebase')

const serviceAccount = require("./parcialweb2-946df-firebase-adminsdk-nkgmg-4ce613b19d.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://parcialweb2-946df.firebaseio.com"
});


var firebaseConfig = {
    apiKey: "AIzaSyA4YY8F4a_VdO-NuIzc3zWEW2uLUiOKWAw",
    authDomain: "parcialweb2-946df.firebaseapp.com",
    databaseURL: "https://parcialweb2-946df.firebaseio.com",
    projectId: "parcialweb2-946df",
    storageBucket: "parcialweb2-946df.appspot.com",
    messagingSenderId: "948845909830",
    appId: "1:948845909830:web:3b76525dad780c87cef747"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

module.exports = { admin, firebase };