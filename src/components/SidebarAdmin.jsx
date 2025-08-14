import { NavLink } from "react-router-dom";

export default function SidebarAdmin() {
    const linkClass = ({ isActive }) => `flex items-center gap-2 ${isActive ? "bg-primary text-white rounded-lg" : "hover:bg-base-200 rounded-lg"}`;

    return (
        <div className="drawer-side shadow-sm/20">
            <label htmlFor="admin-drawer" className="drawer-overlay"></label>
            <aside className="bg-base-200 w-48 min-h-full p-4 flex flex-col">
                <h2 className="text-2xl font-bold mb-6">Pedas Legacy</h2>
                <ul className="menu p-0 flex-1 gap-1">
                    <li>
                        <NavLink to="/admin/dashboard" className={linkClass}>
                            <i className="fa fa-tachometer-alt"></i> Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/users" className={linkClass}>
                            <i className="fa fa-users"></i> Kelola Pengguna
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/menu" className={linkClass}>
                            <i className="fa fa-utensils"></i> Kelola Menu
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </div>
    );
}
