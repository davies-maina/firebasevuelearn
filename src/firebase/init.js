import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAmFXscrsxIe2Kq_DnP6KHwlKB8Ck3hGPA",
    authDomain: "fbprac-1408a.firebaseapp.com",
    databaseURL: "https://fbprac-1408a.firebaseio.com",
    projectId: "fbprac-1408a",
    storageBucket: "fbprac-1408a.appspot.com",
    messagingSenderId: "171887680011",
    appId: "1:171887680011:web:0cd73cb4ed4cf7750a850e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
/* firebaseApp.firestore().settings({ timestampsInSnapshots: true }); */

export default firebaseApp.firestore();