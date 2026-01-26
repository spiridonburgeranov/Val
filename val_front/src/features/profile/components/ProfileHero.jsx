import "./ProfileHero.css"

export default function ProfileHero() {
    return (
        <div className="tab__user__info">

            <img
                src="/catavatar.png"
                alt="User Picture"
                className="avatar__user"
            />

            <img
                src="/Ascendant_2_Rank.webp"
                alt="User Rank"
                className="user__rank"
            />

            <div className="user__name">
                <b>katzenminze</b>
            </div>

            <div className="user_statistics_inventory">
                <div className="user_statistics_inventory_item">
                    <div className="user_statistics_inventory_item_count">
                        110
                    </div>

                    <div className="user_statistics_inventory_item_category">
                        skins
                    </div>
                </div>
            </div>
        </div>
    );
}