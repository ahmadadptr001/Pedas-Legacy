import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./db";

/**
 * Menghapus pengguna dari koleksi 'users' berdasarkan ID dokumen.
 * @param {string} userId - ID dokumen user di Firestore
 */
export async function deleteUser(userId) {
    if (!userId) throw new Error("User ID tidak boleh kosong");

    try {
        await deleteDoc(doc(db, "users", userId));
        return true;
    } catch (error) {
        console.error("Gagal menghapus user:", error);
        throw error;
    }
}
