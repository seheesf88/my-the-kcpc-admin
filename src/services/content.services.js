import { db } from "../firebase-config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";

const contentCollectionRef = collection( db, "contents" );
class ContentDataService {
  addContent = (newContent) => {
    const data = {
      ...newContent,
      createdAt: serverTimestamp()
    }

    return addDoc(contentCollectionRef, data);
  }

  updateContent = (id, updatedContent) => {
    const contentDoc = doc(db, "contents", id);
    return updateDoc(contentDoc, updatedContent);
  }

  deleteContent = (id) => {
    const contentDoc = doc(db, "contents", id);
    return deleteDoc(contentDoc); 
  }

  getAllContents = () => {
    return getDocs(contentCollectionRef);
  }

  getContent = (id) => {
    const contentDoc = doc(db, "contents", id);
    return getDoc(contentDoc) 
  }

}

export default new ContentDataService();