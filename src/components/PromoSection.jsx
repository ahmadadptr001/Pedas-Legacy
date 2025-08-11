// PromoSection.jsx
import React from "react";

const promos = [
    {
        id: 1,
        title: "Beli 2 Mie Gratis Es Teh Jumbo",
        desc: "Nikmati promo spesial, beli 2 Mie Gacoan level apa saja, gratis Es Teh Jumbo segar.",
        img: "https://media.istockphoto.com/id/2217230955/photo/fried-noodles-gacoan-with-fried-dumpling-topping.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jv8GbJgn43GLk4bkTR_CjgVkenrDZUQYG1UeW3edAek=", // Mie Gacoan
        label: "Hanya Hari Ini",
    },
    {
        id: 2,
        title: "Diskon 20% Hari Senin",
        desc: "Dapatkan potongan harga 20% untuk semua menu setiap hari Senin.",
        img: "https://media.istockphoto.com/id/2222031895/photo/cool-thai-tea-ready-to-eat.webp?a=1&b=1&s=612x612&w=0&k=20&c=sfZoDiWyfqsH0GbOgV88bSnj29uUBU-zBReUBF2jbP0=", // Es Gacoan
        label: "Setiap Senin",
    },
    {
        id: 3,
        title: "Paket Hemat Pelajar",
        desc: "Cukup tunjukkan kartu pelajar untuk menikmati paket hemat mulai dari Rp 15.000.",
        img: "https://media.istockphoto.com/id/2212136547/photo/mie-gacoan-with-fried-snacks.webp?a=1&b=1&s=612x612&w=0&k=20&c=bibe2OYUl5_TxBEn93DoyzlZxJIIOWqdcOFX70qxw_k=", // Pangsit Goreng
        label: "Khusus Pelajar",
    },
];

export default function PromoSection() {
    return (
        <section className="py-12 px-4 md:px-8 bg-base-100">
            <h2 className="text-3xl font-bold text-center mb-10">Promo & Penawaran Spesial</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {promos.map(promo => (
                    <div key={promo.id} className="card bg-base-200 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                        <figure className="relative">
                            <img src={promo.img} alt={promo.title} className="w-full h-48 object-cover" />
                            <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full shadow">{promo.label}</span>
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title">{promo.title}</h3>
                            <p className="text-sm opacity-80">{promo.desc}</p>
                            <div className="card-actions justify-end mt-4">
                                <a
                                    href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20promo%20Gacoan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-sm"
                                >
                                    Pesan Sekarang
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
