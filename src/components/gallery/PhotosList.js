import React, { useEffect, useState } from "react";
import './gallery.scss';
import PhotoDataService from "./../../services/gallery.services";
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    const data = await PhotoDataService.getAllPhotos();

    const photos = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    const sortedContents = photos.sort((a, b) => {
      return new Date(a.serviceDate) - new Date(b.serviceDate)
    }).reverse();

    setPhotos(sortedContents);
  };

  const deleteHandler = async (id) => {
    await PhotoDataService.deletePhoto(id);
    getPhotos();
  };

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <Link to="/gallery/new">Add Photo</Link>
      <div className="gallery__albums">
        {
          photos.map((photo, idx) => {
            return (
              <div className="gallery__albums-photo" key={idx}>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Gallery;