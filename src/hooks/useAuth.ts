import { useState, useEffect } from "react";
import { firebase } from "../firebase";

export default () => {
  // User state
  const [user, setUser] = useState(null);

  // On auth state change ..
  useEffect(
    () => {
      firebase.auth.onAuthStateChanged((authUser: any) => {
        authUser ? setUser(authUser) : setUser(null);
      });
    },
    [user]
  );

  // Return user ..
  return [user];
};
