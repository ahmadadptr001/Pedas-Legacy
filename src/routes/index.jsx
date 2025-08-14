import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import KontakPage from "../pages/KontakPage";
import ProdukPage from "../pages/ProdukPage";
import KeranjangPage from "../pages/KeranjangPage";
import TentangPage from "../pages/TentangPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import DashboardAdmin from "../pages/DashboardAdmin";
import NotFound from "../pages/NotFound";
import NotFoundAdmin from "../pages/NotFoundAdmin";
import KelolaPengguna from "../pages/KelolaPengguna";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/masuk" element={<LoginPage />}></Route>
            <Route path="/daftar" element={<RegisterPage />}></Route>
            <Route path="/" element={<LandingPage />} />
            <Route element={<MainLayout />}>
                <Route path="/beranda" element={<HomePage />}></Route>
                <Route path="/kontak" element={<KontakPage />}></Route>
                <Route path="/produk" element={<ProdukPage />}></Route>
                <Route path="/keranjang" element={<KeranjangPage />}></Route>
                <Route path="/tentang" element={<TentangPage />}></Route>
            </Route>

            <Route path="/admin" element={<Navigate to="/admin/404" replace />} />
            <Route path="/admin/*">
                <Route element={<AdminLayout />}>
                    <Route path="dashboard" element={<DashboardAdmin />} />
                    <Route path="users" element={<KelolaPengguna />} />
                    <Route path="*" element={<NotFoundAdmin />} />
                </Route>
            </Route>

            {/* handle halaman 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
