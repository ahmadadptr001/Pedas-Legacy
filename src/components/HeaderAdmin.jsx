import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../services/db"; 
import Swal from "sweetalert2";
import { signOut } from "firebase/auth";

export default function HeaderAdmin() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Proteksi halaman admin
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            console.log(currentUser)
            if (!currentUser) {
                Swal.fire({
                    icon: "warning",
                    title: "Akses Ditolak",
                    text: "Anda harus login terlebih dahulu!",
                    confirmButtonColor: "#d33",
                    confirmButtonText: "OK",
                }).then(() => {
                    navigate("/beranda");
                });
            } else {
                setUser(currentUser);
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    // Fungsi logout
    const handleLogout = async () => {
        const result = await Swal.fire({
            title: "Konfirmasi Logout",
            text: "Apakah Anda yakin ingin keluar?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Keluar",
            cancelButtonText: "Batal",
        });

        if (result.isConfirmed) {
            await signOut(auth)
            Swal.fire({
                icon: "success",
                title: "Berhasil Logout",
                showConfirmButton: false,
                timer: 1500,
            });
            localStorage.removeItem("data-login")
            navigate("/masuk");
        }
    };

    return (
        <header className="navbar bg-base-200 px-4 shadow-md sticky top-0 z-50 flex justify-between">
            {/* Drawer toggle di mobile */}
            <div className="flex items-center gap-2">
                <label htmlFor="admin-drawer" className="btn btn-square btn-ghost lg:hidden">
                    <i className="fa fa-bars text-xl"></i>
                </label>
                <h1 className="text-lg sm:text-xl font-bold tracking-wide">Admin Dashboard</h1>
            </div>

            {/* Bagian kanan */}
            <div className="flex items-center gap-3">
                {/* Profil user */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="flex items-center gap-2 cursor-pointer">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                            <img
                                src={user?.photoURL || "https://i.pravatar.cc/80?u=default"}
                                alt="Profile"
                                referrerPolicy="no-referrer"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        </div>
                        <span className="hidden sm:inline font-medium">{user?.displayName || "Admin"}</span>
                    </label>

                    <ul tabIndex={0} className="mt-3 p-2 shadow-sm/20 menu menu-sm dropdown-content bg-base-100 rounded-box w-48 sm:w-56 max-w-[90vw]">
                        <li className="font-semibold border-b pb-2">
                            <span className="flex flex-col gap-1 items-start">
                                <p className="line-clamp-1 max-w-full truncate">{user?.displayName || "Admin"}</p>
                                <small className="text-gray-500 break-all sm:break-normal line-clamp-1 max-w-full">{user?.email}</small>
                            </span>
                        </li>
                        <li>
                            <NavLink to="/admin/profil">
                                <i className="fa fa-user mr-2"></i> Profil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/Pengaturan">
                                <i className="fa fa-cog mr-2"></i> Pengaturan
                            </NavLink>
                        </li>
                        <li>
                            <button onClick={handleLogout} className="text-error">
                                <i className="fa fa-sign-out-alt mr-2"></i> Keluar
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
