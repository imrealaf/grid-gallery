import React, { useContext } from "react";

import { UserContext } from "../firebase/UserContext";
import useImages from "../hooks/useImages";

import ProfileSection from "../components/ProfileSection";
import GalleryGrid from "../components/GalleryGrid";

const Gallery: React.FC = () => {
  // Grab the user from the UserContext
  const user = useContext(UserContext) as any;

  // Get images data from custom hook `useImages` with user id
  const [images, numImages, imagesError] = useImages(user.id) as any;

  return (
    <React.Fragment>
      {/* Profile section */}
      <ProfileSection profile={user} numImages={numImages} />

      {/* Gallery grid */}
      <div className="gallery-grid-container container">
        <GalleryGrid images={images} error={imagesError} />
      </div>
    </React.Fragment>
  );
};

export default Gallery;
