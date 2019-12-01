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
  useEffect(
    () => {
      // Make database call for profile ..
      db
        .getUserProfile(user.uid)
        .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => {
            return doc.data();
          })[0];

          const profile = {
            ...data,
            username: user.email,
            id: user.uid,
          } as Profile;

          // Update state with images
          setData({
            profile,
            error: null,
          });
        })
        .catch(error => {
          // Error happened, update state..
          setData({
            profile: null,
            error,
          });
        });
    },
    [user, setData]
  );

  /* 
    Return data for component consumption
  */
  return [data.profile, data.error];
};
