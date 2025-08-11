// pages/RegisterPage.jsx
import React, { useState } from "react";
import AuthHeader from "../components/AuthHeader";

export default function RegisterPage() {
    const [form, setForm] = useState({ nama: "", email: "", password: "" });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Register Data:", form);
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
                                name="password"
                                placeholder="Kata Sandi"
                                value={form.password}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
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
