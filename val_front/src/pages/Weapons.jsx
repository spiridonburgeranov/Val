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
    return ( <div>Gavno</div>

    );
}