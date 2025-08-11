import React from "react";

export default function TentangPage() {
    return (
        <section className="py-12 px-4 md:px-16 bg-base-200">
            <div className="max-w-6xl mx-auto">
                {/* Judul */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Tentang Kami</h2>

                {/* Konten */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Gambar */}
                    <div>
                        <img
                            src="https://media.istockphoto.com/id/2189833393/photo/an-indonesian-most-popular-spicy-noodles-which-is-very-popular-among-the-young-people-mie.webp?a=1&b=1&s=612x612&w=0&k=20&c=NIaJM9wbuj0x5SHA9Qq_MVThrOmaFr5BAEnsJbqPzGI="
                            alt="Tentang Kami"
                            className="rounded-2xl shadow-xl w-full h-auto object-cover"
                        />
                    </div>

                    {/* Teks */}
                    <div>
                        <p className="mb-4 text-lg leading-relaxed">
                            Selamat datang di <span className="font-bold">Gacoan Online</span>, tempat terbaik untuk menikmati{" "}
                            <span className="font-bold">Mie Gacoan</span> favorit Anda. Kami menghadirkan rasa pedas nikmat dan minuman segar langsung ke
                            genggaman Anda melalui sistem pemesanan online yang mudah dan cepat.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed">
                            Sejak berdiri, kami berkomitmen untuk memberikan layanan terbaik dengan bahan berkualitas, harga terjangkau, dan pengalaman
                            pelanggan yang menyenangkan.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Misi kami adalah membuat setiap gigitan menjadi pengalaman yang tak terlupakan, dan setiap pelanggan merasa seperti bagian dari
                            keluarga besar Gacoan.
                        </p>
                    </div>
                </div>

                {/* Visi & Misi */}
                <div className="mt-12 bg-base-100 rounded-xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold mb-4">Visi & Misi</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Menyajikan makanan dan minuman berkualitas tinggi dengan harga terjangkau.</li>
                        <li>Memberikan layanan cepat, ramah, dan memuaskan.</li>
                        <li>Menghadirkan inovasi menu yang sesuai selera pelanggan.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
