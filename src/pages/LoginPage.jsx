import React, { useState } from "react";
import { loginManual } from "../services/authManual";
import AuthHeader from "../components/AuthHeader";
import { loginWithGoogle } from "../services/auth";
import { Success } from "../components/alert/Success";
import { useNavigate } from "react-router-dom";
import { Error } from "../components/alert/Error";

export default function LoginPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setError(null);
        const hasil = await loginManual(form.email, form.password);
        Success(hasil.message);
        localStorage.setItem("data-login", JSON.stringify(hasil))
        navigate("/beranda");
        return;

    };

    const handleLoginGoogle = async () => {
        setError(null);
        setLoading(true);

        const { user, error } = await loginWithGoogle();

        setLoading(false);
        if (error) {
            setError(error.message);
        } else {
            Success("Berhasil login!");
            localStorage.setItem("data-login", JSON.stringify(user))
            navigate("/beranda");
        }
    };

    return (
        <section className="min-h-screen bg-base-200 flex flex-col">
            <AuthHeader title="Masuk" />

            <div className="flex flex-1 items-center justify-center px-4">
                <div className="card w-full max-w-md shadow-xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center mb-6">Selamat Datang Kembali</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Kata Sandi"
                                value={form.password}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                            {error && <p className="text-error text-center">{error}</p>}
                            <button type="submit" className={`btn btn-primary w-full ${loading ? "loading" : ""}`} disabled={loading}>
                                Masuk
                            </button>
                        </form>

                        <div className="divider">atau</div>

                        <button onClick={handleLoginGoogle} className={`btn btn-soft btn-warning  w-full ${loading ? "loading" : ""}`} disabled={loading}>
                            Masuk dengan Google
                        </button>

                        <p className="text-sm text-center mt-4">
                            Belum punya akun?{" "}
                            <a href="/daftar" className="text-primary hover:underline">
                                Daftar
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
