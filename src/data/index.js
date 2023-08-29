export const fakeUser = {
    id: 0,
    cart: 2,
    name: 'Kiet HuynhHuynh'
}

export let fakeNav = [
    {
        label: 'HOME',
        key: '/',
    },
    {
        label: 'TẤT CẢ',
        key: '/products',
    },
    {
        label: 'HOT',
        key: '/products/0',
    },
    {
        label: 'Option 1',
        key: 'option-1',
        children: [
            {
                label: 'Toàn bộ',
                key: '/products/1',
            },
            {
                label: 'Gấu đen',
                key: '/products/2',
                children: [
                    {
                        label: 'Gấu đen tím',
                        key: '/products/3',
                    },
                ],
            },
        ]
    },
    {
        label: 'Option 2',
        key: '/collections/option-2',
    },
    {
        label: 'Option 3',
        key: '/collections/option-3',
    },
    {
        label: 'Option 4',
        key: '/collections/option-4',
    },
    {
        label: 'Option 5',
        key: '/collections/option-5',
    },
    {
        label: 'Option 6',
        key: '/collections/option-6',
    },
    {
        label: 'Option 7',
        key: '/collections/option-7',
    },
    {
        label: 'Option 8',
        key: '/collections/option-8',
    },
    {
        label: 'Khác',
        key: '/collections/khac',
    },
]

export const fakeHero = "https://img.freepik.com/free-vector/bright-geometrical-black-friday-sale-banner-design-vector_1055-9127.jpg?w=2000\nhttps://img.freepik.com/premium-vector/big-sale-with-shopping-cart-design_181623-283.jpg?w=1380\nhttps://img.freepik.com/premium-vector/super-sale-banner-with-podium-template-design-emoji-icon_181623-569.jpg?w=1380";

export const fakeProduct = {
    id: 0,
    picSrc: [
        {
            id: 0,
            src: 'https://tinyyume.com/cdn/shop/files/AA082copiepourmini2_740x.jpg?v=1690406278',
        },
        {
            id: 1,
            src: 'https://tinyyume.com/cdn/shop/files/F1022_360x.jpg?v=1690404618',
        },
        {
            id: 2,
            src: 'https://tinyyume.com/cdn/shop/files/SC0033_360x.jpg?v=1690403748',
        },
        {
            id: 3,
            src: 'https://tinyyume.com/cdn/shop/files/miniature850copie_52e266d2-a52f-4b8f-b1f7-f757980c7adc_360x.jpg?v=1686579761',
        },
        {
            id: 4,
            src: 'https://tinyyume.com/cdn/shop/files/AA084copie2_360x.jpg?v=1690404912',
        }
    ],
    name: 'Cottagecore stamp stickers',
    price: 260000,
    inventory: 6,
    code: '#AA082',
    onSale: 0,
    trace: 'Phụ kiện\nTrang sức',
    type: 'phu-kien\ntrang-suc',
    description: '1 matte waterproof vinyl sticker\nEasily removable without glue residue\nSuitable for outdoor use, planners, cell phone, laptop and more! No dishwasher or microwave proof\nMeasures 6,5 x 7 cm\nColors may vary because of your monitor'
}

export const fakeListProduct = {
    data: [
        fakeProduct, fakeProduct, fakeProduct, fakeProduct, fakeProduct, fakeProduct, fakeProduct, fakeProduct
    ],
    trace: 'Phụ kiện\nTrang sức',
    type: 'phu-kien\ntrang-suc',
}

export const fakeBanner = ["https://tinyyume.com/cdn/shop/files/Snapinsta.app_338458269_879996006396274_990222832187670111_n_1080_360x.jpg?v=1680243210",
    "https://tinyyume.com/cdn/shop/files/Snapinsta.app_334156055_671529237994962_7039349499115086332_n_1080_360x.jpg?v=1680243210",
    "https://tinyyume.com/cdn/shop/files/Snapinsta.app_330216219_528114826098250_217353088272934477_n_1080_360x.jpg?v=1680243420",
    "https://tinyyume.com/cdn/shop/files/Snapinsta.app_328177085_696358295520178_4844218665367907946_n_1080_360x.jpg?v=1680243210"
]

export const fakeTrace = ["Home", "Collections", "Cottagecore stamp stickers #AA082"];

export const fakeApiHome = [{
    name: "sản phẩm mới",
    data: fakeListProduct.data,
}, {
    name: "sản phẩm bán chạy",
    data: fakeListProduct.data,
}, {
    name: "sản phẩm lỗi",
    data: fakeListProduct.data,
}]