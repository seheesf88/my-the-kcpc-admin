import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import PhotoDataService from "./../../services/gallery.services";

const CreatePhoto = () => {
  const [message, setMessage] = useState({ error: false, msg: "" });
  const navigate = useNavigate();

  const addPhoto = async (newPhoto) => {
    try {
      await PhotoDataService.addPhoto(newPhoto);
      setMessage({ error: false, msg: "New content added successfully!" });
      navigate("/gallery");
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };
 
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
      here
      </div>
    </>
  );
};

export default CreatePhoto;