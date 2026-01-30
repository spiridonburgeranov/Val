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
    const [success, setSuccess ] = useState("");

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
        if (!form.email.trim()) return "Введите email.";
        if (!emailLooksValid) return "Похоже, email введён неверно.";
        if (!form.password) return "Введите пароль.";
        if (form.password.length < 6) return "Пароль должен быть минимум 6 символов.";

        if (isRegister) {
            if (!form.nickname.trim()) return "Введите никнейм.";
            if (!form.confirmPassword) return "Повторите пароль.";
            if (form.password !== form.confirmPassword) return "Пароли не совпадают.";
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

                setSuccess("Аккаунт создан! Теперь войдите.");
                // после регистрации логично перекинуть в логин
                switchMode("login");
            } else {
                // --- ЗАГЛУШКА ЛОГИНА ---
                await fakeRequest(600);

                // имитация "токена" — потом заменишь на реальный
                localStorage.setItem("token", "fake-token");

                setSuccess("Вы вошли! (пока это имитация)");
            }
        } catch (err) {
            setError("Что-то пошло не так. Попробуйте ещё раз.");
        }
    }

    return (
        <div className="authPage">
            <header className="authPage-header">
                <div className="authPage__logo__container">
                    <h1>VALSKINS</h1>
                </div>

                <button className="authPage__lang__btn" type="button">
                    LN
                </button>
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