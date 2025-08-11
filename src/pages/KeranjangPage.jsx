// KeranjangPage.jsx
import React, { useState } from "react";

export default function KeranjangPage() {
    const [keranjang, setKeranjang] = useState([
        {
            id: 1,
            nama: "Mie Gacoan Lv 1",
            harga: 10000,
            jumlah: 2,
            gambar: "https://media.istockphoto.com/id/2189833393/photo/an-indonesian-most-popular-spicy-noodles-which-is-very-popular-among-the-young-people-mie.webp?a=1&b=1&s=612x612&w=0&k=20&c=NIaJM9wbuj0x5SHA9Qq_MVThrOmaFr5BAEnsJbqPzGI=",
        },
        {
            id: 2,
            nama: "Es Gacoan",
            harga: 8000,
            jumlah: 1,
            gambar: "https://media.istockphoto.com/id/2222031895/photo/cool-thai-tea-ready-to-eat.webp?a=1&b=1&s=612x612&w=0&k=20&c=sfZoDiWyfqsH0GbOgV88bSnj29uUBU-zBReUBF2jbP0=",
        },
    ]);

    // Hitung total harga
    const totalHarga = keranjang.reduce((total, item) => total + item.harga * item.jumlah, 0);

    // Tambah jumlah
    const tambahJumlah = id => {
        setKeranjang(prev => prev.map(item => (item.id === id ? { ...item, jumlah: item.jumlah + 1 } : item)));
    };

    // Kurangi jumlah
    const kurangJumlah = id => {
        setKeranjang(prev => prev.map(item => (item.id === id && item.jumlah > 1 ? { ...item, jumlah: item.jumlah - 1 } : item)));
    };

    // Hapus item
    const hapusItem = id => {
        setKeranjang(prev => prev.filter(item => item.id !== id));
    };

    return (
        <section className="py-12 px-4 md:px-8 bg-base-200 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-10">Keranjang Belanja</h1>

            {keranjang.length === 0 ? (
                <p className="text-center text-lg">Keranjang kosong 😢</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full bg-base-100 shadow-lg rounded-lg">
                        <thead>
                            <tr>
                                <th>Produk</th>
                                <th>Harga</th>
                                <th>Jumlah</th>
                                <th>Total</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {keranjang.map(item => (
                                <tr key={item.id}>
                                    <td className="flex items-center gap-4">
                                        <img src={item.gambar} alt={item.nama} className="w-16 h-16 object-cover rounded-lg" />
                                        <span>{item.nama}</span>
                                    </td>
                                    <td>Rp {item.harga.toLocaleString()}</td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <button className="btn btn-xs btn-outline" onClick={() => kurangJumlah(item.id)}>
                                                -
                                            </button>
                                            <span>{item.jumlah}</span>
                                            <button className="btn btn-xs btn-outline" onClick={() => tambahJumlah(item.id)}>
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td>Rp {(item.harga * item.jumlah).toLocaleString()}</td>
                                    <td>
                                        <button className="btn btn-error btn-xs" onClick={() => hapusItem(item.id)}>
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Total harga & tombol checkout */}
                    <div className="flex flex-col md:flex-row justify-between items-center mt-6 bg-base-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold">Total: Rp {totalHarga.toLocaleString()}</h2>
                        <a
                            href={`https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20checkout%20pesanan%20senilai%20Rp%20${totalHarga.toLocaleString()}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary mt-4 md:mt-0"
                        >
                            Checkout via WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}
