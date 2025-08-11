import React from "react";

export default function KontakPage() {
    return (
        <section className="py-12 px-4 md:px-8 bg-base-200">
            <h2 className="text-3xl font-bold text-center mb-10">Hubungi Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Informasi Kontak */}
                <div className="space-y-6">
                    <div className="bg-base-100 shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">Alamat</h3>
                        <p className="text-sm opacity-80">Jl. Contoh No. 123, Kendari, Sulawesi Tenggara</p>
                    </div>

                    <div className="bg-base-100 shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">Telepon / WhatsApp</h3>
                        <a
                            href="https://wa.me/6281234567890?text=Halo%20Gacoan,%20saya%20ingin%20bertanya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-semibold"
                        >
                            +62 812-3456-7890
                        </a>
                    </div>

                    <div className="bg-base-100 shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">Media Sosial</h3>
                        <div className="flex gap-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                Instagram
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>

                {/* Form Kontak */}
                <form className="bg-base-100 shadow-md rounded-lg p-6 space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Nama</span>
                        </label>
                        <input type="text" placeholder="Masukkan nama Anda" className="input mt-2 input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Masukkan email Anda" className="input  input-bordered mt-2 w-full" required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Pesan</span>
                        </label>
                        <textarea className="textarea mt-2 textarea-bordered w-full" placeholder="Tulis pesan Anda..." rows="4" required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Kirim Pesan
                    </button>
                </form>
            </div>
        </section>
    );
}
