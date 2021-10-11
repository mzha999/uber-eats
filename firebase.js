import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA20k6WL51up7wqzGS9paPZnfKqZFNQf_4",
  authDomain: "uber-eats-9ba51.firebaseapp.com",
  projectId: "uber-eats-9ba51",
  storageBucket: "uber-eats-9ba51.appspot.com",
  messagingSenderId: "1080921483729",
  appId: "1:1080921483729:web:fe39d3e6438234c62f58f0",
  measurementId: "G-ZV3F3QQV1C",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
