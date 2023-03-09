type MenuItem = {
    text: string,
    link: string,
}

export type MenuItemType = MenuItem & {submenu?: MenuItem[]}

const shirts: MenuItem[] = [
    {text: "Hammasini ko'rsatish", link: '/'},
    {text: "Futbolkalar", link: '/'},
    {text: "Maykalar", link: '/'},
    {text: "Hammasini ko'rsatishKatakli ko'ylaklar", link: '/'},
]

const coats: MenuItem[] = [
    {text: "Hammasini ko'rsatish", link: '/'},
    {text: "Parkalar", link: '/'},
    {text: "Sun'iy moʻyna", link: '/'},
    {text: "Nimchalar va jiletkalar", link: '/'},
    {text: "Jun paltolar", link: '/'},
]

const sweaters: MenuItem[] = [
    {text: "Hammasini ko'rsatish", link: '/'},
    {text: "Kardiganlar", link: '/'},
    {text: "Puloverlar", link: '/'},
]

const skirts: MenuItem[] = [
    {text: "Hammasini ko'rsatish", link: '/'},
    {text: "A-shaklidagi yubkalar", link: '/'},
    {text: "Asimmetrik yubkalar", link: '/'},
    {text: "Bal yubkalari", link: '/'},
    {text: "Qalam yubkalar", link: '/'},
    {text: "Qat taxli yubkalar", link: '/'},
]

const dresses: MenuItem[] = [
    {text: "Hammasini ko'rsatish", link: '/'},
    {text: "Yarim yengli ko'ylaklar", link: '/'},
    {text: "Uzun yengli ko'ylaklar", link: '/'},
    {text: "Kalta yengli ko'ylaklar", link: '/'},
    {text: "Yengsiz ko'ylaklar", link: '/'},
    {text: "3/4 yengli ko'ylaklar", link: '/'},
]

export const menuData: MenuItemType[] = [
    {
        text: "Mayka va futbolkalar",
        link: '/',
        submenu: shirts
    },
    {
        text: 'Kurtka va paltolar',
        link: '/',
        submenu: coats
    },
    {
        text: 'Sviterlar',
        link: '/',
        submenu: sweaters
    },
    {
        text: 'Xudi va tolstovkalar',
        link: '/'
    },
    {
        text: 'Bodilar',
        link: '/'
    },
    {
        text: 'Yubkalar',
        link: '/',
        submenu: skirts
    },
    {
        text: 'Shortilar',
        link: '/'
    },
    {
        text: 'Ko\'ylaklar',
        link: '/',
        submenu: dresses
    },
    {
        text: 'Jinsi shimlar',
        link: '/'
    },
    {
        text: 'Kombinezonlar',
        link: '/'
    },
    {
        text: 'Kostyumlar',
        link: '/'
    },
    {
        text: 'JBluzka va ko\'ylaklar',
        link: '/'
    },
    {
        text: 'Suzish kiyimlari',
        link: '/'
    },
]

export type FilterType = {
    text: string,
    value: string[],
}

export const filterData : FilterType[] = [
    {text: 'Brand', value: ['ANAKI', 'Anti', 'BINGO', 'CHANEL', 'CHRISTIAN DIOR', 'DELI', 'FARFI', 'MAC']},
    {text: 'Yuboruvchilar', value: ['Uzbekistan']},
    {text: 'Yangi kelgan mahsulotlar', value: ['Oxirgi 30 kun', 'Oxirgi 60 kun']},
    {text: 'Muddatli to\'lov ', value: ['4x installment']},
    {text: 'Yetkazib berish', value: ['Olip ketish uchun mavjud']}
]