// ProdukPage.jsx
import React from "react";

const produkList = [
    {
        id: 1,
        nama: "Mie Gacoan Lv 1",
        harga: "Rp 10.000",
        kategori: "Makanan",
        deskripsi: "Mie pedas level 1 dengan rasa pedas ringan, cocok untuk pemula.",
        gambar: "https://media.istockphoto.com/id/2217230955/photo/fried-noodles-gacoan-with-fried-dumpling-topping.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jv8GbJgn43GLk4bkTR_CjgVkenrDZUQYG1UeW3edAek=",
    },
    {
        id: 2,
        nama: "Mie Gacoan Lv 2",
        harga: "Rp 11.000",
        kategori: "Makanan",
        deskripsi: "Rasa pedas sedang yang pas untuk penikmat tantangan.",
        gambar: "https://media.istockphoto.com/id/2217230955/photo/fried-noodles-gacoan-with-fried-dumpling-topping.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jv8GbJgn43GLk4bkTR_CjgVkenrDZUQYG1UeW3edAek=",
    },
    {
        id: 3,
        nama: "Es Gacoan",
        harga: "Rp 8.000",
        kategori: "Minuman",
        deskripsi: "Minuman manis segar yang cocok untuk menyejukkan tenggorokan.",
        gambar: "https://media.istockphoto.com/id/2222031895/photo/cool-thai-tea-ready-to-eat.webp?a=1&b=1&s=612x612&w=0&k=20&c=sfZoDiWyfqsH0GbOgV88bSnj29uUBU-zBReUBF2jbP0=",
    },
    {
        id: 4,
        nama: "Pangsit Goreng",
        harga: "Rp 9.000",
        kategori: "Cemilan",
        deskripsi: "Pangsit renyah isi ayam, cocok sebagai pendamping mie.",
        gambar: "https://media.istockphoto.com/id/2212136547/photo/mie-gacoan-with-fried-snacks.webp?a=1&b=1&s=612x612&w=0&k=20&c=bibe2OYUl5_TxBEn93DoyzlZxJIIOWqdcOFX70qxw_k=",
    },
];

export default function ProdukPage() {
    return (
        <section className="py-12 px-4 md:px-8 bg-base-200 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-10">Produk Kami</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {produkList.map(produk => (
                    <div key={produk.id} className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <figure>
                            <img src={produk.gambar} alt={produk.nama} className="w-full h-52 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{produk.nama}</h2>
                            <span className="badge badge-secondary w-fit mb-2">{produk.kategori}</span>
                            <p className="text-sm opacity-80">{produk.deskripsi}</p>
                            <p className="text-primary font-bold mt-2">{produk.harga}</p>
                            <div className="card-actions justify-end">
                                <a
                                    href={`https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20pesan%20${encodeURIComponent(produk.nama)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-sm"
                                >
                                    Pesan
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
