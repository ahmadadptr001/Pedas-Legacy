import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function SidebarAdmin() {
  const [produkOpen, setProdukOpen] = useState(false);
  const [kontenOpen, setKontenOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 ${
      isActive
        ? "bg-primary text-white rounded-lg"
        : "hover:bg-base-200 rounded-lg"
    }`;

  // Hilangkan bg-primary pada parent dropdown saat open
  const parentDropdownClass = (isOpen) =>
    `flex items-center gap-2 cursor-pointer select-none hover:bg-base-200 rounded-lg ${
      isOpen ? "text-primary font-semibold" : ""
    }`;

  return (
    <div className="drawer-side shadow-sm/20">
      <label htmlFor="admin-drawer" className="drawer-overlay"></label>
      <aside className="bg-base-200 w-52 min-h-full p-4 flex flex-col">
        <NavLink to="/beranda">
          <h2 className="text-2xl font-bold mb-6 text-primary">
            Pedas<span className="text-secondary">Legacy</span>
          </h2>
        </NavLink>
        <ul className="menu p-0 flex-1 gap-1 w-full">
          <li>
            <NavLink to="/admin/dashboard" className={linkClass}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/users" className={linkClass}>
              Kelola Pengguna
            </NavLink>
          </li>
          {/* Produk Dropdown */}
          <li>
            <div
              className={parentDropdownClass(produkOpen)}
              onClick={() => setProdukOpen((v) => !v)}
            >
              Produk
              <i
                className={`fa fa-chevron-${
                  produkOpen ? "down" : "right"
                } ml-auto`}
              ></i>
            </div>
            {produkOpen && (
              <ul className="ml-6 mt-1 flex flex-col gap-1">
                <li>
                  <NavLink to="/admin/pesanan" className={linkClass}>
                    <i className="fa fa-shopping-cart"></i> Pesanan
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/menu" className={linkClass}>
                    <i className="fa fa-list"></i> Menu Umum
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/menu-populer" className={linkClass}>
                    <i className="fa fa-star"></i> Menu Populer
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/menu-diskon" className={linkClass}>
                    <i className="fa fa-tags"></i> Menu Diskon
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          {/* Konten Dropdown */}
          <li>
            <div
              className={parentDropdownClass(kontenOpen)}
              onClick={() => setKontenOpen((v) => !v)}
            >
              Konten
              <i
                className={`fa fa-chevron-${
                  kontenOpen ? "down" : "right"
                } ml-auto`}
              ></i>
            </div>
            {kontenOpen && (
              <ul className="ml-6 mt-1 flex flex-col gap-1">
                <li>
                  <NavLink to="/admin/artikel" className={linkClass}>
                    <i className="fa fa-newspaper"></i> Artikel/Berita
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/banner" className={linkClass}>
                    <i className="fa fa-image"></i> Banner/Promosi
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          {/* Notifikasi Dropdown */}
          <li>
            <div
              className={parentDropdownClass(notifOpen)}
              onClick={() => setNotifOpen((v) => !v)}
            >
              Notifikasi
              <i
                className={`fa fa-chevron-${
                  notifOpen ? "down" : "right"
                } ml-auto`}
              ></i>
            </div>
            {notifOpen && (
              <ul className="ml-6 mt-1 flex flex-col gap-1">
                <li>
                  <NavLink to="/admin/notifikasi-masuk" className={linkClass}>
                    <i className="fa fa-inbox"></i> Notifikasi Masuk
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/pengaturan-notifikasi"
                    className={linkClass}
                  >
                    <i className="fa fa-cog"></i> Pengaturan Notifikasi
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </aside>
    </div>
  );
}
