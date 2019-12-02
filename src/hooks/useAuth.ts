import { useState, useEffect } from "react";

import { firebase, db } from "../firebase";
import { Profile } from "../types/Profile";

export default () => {
  /* 
    Create state for the data
  */
  const [user, setUser] = useState(null) as any;

  /* 
    Run this when the component using it is mounted
  */
  useEffect(() => {
    // Construct function to get user profile data
    // - using aync/await
    async function getUserWithProfile(user: any) {
      // Get profile from firestore db ..
      try {
        const query = await db.getUserProfile(user.uid);

        // Extract data from query
        const data = query.docs.map(doc => {
          return doc.data();
        })[0];

        // Create merged profile with user props
        const userWithProfile = {
          ...data,
          username: user.email,
          id: user.uid,
        } as Profile;

        // Update state with profile
        setUser(userWithProfile);

        // Error getting profile ..
      } catch (error) {
        // Do nothing.
      }
    }

    // Run this when Auth state has changed .. (login/logout)
    firebase.auth.onAuthStateChanged((authUser: any) => {
      if (authUser) {
        getUserWithProfile(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  // Return user ..
  return [user];
};
