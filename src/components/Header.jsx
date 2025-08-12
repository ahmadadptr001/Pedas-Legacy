import { useEffect, useState } from "react";
import { data, NavLink, useNavigate } from "react-router-dom";
import { Success } from "./alert/Success";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        const dataLogin = JSON.parse(localStorage.getItem("data-login"));
        console.log(dataLogin);
        if (dataLogin) {
            setIsLoggedIn(true);
            if (dataLogin.user) {
                if (dataLogin.user.email.toLowerCase() === "ahmadadptr@gmail.com") {
                    setIsAdmin(true);
                    return;
                }
            } else {
                if (dataLogin.email.toLowerCase() === "ahmadadptr@gmail.com") {
                    setIsAdmin(true);
                    return;
                }
            }
            return;
        }
    }, []);

    const handleLogOut = () => {
        if (confirm("Anda yakin ingin keluar dari akun ini?")) {
            localStorage.removeItem("data-login");
            Success("Berhasil keluar dari akun");
            navigate("/");
        }
    };

    return (
        <header className="w-full sticky top-0 z-50">
            <nav className="navbar bg-base-100 px-4 md:px-8 shadow-sm">
                {/* Left side */}
                <div className="navbar-start">
                    {/* Mobile dropdown */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact bg-base-300 dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li>
                                <NavLink to="/beranda" className="flex items-center gap-2">
                                    <i className="fas fa-home"></i> Beranda
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/produk" className="flex items-center gap-2">
                                    <i className="fas fa-box"></i> Produk
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/tentang" className="flex items-center gap-2">
                                    <i className="fas fa-info-circle"></i> Tentang
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/kontak" className="flex items-center gap-2">
                                    <i className="fas fa-envelope"></i> Kontak
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/keranjang" className="flex items-center gap-2">
                                    <i className="fas fa-shopping-cart"></i> Keranjang
                                </NavLink>
                            </li>

                            {isAdmin && (
                                <>
                                    <li className="border-t mt-2 pt-2 font-bold">Admin</li>
                                    <li>
                                        <NavLink to="/admin" className="flex items-center gap-2">
                                            <i className="fas fa-tachometer-alt"></i> Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/admin/produk" className="flex items-center gap-2">
                                            <i className="fas fa-cubes"></i> Kelola Produk
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/admin/promo" className="flex items-center gap-2">
                                            <i className="fas fa-tags"></i> Kelola Promo
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/admin/outlet" className="flex items-center gap-2">
                                            <i className="fas fa-store"></i> Kelola Outlet
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/admin/laporan" className="flex items-center gap-2">
                                            <i className="fas fa-chart-line"></i> Laporan
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* Brand */}
                    <NavLink to="/" className="flex items-center font-bold text-xl">
                        Pedas<span className="text-primary">Legacy</span>
                    </NavLink>
                </div>

                {/* Center menu for desktop */}
                {/* Center menu for desktop */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <NavLink
                            to="/beranda"
                            className={({ isActive }) => (isActive ? "text-primary font-semibold" : "text-base hover:text-primary transition-colors")}
                        >
                            Beranda
                        </NavLink>
                        <NavLink
                            to="/produk"
                            className={({ isActive }) => (isActive ? "text-primary font-semibold" : "text-base hover:text-primary transition-colors")}
                        >
                            Produk
                        </NavLink>
                        <NavLink
                            to="/keranjang"
                            className={({ isActive }) => (isActive ? "text-primary font-semibold" : "text-base hover:text-primary transition-colors")}
                        >
                            Keranjang
                        </NavLink>

                        {isAdmin && (
                            <NavLink
                                to="/admin"
                                className={({ isActive }) => (isActive ? "text-accent font-semibold" : "text-base hover:text-accent transition-colors")}
                            >
                                Admin
                            </NavLink>
                        )}
                    </ul>
                </div>

                {/* Right side */}
                <div className="navbar-end gap-2">
                    {!isLoggedIn ? (
                        <>
                            <NavLink to="/daftar" className="btn-sm btn btn-ghost">
                                <FontAwesomeIcon icon={faUserPlus} /> Daftar
                            </NavLink>
                            <NavLink to="/masuk" className="btn-sm btn btn-primary">
                                <FontAwesomeIcon icon={faSignInAlt} /> Masuk
                            </NavLink>
                        </>
                    ) : (
                        <button onClick={() => handleLogOut()} className="btn-sm btn btn-error">
                            <FontAwesomeIcon icon={faSignOutAlt} /> Keluar
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
}
