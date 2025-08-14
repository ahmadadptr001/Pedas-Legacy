// src/layouts/AdminLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import SidebarAdmin from "../components/SidebarAdmin";
import HeaderAdmin from "../components/HeaderAdmin";

export default function AdminLayout() {
    return (
        <div className="drawer lg:drawer-open">
            {/* Drawer Toggle (Mobile) */}
            <input id="admin-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* HEADER */}
                <HeaderAdmin />

                <main className="p-4">
                    <Outlet />
                </main>
            </div>

            {/* SIDEBAR */}
            <SidebarAdmin />
        </div>
    );
}
