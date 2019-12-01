import { useState, useEffect } from "react";
import { db } from "../firebase";
import { Image } from "../types/Image";

export default (id: string) => {
  /* 
    Create state for the data
  */
  const [data, setData] = useState({}) as any;

  /* 
    Run this when the component using it is mounted
  */
  useEffect(
    () => {
      // Create empty array for collection
      let images: Image[] = [];

      // Make database call for images ..
      db
        .getUserImages(id)
        .then(querySnapshot => {
          // Loop through each record and push data to array..
          querySnapshot.forEach(doc => {
            let data = doc.data() as Image;
            images.push(data);
          });

          // Update state with images
          setData({
            images,
            numImages: images.length,
            error: null,
          });
        })
        .catch(error => {
          // Error happened, update state..
          setData({
            images: null,
            numImages: 0,
            error,
          });
        });
    },
    [id, setData]
  );

  /* 
    Return data for component consumption
  */
  return [data.images, data.numImages, data.error];
};
