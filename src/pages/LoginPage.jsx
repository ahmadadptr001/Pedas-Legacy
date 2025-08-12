import React, { useRef, useState } from "react";
import { loginManual } from "../services/authManual";
import AuthHeader from "../components/AuthHeader";
import ReCAPTCHA from "react-google-recaptcha";
import { loginWithGoogle } from "../services/auth";
import { Success } from "../components/alert/Success";
import { Error } from "../components/alert/Error"
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const recaptchaRef = useRef();

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setError(null);

        // mengecek rechaptcha
        const token = await recaptchaRef.current.getValue();
        if (!token) {
            Error("Harap selesaikan verifikasi reCAPTCHA.");
            return;
        }

        const hasil = await loginManual(form.email, form.password);
        if (hasil.success){
            Success(hasil.message);
            localStorage.setItem("data-login", JSON.stringify(hasil));
            navigate("/beranda");
            return;
        }
        Error(hasil.message);
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
            localStorage.setItem("data-login", JSON.stringify(user));
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
                            <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} ref={recaptchaRef} className="flex justify-center"/>
                            <button type="submit" className={`btn btn-primary w-full`}>
                                Masuk
                            </button>
                        </form>

                        <div className="divider">atau</div>

                        <button onClick={handleLoginGoogle} className={`w-max-sm cursor-pointer mx-auto ${loading ? "loading" : ""}`} disabled={loading}>
                            <i className="fab fa-google text-xl border p-2 rounded-[50%] text-primary"></i>{" "}
                            <span className="text-xl text-secondary"> oogle</span>
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
