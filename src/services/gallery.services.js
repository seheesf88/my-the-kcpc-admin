import { db, storage } from "../firebase-config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";

const photoCollectionRef = collection( db, "photos" );
const imageListRef = ref(storage, 'images/')
class PhotoDataService {
  deletePhoto = (id) => {
    const photoDoc = doc(db, "photos", id);
    return deleteDoc(photoDoc); 
  }

  getAllPhotos = async () => {
    let images = [];
  
    try {
      const response = await listAll(imageListRef);

      for (const item of response.items) {
        console.log(item)
        try {
          const url = await getDownloadURL(item);
          images.push(url);
        } catch (error) {
          console.error("Error getting download URL:", error);
        }
      }

      return images;
    } catch (error) {
      return [];
    }
  }
}

export default new PhotoDataService();