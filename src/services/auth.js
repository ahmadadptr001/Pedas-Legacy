import { auth } from "./db";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "./db";

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account", // selalu munculin popup pilih akun
});

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Cek apakah sudah ada user dengan email ini
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", user.email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      // Jika belum ada, buat user baru
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        uid: user.uid,
        nama: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
        createdAt: serverTimestamp(),
        provider: "google",
      });
    }

    return { user, error: null };
  } catch (error) {
    return { user: null, error };
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

export const onUserStateChange = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
