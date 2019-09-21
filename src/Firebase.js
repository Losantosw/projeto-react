import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyB1G3zGQNdDd690fI28cWJP0e6rlnpxWG0",
    authDomain: "projeto-dw2.firebaseapp.com",
    databaseURL: "https://projeto-dw2.firebaseio.com",
    projectId: "projeto-dw2",
    storageBucket: "",
    messagingSenderId: "528991494428",
    appId: "1:528991494428:web:7bf9eb291e49af17409ad9"
};

firebase.initializeApp(config);
firebase.firestore().settings(settings);



export default firebase;
