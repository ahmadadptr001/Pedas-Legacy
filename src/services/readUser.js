// services/readUser.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "./db"; // pastikan db adalah instance dari getFirestore()

/**
 * Membaca semua data dari koleksi 'users' di Firestore
 * @returns {Promise<Array>} array data user
 */
export async function readUsers() {
    try {
        const usersCollection = collection(db, "users");
        const snapshot = await getDocs(usersCollection);

        const users = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return users;
    } catch (error) {
        console.error("Gagal membaca data users:", error);
        throw error;
    }
}
