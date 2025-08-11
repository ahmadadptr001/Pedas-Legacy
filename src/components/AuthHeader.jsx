// components/AuthHeader.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AuthHeader({ title }) {
    return (
        <header className="bg-gradient-to-r from-primary to-secondary text-white py-4 shadow-md">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6">
                {/* Tombol kembali */}
                <Link to="/beranda" className="flex items-center gap-2 hover:opacity-90 transition">
                    {/* Icon panah kiri */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm font-medium hidden sm:inline">Kembali ke Beranda</span>
                </Link>

                {/* Judul halaman */}
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-center flex-1">{title}</h1>

                {/* Spacer untuk menjaga layout tetap seimbang */}
                <div className="w-5 sm:w-[160px]"></div>
            </div>
        </header>
    );
}
