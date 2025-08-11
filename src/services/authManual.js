import { db } from "./db";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function loginManual(email, password) {
    const usersRef = collection(db, "users");
    // Query user dengan email yang sama
    const q = query(usersRef, where("email", "==", email));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return { success: false, message: "User tidak ditemukan" };
    }

    // Asumsi email unik, ambil data user pertama
    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    // Cek password (ingat ini tidak aman kalau password disimpan plain text)
    if (userData.kata_sandi !== password) {
        return { success: false, message: "Password salah" };
    }

    return { success: true, message: "Login berhasil", user: userData};
}
