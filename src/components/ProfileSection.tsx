import React from "react";

// Component props
interface Props {
  profile: any;
  numImages: number;
  error?: any;
}

const ProfileSection: React.FC<Props> = ({ profile, numImages, error }) => {
  return profile && !error ? (
    <div className="profile">
      <div className="container">
        <div>
          <div
            className="profile_image"
            style={{ backgroundImage: `url(${profile.image})` }}
          />
        </div>
        <div>
          <h5 className="profile_name mb-1">{profile.name}</h5>
          <p className="profile_username mb-1">{profile.username}</p>
          <p className="profile_num_images mb-1">
            <strong>{numImages}</strong> images
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProfileSection;
