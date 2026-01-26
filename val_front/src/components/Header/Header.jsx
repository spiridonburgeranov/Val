import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="logo">VALSKINS</div>

                <nav className="nav">
                    <ul className="nav__list">
                        <li><NavLink to="/" end className="nav__link">Home</NavLink></li>
                        <li><NavLink to="/catalog" className="nav__link">Catalog</NavLink></li>
                        <li><NavLink to="/profile" className="nav__link">Profile</NavLink></li>
                        <li><NavLink to="/stats" className="nav__link">Stats</NavLink></li>
                        <li><NavLink to="/weapons" className="nav__link">Weapons</NavLink></li>
                    </ul>
                </nav>

                <div className="auth">
                    <NavLink to="/login" className="auth__login">
                        Sign In
                    </NavLink>
                </div>

            </div>
        </header>
    );
}