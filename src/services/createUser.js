import { db } from "./db";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export async function createUser(userData) {
    try {
        const usersRef = collection(db, "users");

        // Cek dulu apakah email sudah ada
        const q = query(usersRef, where("email", "==", userData.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // Email sudah terdaftar
            return { success: false, message: "Email sudah digunakan, silakan pakai email lain." };
        }

        // Jika belum ada email yang sama, buat user baru
        const docRef = await addDoc(usersRef, userData);
        return { success: true, id: docRef.id, message: "User berhasil dibuat" };
    } catch (error) {
        console.error("Gagal membuat user:", error);
        return { success: false, message: error.message };
    }
}
