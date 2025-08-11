import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import KontakPage from "../pages/KontakPage";
import ProdukPage from "../pages/ProdukPage";
import KeranjangPage from "../pages/KeranjangPage";
import TentangPage from "../pages/TentangPage";

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route element={<MainLayout />}>
                <Route path="/beranda" element={<HomePage />}></Route>
                <Route path="/kontak" element={<KontakPage />}></Route>
                <Route path="/produk" element={<ProdukPage />}></Route>
                <Route path="/keranjang" element={<KeranjangPage />}></Route>
                <Route path="/tentang" element={<TentangPage />}></Route>
            </Route>
        </Routes>
    )
}