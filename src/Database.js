import firebaseApp from "./firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export async function getAllVideos() {
  const videosCol = collection(db, "videos");
  let result = [];
  let error = null;

  try {
    const snapshot = await getDocs(videosCol);
    result = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (e) {
    error = e;
  }

  return { result, error };
}