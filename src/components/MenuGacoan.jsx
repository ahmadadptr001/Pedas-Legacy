import React from "react";

const menuItems = [
    {
        id: 1,
        nama: "Mie Gacoan Lv 1",
        harga: "Rp 10.000",
        gambar: "https://media.istockphoto.com/id/2217230955/photo/fried-noodles-gacoan-with-fried-dumpling-topping.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jv8GbJgn43GLk4bkTR_CjgVkenrDZUQYG1UeW3edAek=",
    },
    {
        id: 2,
        nama: "Mie Gacoan Lv 2",
        harga: "Rp 11.000",
        gambar: "https://media.istockphoto.com/id/2217230955/photo/fried-noodles-gacoan-with-fried-dumpling-topping.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jv8GbJgn43GLk4bkTR_CjgVkenrDZUQYG1UeW3edAek=",
    },
    {
        id: 3,
        nama: "Mie Gacoan Lv 3",
        harga: "Rp 12.000",
        gambar: "https://media.istockphoto.com/id/2217230955/photo/fried-noodles-gacoan-with-fried-dumpling-topping.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jv8GbJgn43GLk4bkTR_CjgVkenrDZUQYG1UeW3edAek=",
    },
    {
        id: 4,
        nama: "Es Teh Jumbo",
        harga: "Rp 5.000",
        gambar: "https://media.istockphoto.com/id/2217230955/photo/fried-noodles-gacoan-with-fried-dumpling-topping.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jv8GbJgn43GLk4bkTR_CjgVkenrDZUQYG1UeW3edAek=",
    },
    {
        id: 5,
        nama: "Es Gacoan",
        harga: "Rp 8.000",
        gambar: "https://media.istockphoto.com/id/2217230955/photo/fried-noodles-gacoan-with-fried-dumpling-topping.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jv8GbJgn43GLk4bkTR_CjgVkenrDZUQYG1UeW3edAek=",
    },
    {
        id: 6,
        nama: "Pangsit Goreng",
        harga: "Rp 9.000",
        gambar: "https://media.istockphoto.com/id/2217230955/photo/fried-noodles-gacoan-with-fried-dumpling-topping.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jv8GbJgn43GLk4bkTR_CjgVkenrDZUQYG1UeW3edAek=",
    },
];

export default function MenuGacoan() {
    return (
        <section className="py-12 px-4 md:px-8 bg-base-200">
            <h2 className="text-3xl font-bold text-center mb-10">Menu Terlaris</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {menuItems.map(item => (
                    <div
                        key={item.id}
                        className="card bg-base-100 shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden"
                    >
                        <figure className="overflow-hidden">
                            <img
                                src={item.gambar}
                                alt={item.nama}
                                className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </figure>
                        <div className="card-body p-5">
                            <h3 className="card-title text-lg font-bold">{item.nama}</h3>
                            <p className="text-primary font-semibold mb-4">{item.harga}</p>
                            <div className="card-actions mt-auto">
                                <a
                                    href={`https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20pesan%20${encodeURIComponent(item.nama)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary w-full"
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
