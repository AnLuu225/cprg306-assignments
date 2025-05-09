import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const items = [];
  try {
    const itemsRef = collection(db, 'users', userId, 'items');
    const itemsQuery = query(itemsRef);
    const querySnapshot = await getDocs(itemsQuery);
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error('Fail getting items:', error);
  }
  return items;
};

export const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, 'users', userId, 'items');
    const docRef = await addDocs(itemsRef, item);
    return docRef.id; 
  } catch (error) {
    console.error('Fail adding item:', error);
  }
};