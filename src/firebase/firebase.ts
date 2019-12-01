import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import config from "../constants/config";

// Initalize firebase ..
if (!firebase.apps.length) {
  firebase.initializeApp(config.firebase);
}

// Export APIs to be used
export const auth = firebase.auth();
export const db = firebase.firestore();
