import { useState } from "react";

export default function PengaturanNotifikasi() {
  const [pengaturan, setPengaturan] = useState({
    pesananBaru: true,
    pembayaran: true,
    komentar: false,
    sistem: true,
  });

  const handleChange = (e) => {
    setPengaturan({
      ...pengaturan,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSimpan = () => {
    // Simpan pengaturan ke backend jika perlu
    window?.toast?.success?.("Pengaturan notifikasi disimpan!");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title text-xl mb-4">Pengaturan Notifikasi</h2>
          <form className="flex flex-col gap-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="pesananBaru"
                checked={pengaturan.pesananBaru}
                onChange={handleChange}
                className="checkbox checkbox-primary"
              />
              <span className="label-text font-medium">
                Notifikasi Pesanan Baru
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="pembayaran"
                checked={pengaturan.pembayaran}
                onChange={handleChange}
                className="checkbox checkbox-primary"
              />
              <span className="label-text font-medium">
                Notifikasi Pembayaran
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="komentar"
                checked={pengaturan.komentar}
                onChange={handleChange}
                className="checkbox checkbox-primary"
              />
              <span className="label-text font-medium">
                Notifikasi Komentar/Ulasan
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="sistem"
                checked={pengaturan.sistem}
                onChange={handleChange}
                className="checkbox checkbox-primary"
              />
              <span className="label-text font-medium">Notifikasi Sistem</span>
            </label>
            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={handleSimpan}
            >
              Simpan Pengaturan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
