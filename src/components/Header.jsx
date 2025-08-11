import { NavLink } from "react-router-dom";

export default function Header({ isAdmin, isLoggedIn }) {
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
                                <NavLink to="/beranda">Beranda</NavLink>
                            </li>
                            <li>
                                <NavLink to="/produk">Produk</NavLink>
                            </li>
                            <li>
                                <NavLink to="/tentang">Tentang</NavLink>
                            </li>
                            <li>
                                <NavLink to="/kontak">Kontak</NavLink>
                            </li>
                            <li>
                                <NavLink to="/keranjang">Keranjang</NavLink>
                            </li>

                            {isAdmin && (
                                <>
                                    <li className="border-t mt-2 pt-2 font-bold">Admin</li>
                                    <li>
                                        <NavLink to="/admin">Dashboard</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/admin/produk">Kelola Produk</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/admin/promo">Kelola Promo</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/admin/outlet">Kelola Outlet</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/admin/laporan">Laporan</NavLink>
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
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <NavLink to="/beranda" className={({ isActive }) => (isActive ? "btn-sm btn btn-secondary" : "btn-sm btn btn-soft btn-secondary")}>
                            Beranda
                        </NavLink>
                        <NavLink to="/produk" className={({ isActive }) => (isActive ? "btn-sm btn btn-secondary" : "btn-sm btn btn-soft btn-secondary")}>
                            Produk
                        </NavLink>
                        <NavLink to="/keranjang" className={({ isActive }) => (isActive ? "btn-sm btn btn-secondary" : "btn-sm btn btn-soft btn-secondary")}>
                            Keranjang
                        </NavLink>

                        {isAdmin && (
                            <>
                                <NavLink to="/admin" className={({ isActive }) => (isActive ? "btn-sm btn btn-accent" : "btn-sm btn btn-soft btn-accent")}>
                                    Admin
                                </NavLink>
                            </>
                        )}
                    </ul>
                </div>

                {/* Right side */}
                <div className="navbar-end gap-2">
                    {!isLoggedIn ? (
                        <>
                            <NavLink to="/daftar" className="btn-sm btn btn-ghost">
                                Daftar
                            </NavLink>
                            <NavLink to="/masuk" className="btn-sm btn btn-primary">
                                Masuk
                            </NavLink>
                        </>
                    ) : (
                        <NavLink to="/logout" className="btn-sm btn btn-error">
                            Keluar
                        </NavLink>
                    )}
                </div>
            </nav>
        </header>
    );
}
