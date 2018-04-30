// import and configure firebase
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAA2wk-UDPJZ_fpgnK323xITaJlv9bpB-I",
  authDomain: "java-life-29734.firebaseapp.com",
  databaseURL: "https://java-life-29734.firebaseio.com",
  projectId: "java-life-29734",
  storageBucket: "java-life-29734.appspot.com",
  messagingSenderId: "1061498105938"
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
