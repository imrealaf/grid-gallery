import { useState, useEffect } from "react";
import { firebase } from "../firebase";

export default () => {
  // User state
  const [user, setUser] = useState(null);

  // On auth state change ..
  useEffect(
    () => {
      firebase.auth.onAuthStateChanged((authUser: any) => {
        setUser(authUser);
      });
    },
    [user]
  );

  // Return user ..
  return [user];
};
