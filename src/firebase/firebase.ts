import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import config from "../constants/config";

if (!firebase.apps.length) {
  firebase.initializeApp(config.firebase);
}

export const auth = firebase.auth();
export const db = firebase.firestore();
