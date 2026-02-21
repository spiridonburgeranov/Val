import { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import "./Auth.css";

export default function AuthPage() {

    const [ mode, setMode ] = useState("login");

    const [ form, setForm ] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        nickname: "",
    });

    const [ error, setError ] = useState("");
    const [ success, setSuccess ] = useState("");

    const isRegister = mode === "register";

    const emailLooksValid = useMemo(() => {
        return form.email.includes("@") && form.email.includes(".");
    }, [form.email]);

    function handleChange(e) {
        const { name, value } = e.target;

        setError("");
        setSuccess("");

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function switchMode(nextMode) {
        setMode(nextMode);

        setError("");
        setSuccess("");

        setForm((prev) => ({
            ...prev,
            password: "",
            confirmPassword: "",
            nickname: "",
        }));
    }

    function validate() {
        if (!form.email.trim()) return "Enter E-Mail";
        if (!emailLooksValid) return "Wrong password";
        if (!form.password) return "Enter Password";
        if (form.password.length < 6) return "Password should be at least 6 characters";

        if (isRegister) {
            if (!form.nickname.trim()) return "Enter Nickname";
            if (!form.confirmPassword) return "Confirm Password";
            if (form.password !== form.confirmPassword) return "Passwords do not match";
        }

        return "";
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const validationError = validate();
        if (validationError) {
            setError(validationError);
            return;
        }

        setError("");
        setSuccess("");

        try {
            if (isRegister) {
                // --- ЗАГЛУШКА РЕГИСТРАЦИИ ---
                // Представим, что сервер создал аккаунт
                await fakeRequest(600);

                setSuccess("Account successfully registered!");
                // после регистрации логично перекинуть в логин
                switchMode("login");
            } else {
                // --- ЗАГЛУШКА ЛОГИНА ---
                await fakeRequest(600);

                // имитация "токена" — потом заменишь на реальный
                localStorage.setItem("token", "fake-token");

                setSuccess("You are logged in");
            }
        } catch (err) {
            setError("Something went wrong! Try again later");
        }
    }

    return (
        <div className="authPage">
            <header className="authPage-header">
                <div className="authPage__logo__container">
                    <h1>VALSKINS</h1>
                </div>

                <div className="authPage__lang">
                    <button className="authPage__lang__btn" type="button">
                        LN
                    </button>

                    <ul className="authPage__lang__list">
                        <li>EN</li>
                        <li>RU</li>
                        <li>DE</li>
                    </ul>
                </div>
            </header>

            <div className="auth">
                <div className="auth__title__page">
                    {isRegister ? "Create account" : "Sign in"}
                </div>

                <h3 className="auth__title">
                    {isRegister
                        ? "Create your account to start tracking your collection!"
                        : "Track your skin collection, create wishlists, and customize your showcase!"}
                </h3>

                {/* ВАЖНО: делаем form, чтобы Enter работал и submit был нормальным */}
                <form onSubmit={handleSubmit}>
                    {/* Ник — только при регистрации (не ломает CSS, потому что класс auth тот же) */}
                    {isRegister && (
                        <input
                            name="nickname"
                            value={form.nickname}
                            onChange={handleChange}
                            placeholder="Nickname"
                        />
                    )}

                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                    />

                    <input
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                    />

                    {/* Повтор пароля — только при регистрации */}
                    {isRegister && (
                        <input
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            type="password"
                            placeholder="Confirm Password"
                        />
                    )}

                    {/* Сообщения (классы можешь в CSS добавить, но даже без них не сломает верстку) */}
                    {error && <div className="auth__error">{error}</div>}
                    {success && <div className="auth__success">{success}</div>}

                    <button className="signin__btn" type="submit">
                        {isRegister ? "Create" : "Sign In"}
                    </button>
                </form>

                <div className="new__acc">
                    {isRegister ? "Already have an account?" : "Don't have Account yet?"}{" "}
                    <button
                        className="new__acc__btn"
                        type="button"
                        onClick={() => switchMode(isRegister ? "login" : "register")}
                    >
                        {isRegister ? "Sign In" : "Create"}
                    </button>
                </div>
            </div>
        </div>
    );
}