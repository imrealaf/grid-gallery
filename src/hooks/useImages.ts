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
  useEffect(() => {
    // Construct function to get data
    // - using aync/await
    async function getImages() {
      // Create empty array for collection
      let images: Image[] = [];

      // Get images from firestore db ..
      try {
        const query = await db.getUserImages(id);

        // Loop through each record and push data to array..
        query.forEach(doc => {
          let data = doc.data() as Image;
          images.push(data);
        });

        // Update state with images
        setData({
          images,
          numImages: images.length,
          error: null
        });

        // Error happened, update state..
      } catch (error) {
        setData({
          images: null,
          numImages: 0,
          error
        });
      }
    }

    // Call async function
    getImages();
  }, [id, setData]);

  /* 
    Return data for component consumption
  */
  return [data.images, data.numImages, data.error];
};
