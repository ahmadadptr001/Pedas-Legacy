import { auth } from "./db";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./db";

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const userDocRef = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userDocRef);
        if (!userSnapshot.exists()) {
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

export const onUserStateChange = callback => {
    return onAuthStateChanged(auth, user => {
        callback(user);
    });
};
