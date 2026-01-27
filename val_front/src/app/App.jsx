import { Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from '../layout/RootLayout.jsx';

import Home from '../pages/home.jsx';
import Catalog from '../pages/Catalog.jsx';
import Weapons from '../pages/Weapons.jsx';
import Stats from '../pages/Stats.jsx';
import Profile from '../pages/Profile.jsx';
import Auth from '../pages/Auth.jsx';


export default function App() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/weapons" element={<Weapons />} />

                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/login" element={<Auth />} />
            </Route>
        </Routes>
    );
}