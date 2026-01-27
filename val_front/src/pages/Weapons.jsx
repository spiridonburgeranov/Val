import "./weapons.css"
import {createSessionStorage} from "react-router-dom";

export default function Weapons() {

    const weapons = [
        {
            name: "Classic",
            image: "/guns/Classic.webp",
            type: "Sidearm",
            price: "Free",
            fireRate: 6.75,
            reloadSpeed: 1.75,
            magazine: 12,
            damage: {
                avgClassicDist: {
                    headDamage: 78,
                    bodyDamage: 26,
                    legDamage: 22,
                },

                farClassicDist: {
                    headDamage: 66,
                    bodyDamage: 22,
                    legDamage: 18,
                },
            },
            isAltFire: true,
        },

        {
            name: "Shorty",
            image: "/guns/Shorty.webp",
            type: "Sidearm",
            price: 300,
            fireMode: "Semi",
            pelletCount: 15,
            fireRate: 3.33,
            reloadSpeed: 1.75,
            magazine: 2,
            damage: {
                lowShortyDist: {
                    headDamage: 22,
                    bodyDamage: 11,
                    legDamage: 9,
                },

                avgShortyDist: {
                    headDamage: 12,
                    bodyDamage: 6,
                    legDamage: 5,
                },

                farShortyDist: {
                    headDamage: 6,
                    bodyDamage: 3,
                    legDamage: 2,
                },
            },
            isAltFire: false,
        },

        {
            name: "Frenzy",
            image: "/guns/Frenzy.webp",
            type: "Sidearm",
            fireMode: "Auto",
            price: 450,
            fireRate: 10,
            reloadSpeed: 1.5,
            magazine: 15,
            damage: {
                avgFrenzyDist: {
                    headDamage: 78,
                    bodyDamage: 26,
                    legDamage: 22,
                },

                farFrenzyDist: {
                    headDamage: 63,
                    bodyDamage: 21,
                    legDamage: 17,
                },
            },
            isAltFire: false,
        },

        {
            name: "Ghost",
            image: "/guns/Ghost.webp",
            type: "Sidearm",
            price: 500,
            fireMode: "Semi",
            fireRate: 6.75,
            reloadSpeed: 1.5,
            magazine: 13,
            damage: {
                avgGhostDist: {
                    headDamage: 105,
                    bodyDamage: 30,
                    legDamage: 25,
                },

                farGhostDist: {
                    headDamage: 87,
                    bodyDamage: 25,
                    legDamage: 21,
                },
            },
            isAltFire: false,
        },

        {
            name: "Bandit",
            image: "/guns/Bandit.webp",
            type: "Sidearm",
            price: 600,
            fireMode: "Semi",
            fireRate: 5.1,
            reloadSpeed: 1.5,
            magazine: 8,
            damage: {
                lowBanditDist: {
                    headDamage: 152,
                    bodyDamage: 39,
                    legDamage: 33,
                },

                avgBanditDist: {
                    headDamage: 128,
                    bodyDamage: 39,
                    legDamage: 33,
                },

                farBanditDist: {
                    headDamage: 112,
                    bodyDamage: 34,
                    legDamage: 28,
                },
            },
            isAltFire: false,
        },

        {
            name: "Sheriff",
            image: "/guns/Sheriff.webp",
            type: "Sidearm",
            price: 800,
            fireMode: "Semi",
            fireRate: 4,
            reloadSpeed: 2.25,
            magazine: 6,
            damage: {
                avgSheriffDist: {
                    headDamage: 159,
                    bodyDamage: 55,
                    legDamage: 46,
                },

                farSheriffDist: {
                    headDamage: 145,
                    bodyDamage: 50,
                    legDamage: 42,
                },
            },
            isAltFire: false,
        },


    ]

    const distanceLabels = {
        avgClassicDist: "0-30m",
        farClassicDist: "30-50m",

        lowShortyDist: "0-7m",
        avgShortyDist: "7-15m",
        farShortyDist: "15-50m",

        avgFrenzyDist: "0-20m",
        farFrenzyDist: "20-50m",

        avgGhostDist: "0-30m",
        farGhostDist: "30-50m",

        lowBanditDist: "0-10m",
        avgBanditDist: "10-30m",
        farBanditDist: "30-50m",

        avgSheriffDist: "0-30m",
        farSheriffDist: "30-50m",
    }

    return (

        <div className="weapons_page">

            <div className="weapons_title">
                <h1>All Valorant Weapons</h1>
            </div>

            <div className="weapons_grid">
                {weapons.map((w) => (
                    <article key={w.name} className="weapon_card">
                        <div className="weapon_card_top">
                            <div className="weapon_name">{w.name}</div>
                            <img className="weapon_card_image" src={w.image} alt={w.name} />
                            <div className="weapon_metainfo">
                                <span>Type: {w.type}</span>
                                <span>Price: {w.price} credits</span>
                            </div>

                            <div className="about_weapon_stats">
                                <span>Fire Mode: {w.fireMode}</span>
                                <span>Fire Rate: {w.fireRate} rounds/sec</span>
                                <span>Reload Speed: {w.reloadSpeed} sec</span>
                                <span>Magazine: {w.magazine}</span>
                            </div>

                            <div className="weapon_damage">

                                <div className="weapon_damage_title">Damage</div>

                                <div className="weapon_damage_grid">

                                    <div className="weaponCard__damageRow weaponCard__damageRow--head">
                                        <span>Distance</span>
                                        <span>Head</span>
                                        <span>Body</span>
                                        <span>Leg</span>
                                    </div>

                                    {Object.entries(w.damage).map(([distKey, d]) => (
                                        <div key={distKey} className="weaponCard__damageRow">
                                            <span className="weaponCard__dist">
                                                {distanceLabels[distKey] ?? distKey}
                                            </span>
                                            <span>{d.headDamage}</span>
                                            <span>{d.bodyDamage}</span>
                                            <span>{d.legDamage}</span>
                                        </div>
                                        ))}
                                </div>
                            </div>
                        </div>

                    </article> ))
                }
            </div>
        </div>
    );
}