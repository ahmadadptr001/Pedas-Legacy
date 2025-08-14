import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Success } from "./alert/Success";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        const dataLogin = JSON.parse(localStorage.getItem("data-login"));
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
                {/* Brand di kiri */}
                <div className="navbar-start flex items-center">
                    <NavLink to="/" className="flex items-center font-bold text-xl">
                        Pedas<span className="text-primary">Legacy</span>
                    </NavLink>
                </div>

                {/* Menu tengah untuk desktop */}
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
                                to="/admin/dashboard"
                                className={({ isActive }) => (isActive ? "text-accent font-semibold" : "text-base hover:text-accent transition-colors")}
                            >
                                Admin
                            </NavLink>
                        )}
                    </ul>
                </div>

                {/* Dropdown di kanan untuk mobile */}
                <div className="navbar-end lg:hidden items-center flex">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="p-0 m-0 h-auto min-h-0 cursor-pointer flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact bg-base-300 dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li>
                                <NavLink to="/beranda">
                                    <i className="fas fa-home"></i> Beranda
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/produk">
                                    <i className="fas fa-box"></i> Produk
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/tentang">
                                    <i className="fas fa-info-circle"></i> Tentang
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/kontak">
                                    <i className="fas fa-envelope"></i> Kontak
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/keranjang">
                                    <i className="fas fa-shopping-cart"></i> Keranjang
                                </NavLink>
                            </li>

                            {isAdmin && (
                                <>
                                    <li className="border-t mt-2 pt-2 font-bold">Admin</li>
                                    <li>
                                        <NavLink to="/admin/dashboard">
                                            <i className="fas fa-tachometer-alt"></i> Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/admin/produk">
                                            <i className="fas fa-cubes"></i> Kelola Produk
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/admin/promo">
                                            <i className="fas fa-tags"></i> Kelola Promo
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/admin/outlet">
                                            <i className="fas fa-store"></i> Kelola Outlet
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/admin/laporan">
                                            <i className="fas fa-chart-line"></i> Laporan
                                        </NavLink>
                                    </li>
                                </>
                            )}

                            <li className="border-t mt-2 pt-2">
                                {!isLoggedIn ? (
                                    <>
                                        <NavLink to="/daftar">
                                            <FontAwesomeIcon icon={faUserPlus} /> Daftar
                                        </NavLink>
                                        <NavLink to="/masuk">
                                            <FontAwesomeIcon icon={faSignInAlt} /> Masuk
                                        </NavLink>
                                    </>
                                ) : (
                                    <button onClick={handleLogOut}>
                                        <FontAwesomeIcon icon={faSignOutAlt} /> Keluar
                                    </button>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Tombol auth hanya di desktop */}
                <div className="navbar-end gap-2 hidden lg:flex">
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
                        <button onClick={handleLogOut} className="btn-sm btn btn-error">
                            <FontAwesomeIcon icon={faSignOutAlt} /> Keluar
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
}
