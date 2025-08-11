import React from "react";

export default function HeroGacoan() {
    const slides = [
        {
            id: 1,
            title: "Mie Gacoan Lv 1",
            desc: "Rasa pedas ringan cocok untuk kamu yang baru mulai mencoba",
            img: "https://media.istockphoto.com/id/2189833393/photo/an-indonesian-most-popular-spicy-noodles-which-is-very-popular-among-the-young-people-mie.webp?a=1&b=1&s=612x612&w=0&k=20&c=NIaJM9wbuj0x5SHA9Qq_MVThrOmaFr5BAEnsJbqPzGI=",
            link: "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20pesan%20Mie%20Gacoan%20Lv%201",
        },
        {
            id: 2,
            title: "Es Gacoan Segar",
            desc: "Minuman dingin pelepas dahaga setelah makan mie pedas",
            img: "https://media.istockphoto.com/id/2222031895/photo/cool-thai-tea-ready-to-eat.webp?a=1&b=1&s=612x612&w=0&k=20&c=sfZoDiWyfqsH0GbOgV88bSnj29uUBU-zBReUBF2jbP0=",
            link: "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20pesan%20Es%20Gacoan",
        },
        {
            id: 3,
            title: "Pangsit Goreng Renyah",
            desc: "Cemilan gurih renyah yang pas menemani mie pedasmu",
            img: "https://media.istockphoto.com/id/2212136547/photo/mie-gacoan-with-fried-snacks.webp?a=1&b=1&s=612x612&w=0&k=20&c=bibe2OYUl5_TxBEn93DoyzlZxJIIOWqdcOFX70qxw_k=",
            link: "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20pesan%20Pangsit%20Goreng",
        },
    ];

    return (
        <section className="w-full">
            <div className="carousel w-full h-[65vh] md:h-[85vh]">
                {slides.map((slide, idx) => (
                    <div key={slide.id} id={`slide${slide.id}`} className="carousel-item relative w-full">
                        {/* Background Gambar */}
                        <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />

                        {/* Overlay gradasi */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center px-6 md:px-16">
                            <div className="text-white max-w-xl">
                                <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">{slide.title}</h1>
                                <p className="py-4 text-sm md:text-lg">{slide.desc}</p>
                                <a href={slide.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-md md:btn-lg shadow-lg">
                                    Pesan Sekarang
                                </a>
                            </div>
                        </div>

                        {/* Navigasi Manual */}
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
                            <a
                                href={`#slide${slides[(idx - 1 + slides.length) % slides.length].id}`}
                                className="btn btn-circle bg-black/50 hover:bg-primary text-white border-none"
                            >
                                ❮
                            </a>
                            <a
                                href={`#slide${slides[(idx + 1) % slides.length].id}`}
                                className="btn btn-circle bg-black/50 hover:bg-primary text-white border-none"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
