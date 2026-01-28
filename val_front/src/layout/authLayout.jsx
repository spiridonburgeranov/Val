import { Outlet } from 'react-router-dom'
import "./authLayout.css"

export default function AuthLayout() {
    return (
        <div className="authLayout">
            <Outlet />
        </div>
    );
}