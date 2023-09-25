import React, { useEffect, useState } from "react";
import './gallery.scss';
import PhotoDataService from "./../../services/gallery.services";

import { storage } from "../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid"

const Gallery = () => {
  const [photoList, setPhotoList] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);

  const getPhotos = async () => {
    const photos = await PhotoDataService.getAllPhotos()
    setPhotoList(photos)
  };

  const uploadImage = () => {
    if(imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then(() => {
      alert('Image uploaded')
      getPhotos();
    })
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="container gallery mt-5">
      <h1>Gallery</h1>
      <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}} />
      <button type="button" className="btn btn-primary" onClick={uploadImage}>Post new photo</button>
      <div className="gallery__albums row mt-5">
        {
          photoList.length === 0 ?
          <div className="col-12">No image</div> :
          photoList.map((photo, idx) => {
            return (
              <div className="gallery__albums-photo col-4" key={idx}>
                <img src={photo} className="gallery__albums-photo-img"/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Gallery;