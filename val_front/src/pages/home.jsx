import "./home.css"
import {Link} from "react-router-dom";

const trendingMock = [
    { id: 1, name: "Prime Vandal", meta: "Owned by 12k" },
    { id: 2, name: "Reaver Operator", meta: "5,460 VP" },
    { id: 3, name: "Oni Phantom", meta: "3,175 VP" },
    { id: 4, name: "Elderflame Vandal", meta: "★ 4.9" },
];

const categoriesMock = [
    { id: "weapons", title: "Weapons" },
    { id: "bundles", title: "Bundles" },
    { id: "buddies", title: "Buddies" },
    { id: "cards", title: "Cards" },
    { id: "sprays", title: "Sprays" },
    { id: "titles", title: "Titles" },
];

const featuredMock = [
    { id: 1, title: "Solarstride", cta: "View Collection" },
    { id: 2, title: "Run It Back: Lunar 26", cta: "View Collection" },
    { id: 3, title: "Mystbloom 2", cta: "View Collection" },
];

export default function Home() {

    return (
        <div className="Home">
            <section className="section_hero">
                <div className="container_hero_inner">
                    <div className="hero_content">
                        <h1 className="hero_title">
                            your collection in valorant
                        </h1>

                        <p className="hero_subtitle">
                            explore skins, track your collection, show others
                        </p>

                        <div className="hero_actions">
                            <Link className="btn btn-primary" to="/catalog">
                                explore skins
                            </Link>

                            <Link className="btn btn--ghost" to="/login">
                                sign in
                            </Link>
                        </div>
                    </div>

                    <div className="hero_visual" aria-hidden="true">
                        <img className="vct_knives_image" src="../vctknives.jpg" />
                    </div>
                </div>
            </section>

            <section className="section quick">
                <div className="container">
                    <div className="quick__bar">
                        <div className="quick__search">
                            <span className="quick__icon" aria-hidden="true">⌕</span>
                            <input
                                className="quick__input"
                                type="text"
                                placeholder="Search skins, weapons..."
                            />
                        </div>

                        <div className="quick__filters">
                            <button className="pill" type="button">Vandal</button>
                            <button className="pill" type="button">Operator</button>
                            <button className="pill" type="button">Premium</button>
                        </div>

                        <button className="btn btn--primary" type="button">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            <section className="section trending">
                <div className="container">
                    <div className="section__head">
                        <h2 className="section__title">Trending Today</h2>
                        <Link className="link" to="/skins">View all</Link>
                    </div>

                    <div className="grid grid--4">
                        {trendingMock.map((item) => (
                            <article className="card" key={item.id}>
                                <div className="card__media" aria-hidden="true" />
                                <div className="card__body">
                                    <h3 className="card__title">{item.name}</h3>
                                    <p className="card__meta">{item.meta}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section categories">
                <div className="container">
                    <h2 className="section__title">Browse Categories</h2>

                    <div className="grid grid--6">
                        {categoriesMock.map((cat) => (
                            <Link className="tile" key={cat.id} to={`/${cat.id}`}>
                                <div className="tile__icon" aria-hidden="true" />
                                <div className="tile__title">{cat.title}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section featured">
                <div className="container">
                    <div className="section__head">
                        <h2 className="section__title">Featured Collections</h2>
                        <Link className="link" to="/collections">Browse</Link>
                    </div>

                    <div className="grid grid--3">
                        {featuredMock.map((col) => (
                            <article className="card card--wide" key={col.id}>
                                <div className="card__media card__media--wide" aria-hidden="true" />
                                <div className="card__body card__body--row">
                                    <h3 className="card__title">{col.title}</h3>
                                    <button className="btn btn--ghost" type="button">
                                        {col.cta}
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section how">
                <div className="container">
                    <h2 className="section__title">Start Tracking Your Collection</h2>
                    <p className="section__subtitle">
                        3 easy steps to start:
                    </p>

                    <div className="grid grid--3">
                        <article className="step">
                            <div className="step__num">1</div>
                            <h3 className="step__title">Explore</h3>
                            <p className="step__text">Листай базу, фильтруй по оружию и редкости.</p>
                        </article>

                        <article className="step">
                            <div className="step__num">2</div>
                            <h3 className="step__title">Track</h3>
                            <p className="step__text">Make your favorites list</p>
                        </article>

                        <article className="step">
                            <div className="step__num">3</div>
                            <h3 className="step__title">Compare with friends</h3>
                            <p className="step__text">Show your own inventory!</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section cta">
                <div className="container cta__box">
                    <h2 className="cta__title">Create your account</h2>
                    <p className="cta__text">Start tracking your collection today!</p>
                    <Link className="btn btn--primary btn--lg" to="/register">
                        Create Account
                    </Link>
                </div>
            </section>
        </div>
    );
}