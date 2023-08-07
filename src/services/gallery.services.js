import { db } from "../firebase-config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";

const photoCollectionRef = collection( db, "photos" );
class PhotoDataService {
  addPhoto = (newPhoto) => {
    const data = {
      ...newPhoto,
      createdAt: serverTimestamp()
    }

    return addDoc(photoCollectionRef, data);
  }

  updateContent = (id, updatedPhoto) => {
    const photoDoc = doc(db, "photos", id);
    return updateDoc(photoDoc, updatedPhoto);
  }

  deletePhoto = (id) => {
    const photoDoc = doc(db, "photos", id);
    return deleteDoc(photoDoc); 
  }

  getAllPhotos = () => {
    return getDocs(photoCollectionRef);
  }

  getContent = (id) => {
    const photoDoc = doc(db, "photos", id);
    return getDoc(photoDoc) 
  }

}

export default new PhotoDataService();