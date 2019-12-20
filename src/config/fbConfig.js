import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAvVhpmN4E3MxqEZF1iAaQ2KRoJFYaSkUs",
  authDomain: "react-firebase-718bd.firebaseapp.com",
  databaseURL: "https://react-firebase-718bd.firebaseio.com",
  projectId: "react-firebase-718bd",
  storageBucket: "react-firebase-718bd.appspot.com",
  messagingSenderId: "111206240550",
  appId: "1:111206240550:web:f4165962f9f195ef0271e7",
  measurementId: "G-45E3WNRGTV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
