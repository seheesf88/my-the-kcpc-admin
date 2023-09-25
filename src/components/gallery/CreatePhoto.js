import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { storage } from "../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid"

const CreatePhoto = () => {
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [imageUpload, setImageUpload] = useState(null);

  const uploadImage = () => {
    if(imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then(() => {
      alert('Image uploaded')
    })
  }
 
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
      </div>
      <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}} />
      <button onClick={uploadImage}>POST</button>
    </>
  );
};

export default CreatePhoto;