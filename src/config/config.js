//import * as firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/database';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCbu9RaSJjv7NjNA2xG7QQVaAOZzOeKYMU",
  authDomain: "react-todo-6f169.firebaseapp.com",
  databaseURL: "https://react-todo-6f169.firebaseio.com",
  projectId: "react-todo-6f169",
  storageBucket: "",
  messagingSenderId: "1079379145359"
};
firebase.initializeApp(config);

export const databaseuser = firebase.database().ref().child('users');
export const databaseTodos = firebase.database().ref().child('todos');
