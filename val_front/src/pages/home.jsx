import "./home.css"

export default function Home() {

    return (
        <div className="articles__column">
            <div className="article__card">
                <div className="article__head">
                    <img className="article__image" src="/articles/Valorant_ExclusiveMeleeChina-450x253.jpg" alt="leak__img" />
                </div>
                <div className="article__body">
                    <div className="article__title">Next Bundle will be chinese fire horse!</div>
                    <div className="article__description">The new collection will be dedicated to the Chinese New Year and will be associated with the fire horse, as our sources tell us..</div>
                    <button className="read__more__btn">Read more...</button>
                </div>
            </div>
        </div>

    );
}