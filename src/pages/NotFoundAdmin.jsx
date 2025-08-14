import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundAdmin() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
            <i className="fas fa-exclamation-triangle text-warning text-6xl mb-4"></i>
            <h1 className="text-4xl font-bold mb-2">Halaman Tidak Ditemukan</h1>
            <p className="mb-6 text-gray-500">Halaman yang Anda cari tidak tersedia di panel admin.</p>
            <Link to="/admin/dashboard" className="btn btn-primary">
                <i className="fas fa-arrow-left mr-2"></i> Kembali ke Dashboard
            </Link>
        </div>
    );
}
