import React, { useRef, useState, useEffect } from "react";

import { Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  setShow: any;
  profile: any;
}

// Note: Not completely implemented yet ..
// --
const EditProfileModal: React.FC<Props> = ({ show, profile, setShow }) => {
  /* 
    States
  */
  // Note: these are defined any because they are undefined at the time of creation
  const [name, setName] = useState(null) as any;
  const [image, setImage] = useState(null) as any;
  const [bio, setBio] = useState(null) as any;

  /* 
    Element refs 
  */
  // Note: defined as any because the ref is null on creation
  const nameRef: any = useRef();
  const imageRef: any = useRef();
  const bioRef: any = useRef();

  /* 
    Modal close handler 
  */
  const handleCloseModal = () => {
    setShow(false);
  };

  /* 
    On submit handler
  */
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // To do ...
  };

  return profile ? (
    <Modal className="edit-profile" show={show} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmitHandler} noValidate>
          {/* Name field */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Your name"
              ref={nameRef}
              defaultValue={profile.name}
              onChange={(e: React.ChangeEvent) => {
                const target = e.target as HTMLFormElement;
                setName(target.value);
              }}
            />
          </div>

          {/* Image field */}
          <div className="form-group">
            <label htmlFor="name">Image</label>
            <input
              className="form-control"
              type="text"
              name="image"
              placeholder="Your image"
              ref={imageRef}
              defaultValue={profile.image}
              onChange={(e: React.ChangeEvent) => {
                const target = e.target as HTMLFormElement;
                setImage(target.value);
              }}
            />
          </div>

          {/* Bio field */}
          <div className="form-group">
            <label htmlFor="name">Bio</label>
            <textarea
              className="form-control"
              name="bio"
              placeholder="Your bio"
              ref={bioRef}
              defaultValue={profile.bio}
              onChange={(e: React.ChangeEvent) => {
                const target = e.target as HTMLFormElement;
                setBio(target.value);
              }}
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="text-right">
            <button type="submit" className="btn btn-success">
              Save profile
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  ) : null;
};

export default EditProfileModal;
