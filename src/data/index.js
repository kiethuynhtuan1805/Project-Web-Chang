export let fakeNav = [
    {
        label: 'TRANG CHỦ',
        key: '/home',
    },
    {
        label: 'TẤT CẢ',
        key: '/home/products',
    },
    {
        label: 'HOT',
        key: '/home/products/0',
    },
    {
        label: 'Option 1',
        key: 'option-1',
        children: [
            {
                label: 'Toàn bộ',
                key: '/home/products/1',
            },
            {
                label: 'Gấu đen',
                key: '/home/products/2',
                children: [
                    {
                        label: 'Gấu đen tím',
                        key: '/home/products/3',
                    },
                ],
            },
        ]
    },
    {
        label: 'Option 2',
        key: '/home/collections/option-2',
    },
    {
        label: 'Option 3',
        key: '/home/collections/option-3',
    },
    {
        label: 'Option 4',
        key: '/home/collections/option-4',
    },
    {
        label: 'Option 5',
        key: '/home/collections/option-5',
    },
    {
        label: 'Option 6',
        key: '/home/collections/option-6',
    },
    {
        label: 'Option 7',
        key: '/home/collections/option-7',
    },
    {
        label: 'Option 8',
        key: '/home/collections/option-8',
    },
    {
        label: 'Khác',
        key: '/home/collections/khac',
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
        },
        {
            id: 5,
            src: 'https://tinyyume.com/cdn/shop/files/AA084copie2_360x.jpg?v=1690404912',
        },
        {
            id: 6,
            src: 'https://tinyyume.com/cdn/shop/files/AA084copie2_360x.jpg?v=1690404912',
        }
        ,
        {
            id: 7,
            src: 'https://tinyyume.com/cdn/shop/files/AA084copie2_360x.jpg?v=1690404912',
        }
    ],
    name: 'Postcard idol EXO 4-cut EXOcial Club Cream Soda set7 - Mix',
    price: 260000,
    inventory: 6,
    color: [
        {
            name: 'Đen',
            type: 'black',
            inventory: 0,
        },
        {
            name: 'Đỏ',
            type: 'red',
            inventory: 1,
        },
        {
            name: 'Đỏ',
            type: 'red',
            inventory: 1,
        },
        {
            name: 'Đỏ',
            type: 'red',
            inventory: 1,
        },
        {
            name: 'Đỏ',
            type: 'red',
            inventory: 1,
        },
        {
            name: 'Đỏ',
            type: 'red',
            inventory: 1,
        },
        {
            name: 'Đỏ',
            type: 'red',
            inventory: 1,
        }
    ],
    classify: ['12x12', '24x24', '32x32'],
    code: '#AA082',
    onSale: 0,
    trace: 'Phụ kiện\nTrang sức',
    type: 'phu-kien\ntrang-suc',
    description: '1 matte waterproof vinyl sticker\nEasily removable without glue residue\nSuitable for outdoor use, planners, cell phone, laptop and more! No dishwasher or microwave proof\nMeasures 6,5 x 7 cm\nColors may vary because of your monitor',
    favorite: 0,
}

export const order = [
    {
        orderId: 'AB325-CD085-DAF33',
        date: '16:46:00 29/08/2023',
        orderCount: 3,
        orderPrice: 300000,
        status: 'Đang giao',
    },
    {
        orderId: 'AB325-CD085-DAF34',
        date: '16:47:00 30/08/2023',
        orderCount: 4,
        orderPrice: 400000,
        status: 'Đã giao',
    },
    {
        orderId: 'AB325-CD085-DAF35',
        date: '16:48:00 31/08/2023',
        orderCount: 2,
        orderPrice: 200000,
        status: 'Đang xử lý',
    },
    {
        orderId: 'AB325-CD085-DAF36',
        date: '16:50:00 27/08/2023',
        orderCount: 1,
        orderPrice: 100000,
        status: 'Đã hủy',
    },
]

export const fakeUser = {
    id: 0,
    name: 'Kiet HuynhHuynh',
    cart: {
        data: [
            {
                product: fakeProduct,
                quantity: 2,
            },
            {
                product: fakeProduct,
                quantity: 3,
            },
            {
                product: fakeProduct,
                quantity: 4,
            },
            {
                product: fakeProduct,
                quantity: 3,
            },
            {
                product: fakeProduct,
                quantity: 2,
            },
            {
                product: fakeProduct,
                quantity: 2,
            },
            {
                product: fakeProduct,
                quantity: 2,
            },
            {
                product: fakeProduct,
                quantity: 2,
            }
        ],
        totalPrice: 1000000,
    },
    orderHistory: [
        ...order
    ]
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

export const fakeWelcomeProduct1 = {
    type: 'HOT',
    description: 'Một số sản phẩm bán chạy của chúng tôi!',
    listProduct: [
        {
            url: 'https://www.insidethetravellab.com/wp-content/uploads/2023/11/Snow-globes-in-a-souvenir-shop-in-Paris-1110x1426.jpg',
            name: 'Souvenir',
            description: 'Cute product!'
        },
        {
            url: 'https://www.insidethetravellab.com/wp-content/uploads/2023/11/Snow-globes-in-a-souvenir-shop-in-Paris-1110x1426.jpg',
            name: 'Souvenir',
            description: 'Cute product!'
        },
        {
            url: 'https://www.insidethetravellab.com/wp-content/uploads/2023/11/Snow-globes-in-a-souvenir-shop-in-Paris-1110x1426.jpg',
            name: 'Souvenir',
            description: 'Cute product!'
        },
        {
            url: 'https://www.insidethetravellab.com/wp-content/uploads/2023/11/Snow-globes-in-a-souvenir-shop-in-Paris-1110x1426.jpg',
            name: 'Souvenir',
            description: 'Cute product!'
        },
        {
            url: 'https://www.insidethetravellab.com/wp-content/uploads/2023/11/Snow-globes-in-a-souvenir-shop-in-Paris-1110x1426.jpg',
            name: 'Souvenir',
            description: 'Cute product!'
        }
    ]
}

export const fakeWelcomeProduct2 = {
    type: 'SALE',
    description: 'Một số sản phẩm đang khuyến mãi!',
    listProduct: [
        {
            url: 'https://i0.wp.com/www.myticklefeet.com/wp-content/uploads/2019/04/20171226_164021-1.jpg?resize=640%2C1024&ssl=1',
            name: 'Cup',
            description: 'Cup of juice!'
        },
        {
            url: 'https://i0.wp.com/www.myticklefeet.com/wp-content/uploads/2019/04/20171226_164021-1.jpg?resize=640%2C1024&ssl=1',
            name: 'Ringing',
            description: 'Cup of juice!'
        },
        {
            url: 'https://i0.wp.com/www.myticklefeet.com/wp-content/uploads/2019/04/20171226_164021-1.jpg?resize=640%2C1024&ssl=1',
            name: 'Ringing',
            description: 'Cup of juice!'
        },
        {
            url: 'https://i0.wp.com/www.myticklefeet.com/wp-content/uploads/2019/04/20171226_164021-1.jpg?resize=640%2C1024&ssl=1',
            name: 'Ringing',
            description: 'Cup of juice!'
        },
        {
            url: 'https://i0.wp.com/www.myticklefeet.com/wp-content/uploads/2019/04/20171226_164021-1.jpg?resize=640%2C1024&ssl=1',
            name: 'Ringing',
            description: 'Cup of juice!'
        }
    ]
}

export const fakeWelcomeProduct3 = {
    type: 'MỚI',
    description: 'Một số sản phẩm mới!',
    listProduct: [
        {
            url: 'https://statics.vinpearl.com/Souvenir-shop-in-Hanoi-01_1690681282.jpg',
            name: 'Ringing',
            description: 'The ringing bell!'
        },
        {
            url: 'https://statics.vinpearl.com/Souvenir-shop-in-Hanoi-01_1690681282.jpg',
            name: 'Ringing',
            description: 'The ringing bell!'
        },
        {
            url: 'https://statics.vinpearl.com/Souvenir-shop-in-Hanoi-01_1690681282.jpg',
            name: 'Ringing',
            description: 'The ringing bell!'
        },
        {
            url: 'https://statics.vinpearl.com/Souvenir-shop-in-Hanoi-01_1690681282.jpg',
            name: 'Ringing',
            description: 'The ringing bell!'
        },
        {
            url: 'https://statics.vinpearl.com/Souvenir-shop-in-Hanoi-01_1690681282.jpg',
            name: 'Ringing',
            description: 'The ringing bell!'
        }
    ]
}

export const fakeWelcomeProduct = [fakeWelcomeProduct1, fakeWelcomeProduct2, fakeWelcomeProduct3]