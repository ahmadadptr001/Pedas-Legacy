// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center p-6">
            <h1 className="text-9xl font-extrabold text-primary">404</h1>
            <p className="text-xl mt-4">Oops! Halaman yang kamu cari tidak ditemukan.</p>
            <p className="text-sm opacity-70 mb-6">
                Mungkin alamat URL salah atau halaman sudah dihapus.
            </p>
            <Link to="/" className="btn btn-primary btn-lg">
                <i className="fa fa-home mr-2"></i>
                Kembali ke Beranda
            </Link>
        </section>
    );
}
