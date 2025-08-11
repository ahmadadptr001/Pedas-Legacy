export default function LandingPage() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80"
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt="Mie Pedas Legacy"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">
                            Selamat Datang di <span className="text-primary">Pedas</span>
                            <span className="text-secondary"> Legacy</span>
                        </h1>
                        <p className="py-6">
                            Nikmati sensasi mie pedas dengan cita rasa khas yang membuat lidah bergoyang. Cocok untuk semua pecinta pedas yang ingin tantangan
                            baru di setiap gigitan.
                        </p>
                        <a href="/beranda" className="btn btn-primary">Lihat Menu</a>
                    </div>
                </div>
            </section>

            {/* Produk Unggulan */}
            <section className="py-12 px-6 bg-base-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">Produk Unggulan</h2>
                    <p className="text-sm opacity-70">Pilihan spesial dari kami</p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        { title: "Mie Pedas Level 1", img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&q=80" },
                        { title: "Mie Pedas Level 3", img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&q=80" },
                        { title: "Mie Pedas Level 5", img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&q=80" },
                    ].map((item, i) => (
                        <div key={i} className="card bg-base-200 shadow-lg">
                            <figure>
                                <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title">{item.title}</h3>
                                <p>Rasakan pedasnya yang pas di lidah dan bikin ketagihan.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm btn-secondary">Pesan Sekarang</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 bg-primary text-primary-content text-center">
                <h2 className="text-3xl font-bold mb-4">Siap Tantang Pedas?</h2>
                <p className="mb-6">Ayo pesan sekarang dan nikmati promo spesial bulan ini!</p>
                <button className="btn btn-secondary">Pesan Sekarang</button>
            </section>
        </div>
    );
}
