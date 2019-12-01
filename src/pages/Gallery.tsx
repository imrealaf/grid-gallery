import React from "react";

import { UserContext } from "../firebase/UserContext";
import { auth } from "../firebase";
import useImages from "../hooks/useImages";
import useProfile from "../hooks/useProfile";

import Profile from "../components/Profile";
import GalleryGrid from "../components/GalleryGrid";

const Gallery: React.FC = () => {
  // Grab the user from the UserContext
  const user = React.useContext(UserContext) as any;

  // Get images data from custom hook `useImages` with user id
  const [images, numImages, imagesError] = useImages(user.uid) as any;

  // Get profile data from custom hook `useImages` with user
  const [profile, profileError] = useProfile(user) as any;

  return (
    <React.Fragment>
      <Profile profile={profile} numImages={numImages} error={profileError} />
      <div className="gallery-grid-container container">
        <GalleryGrid images={images} error={imagesError} />
        <button
          onClick={() => {
            auth.doSignOut();
          }}
        >
          Sign out
        </button>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
