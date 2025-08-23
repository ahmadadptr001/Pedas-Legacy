import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/beranda");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200 px-4 md:px-16">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80"
            className="w-full xs:w-auto sm:max-w-sm rounded-lg shadow-2xl"
            alt="Mie Pedas Legacy"
          />
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-6">
              Selamat Datang di <span className="text-primary">Pedas</span>
              <span className="text-secondary"> Legacy</span>
            </h1>
            <p className="py-4 text-lg leading-relaxed">
              Nikmati sensasi mie pedas dengan cita rasa khas yang membuat lidah
              bergoyang. Cocok untuk semua pecinta pedas yang ingin tantangan
              baru di setiap gigitan.
            </p>
            <a
              href="/beranda"
              className="btn btn-primary btn-lg mt-6 
                animate-bounce transition-transform duration-300 ease-in-out"
              style={{ fontSize: "1.5rem", padding: "1rem 3rem" }}
            >
              Lihat Menu
            </a>
          </div>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section className="py-12 px-6 bg-base-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Produk Unggulan</h2>
          <p className="text-sm opacity-70">Pilihan spesial dari kami</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Mie Pedas Level 1",
              img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&q=80",
            },
            {
              title: "Mie Pedas Level 3",
              img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&q=80",
            },
            {
              title: "Mie Pedas Level 5",
              img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&q=80",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <figure>
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p>Rasakan pedasnya yang pas di lidah dan bikin ketagihan.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm btn-secondary hover:scale-105 transition-transform duration-300" onClick={handleRedirect}>
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-warning text-primary-content text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Siap Tantang Pedas?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Ayo pesan sekarang dan nikmati promo spesial bulan ini!
        </p>
        <button className="btn btn-lg hover:scale-105 transition-transform duration-300">
          Pesan Sekarang
        </button>
      </section>

      {/* Animasi CSS */}
    </div>
  );
}
