import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
    return (
        <div className="flex flex-col gap-3 h-screen">
        <Header />
        <Outlet />
        </div>
    )
}