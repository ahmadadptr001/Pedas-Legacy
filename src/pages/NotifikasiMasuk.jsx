import { useState } from "react";

export default function NotifikasiMasuk() {
  const [notifikasi, setNotifikasi] = useState([
    {
      id: 1,
      judul: "Pesanan Baru",
      pesan: "Ada pesanan baru dari pelanggan.",
      waktu: "2025-08-23 10:15",
      sudahDibaca: false,
    },
    {
      id: 2,
      judul: "Pembayaran Berhasil",
      pesan: "Pembayaran pesanan #123 telah berhasil.",
      waktu: "2025-08-22 16:40",
      sudahDibaca: true,
    },
  ]);

  const tandaiDibaca = (id) => {
    setNotifikasi((prev) =>
      prev.map((n) => (n.id === id ? { ...n, sudahDibaca: true } : n))
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Notifikasi Masuk</h2>
      <div className="flex flex-col gap-4">
        {notifikasi.length === 0 && (
          <div className="text-gray-500">Tidak ada notifikasi.</div>
        )}
        {notifikasi.map((n) => (
          <div
            key={n.id}
            className={`card shadow border transition-all ${
              n.sudahDibaca ? "bg-base-200" : "bg-warning/20 border-warning"
            }`}
          >
            <div className="card-body p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="card-title text-base">{n.judul}</h3>
                  <p className="text-sm text-gray-600">{n.pesan}</p>
                  <span className="text-xs text-gray-400">{n.waktu}</span>
                </div>
                {!n.sudahDibaca && (
                  <button
                    className="btn btn-xs btn-warning"
                    onClick={() => tandaiDibaca(n.id)}
                  >
                    Tandai Dibaca
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
