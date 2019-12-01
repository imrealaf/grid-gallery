import { useState, useEffect } from "react";
import { db } from "../firebase";
import { Profile } from "../types/Profile";

export default (user: any) => {
  /* 
    Create state for the data
  */
  const [data, setData] = useState({}) as any;

  /* 
    Run this when the component using it is mounted
  */
  useEffect(() => {
    // Construct function to get data
    // - using aync/await
    async function getProfile() {
      // Get profile from firestore db ..
      try {
        const query = await db.getUserProfile(user.uid);

        // Extract data from query
        const data = query.docs.map(doc => {
          return doc.data();
        })[0];

        // Create merged profile with user props
        const profile = {
          ...data,
          username: user.email,
          id: user.uid,
        } as Profile;

        // Update state with profile
        setData({
          profile,
          error: null,
        });

        // Error getting profile ..
      } catch (error) {
        setData({
          profile: null,
          error,
        });
      }
    }

    // Call async function
    getProfile();
  }, [user, setData]);

  /* 
    Return data for component consumption
  */
  return [data.profile, data.error];
};
