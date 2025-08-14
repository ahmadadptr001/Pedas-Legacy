// pages/RegisterPage.jsx
import React, { useState } from "react";
import AuthHeader from "../components/AuthHeader";
import { createUser } from "../services/createUser";
import { Success } from "../components/alert/Success";
import { useNavigate } from "react-router-dom";
import { Error } from "../components/alert/Error";
import Swal from "sweetalert2"; // pastikan sudah diinstall: npm install sweetalert2

export default function RegisterPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ nama: "", email: "", kata_sandi: "", konfirmasiKataSandi: "" });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        // Cek input kosong
        if (!form.nama.trim() || !form.email.trim() || !form.kata_sandi.trim() || !form.konfirmasiKataSandi.trim()) {
            Error("Semua kolom wajib diisi!");
            return;
        }

        // Cek panjang nama
        if (form.nama.length < 3 || form.nama.length > 50) {
            Error("Nama harus antara 3 sampai 50 karakter!");
            return;
        }

        // Cek panjang kata sandi
        if (form.kata_sandi.length < 6 || form.kata_sandi.length > 30) {
            Error("Kata sandi harus antara 6 sampai 30 karakter!");
            return;
        }

        // Cek konfirmasi kata sandi
        if (form.kata_sandi !== form.konfirmasiKataSandi) {
            Error("Konfirmasi kata sandi tidak cocok!");
            return;
        }

        // Hapus konfirmasi sebelum dikirim
        const { konfirmasiKataSandi, ...dataUser } = form;

        // Tampilkan loading
        Swal.fire({
            title: "Memproses...",
            text: "Mohon tunggu sebentar",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        const hasil = await createUser(dataUser);

        // Tutup loading
        Swal.close();

        if (hasil.success === false) {
            Error(hasil.message);
            return;
        }

        Success(hasil.message);
        navigate("/masuk");
    };

    return (
        <section className="min-h-screen bg-base-200 flex flex-col">
            <AuthHeader title="Daftar" />

            <div className="flex flex-1 items-center justify-center px-4">
                <div className="card w-full max-w-md shadow-xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center mb-6">Buat Akun Baru</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="nama"
                                placeholder="Nama Lengkap"
                                value={form.nama}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                                maxLength={50}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                            <input
                                type="password"
                                name="kata_sandi"
                                placeholder="Kata Sandi"
                                value={form.kata_sandi}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                                minLength={6}
                                maxLength={30}
                            />
                            <input
                                type="password"
                                name="konfirmasiKataSandi"
                                placeholder="Konfirmasi Kata Sandi"
                                value={form.konfirmasiKataSandi}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                                minLength={6}
                                maxLength={30}
                            />
                            <button type="submit" className="btn btn-primary w-full">
                                Daftar
                            </button>
                        </form>
                        <p className="text-sm text-center mt-4">
                            Sudah punya akun?{" "}
                            <a href="/masuk" className="text-primary hover:underline">
                                Masuk
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
