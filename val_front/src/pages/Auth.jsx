import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Auth.css";

export default function AuthPage() {
    return (

        <div className="authPage">
            <div className="auth">
                <div className="auth__title__page">Sign in</div>

                <h3 className="auth__title">Track your skin collection, make your lists and customize your board!</h3>

                <input placeholder="Email Address" />
                <input type="password" placeholder="Password" />

                <button>Sign In</button>
            </div>

            <div className="new__acc">
                Don't have Account yet?
                <button className="new__acc__btn">Create</button>
            </div>
        </div>
    );
}