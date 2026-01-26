import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import "./RootLayout.css";

export default function RootLayout() {
    return (
        <div className="app">
            <Header />
            <main className="page">
                <div className="page__inner">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}