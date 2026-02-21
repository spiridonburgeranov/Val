export const weaponsInfo = [
    {
        id: 1,
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
        id: 2,
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
            lowDist: {
                headDamage: 22,
                bodyDamage: 11,
                legDamage: 9,
            },

            avgDist: {
                headDamage: 12,
                bodyDamage: 6,
                legDamage: 5,
            },

            farDist: {
                headDamage: 6,
                bodyDamage: 3,
                legDamage: 2,
            },
        },
        isAltFire: false,
    },

    {
        id: 3,
        name: "Ghost",
        image: "/guns/Ghost.webp",
        type: "Sidearm",
        price: 500,
        fireMode: "Semi",
        fireRate: 6.75,
        reloadSpeed: 1.5,
        magazine: 13,
        damage: {
            avgDist: {
                headDamage: 105,
                bodyDamage: 30,
                legDamage: 25,
            },

            farDist: {
                headDamage: 87,
                bodyDamage: 25,
                legDamage: 21,
            },
        },
        isAltFire: false,
    },

    {
        id: 4,
        name: "Bandit",
        image: "/guns/Bandit.webp",
        type: "Sidearm",
        price: 600,
        fireMode: "Semi",
        fireRate: 5.1,
        reloadSpeed: 1.5,
        magazine: 8,
        damage: {
            lowDist: {
                headDamage: 152,
                bodyDamage: 39,
                legDamage: 33,
            },

            avgDist: {
                headDamage: 128,
                bodyDamage: 39,
                legDamage: 33,
            },

            farDist: {
                headDamage: 112,
                bodyDamage: 34,
                legDamage: 28,
            },
        },
        isAltFire: false,
    },

    {
        id: 5,
        name: "Frenzy",
        image: "/guns/Frenzy.webp",
        type: "Sidearm",
        fireMode: "Auto",
        price: 450,
        fireRate: 10,
        reloadSpeed: 1.5,
        magazine: 15,
        damage: {
            avgDist: {
                headDamage: 78,
                bodyDamage: 26,
                legDamage: 22,
            },

            farDist: {
                headDamage: 63,
                bodyDamage: 21,
                legDamage: 17,
            },
        },
        isAltFire: false,
    },

    {
        id: 6,
        name: "Sheriff",
        image: "/guns/Sheriff.webp",
        type: "Sidearm",
        price: 800,
        fireMode: "Semi",
        fireRate: 4,
        reloadSpeed: 2.25,
        magazine: 6,
        damage: {
            avgDist: {
                headDamage: 159,
                bodyDamage: 55,
                legDamage: 46,
            },

            farDist: {
                headDamage: 145,
                bodyDamage: 50,
                legDamage: 42,
            },
        },
        isAltFire: false,
    },

    {
        id: 7,
        name: "Stinger",
        image: "/guns/Stinger.webp",
        type: "SMG",
        price: 1100,
        fireMode: "Auto",
        fireRate: 16,
        reloadSpeed: 2.25,
        magazine: 20,
        damage: {

        },
        isAltFire: false,
    }
]