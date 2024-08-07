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

export let fakeNavVoucher = [
    {
        label: 'Tất cả (0)',
    },
    {
        label: 'Chang (0)',
    },
    {
        label: 'Dành cho riêng bạn (0)',
    },
    {
        label: 'Dịch vụ tài chính (0)',
    },
    {
        label: 'Từ đối tác (0)',
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
    orderPurchase: [
        ...order
    ]
};

export const fakePayment = {
    userId: '1213adada',
    // momo: '0964643875momo',
    // zalopay: '0964643875zalopay',
    // bank: ['0964643875bank1', '0964643875bank2'],
    momo: '',
    zalopay: '',
    bank: [],
}

export const fakeListProduct = {
    data: [
        fakeProduct, fakeProduct, fakeProduct, fakeProduct, fakeProduct, fakeProduct, fakeProduct, fakeProduct
    ],
    trace: 'Phụ kiện\nTrang sức\nDây chuyền',
    type: 'phu-kien\ntrang-suc\nday-chuyen',
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

export const fakeWelcomeProduct = [fakeWelcomeProduct1, fakeWelcomeProduct2, fakeWelcomeProduct3];

export const fakeVoucher = {
    title: 'CHANG',
    type: '1',
    name: 'Giảm 8% Giảm tối đa ₫100k cho đơn Tối Thiểu ₫99k',
    effectiveTime: '30/07/2024',
    endTime: '04/08/2024',
    amount: '10',
    description: 'Lượt sử dụng có hạn. Nhanh tay kẻo lỡ bạn nhé!Giảm 8% Đơn Tối Thiểu ₫99k Giảm tối đa ₫100k.',
    productApplied: 'Chỉ áp dụng trên App cho một số sản phẩm và một số người dùng tham gia chương trình khuyến mãi nhất định',
    paymentApplied: 'Tất cả các hình thức thanh toán',
    shippingUnit: ['Standard Express', 'Hỏa tốc', 'Giao hàng nhanh'],
    device: ['IOS', 'Android', 'PC', 'Laptop'],
    detail: 'Mã HC0108 giảm 8% tối đa 100000Đ cho đơn từ 99000Đ. HSD: 23:59 1/8/2024. Số lượng có hạn.'
};

export const fakeListVoucher = [fakeVoucher, fakeVoucher, fakeVoucher];

export const fakeBlogPaymentPolicy = {
    id: '01',
    title: 'Chính sách thanh toán',
    tag: 0,
    author: 'Chang House',
    createdAt: new Date(),
    updatedAt: new Date(),
    viewed: 10,
    image: 'https://cdn.tgdd.vn//GameApp/1302823//anhh2-800x450.jpg',
    content: [
        {
            section: '',
            subsection: [
                {
                    title: '',
                    content: '&Website thương mại điện tử của <b>Langfarm</b> hiện đang chấp nhận 3 hình thức thanh toán như sau:Thanh toán tiền mặt khi nhận hàng (Thanh toán COD):Chuyển khoản qua ngân hàng:Thanh toán online (Cổng thanh toán VNPAY)'
                },
                {
                    title: 'Lưu ý',
                    content: 'Hình thức thanh toán COD chỉ áp dụng cho đơn hàng có giá trị từ <b>2,000,000đ</b> trở xuống',
                },
                {
                    title: 'Thông tin tài khoản ngân hàng chính thức',
                    content: 'Công Ty TNHH Ola Việt Nam\nSố tài khoản: 0561000606363\nMở tại ngân hàng TMCP Ngoại Thương Việt Nam - Chi nhánh Lâm Đồng',
                },
                {
                    title: 'Lưu ý',
                    content: `
                        Nội dung chuyển khoản xin vui lòng ghi rõ họ tên hoăc công ty và chuyển cho đơn hàng nào. Sau khi chuyển khoản, nhân viên sẽ liên hệ xác nhận thanh toán và tiến hành giao hàng. Nếu sau thời gian thỏa thuận mà chúng tôi chưa giao hàng hoặc chưa phản hồi lại, quý khách vui lòng liên hệ tổng đài điện thoại 19009065 để được hỗ trợ.\nĐối với khách hàng có nhu cầu mua số lượng lớn vui lòng liên hệ trực tiếp với chúng tôi qua tổng đài điện thoại 19009065 để có chính sách giá cả hợp lý. Việc thanh toán sẽ được thực hiện theo hợp đồng.\nĐối với các đơn hàng đã thanh toán thành công qua ngân hàng hoặc cổng thanh toán VNPay, khách hàng có nhu cầu huỷ đơn hàng và hoàn trả tiền đã thanh toán, vui lòng liên hệ đến bộ phận chăm sóc khách hàng (tổng đài điện thoại 19009065) để yêu cầu huỷ đơn hàng và hoàn trả tiền đã thanh toán. Khách hàng sẽ nhận được hoàn trả sau 2 - 4 ngày (không tính Thứ 7 và Chủ nhật) kể từ ngày bộ phận chăm sóc khách hàng L’angfarm xác nhận huỷ đơn hàng và hoàn trả tiền đã thanh toán.
                    `,
                },
            ],
            image: [],
        },
    ],
};

export const fakeBlogReturnPolicy = {
    id: '02',
    title: 'Chính sách đổi trả hàng',
    tag: 0,
    author: 'Chang House',
    createdAt: new Date(),
    updatedAt: new Date(),
    viewed: 10,
    image: 'https://codedeco.art/wp-content/uploads/2021/07/Minimalist-January-Month-Fashion-Sale-Banner-Email-Header-10.5-%C3%97-5-cm-4-1024x488.jpg',
    content: [
        {
            section: '',
            subsection: [
                {
                    title: '',
                    content: 'Với phương châm đặt lợi ích của khách hàng lên hàng đầu, <b>Langfarm</b> chấp nhận đổi trả toàn bộ sản phẩm hư hỏng trong quá trình vận chuyển, có lỗi nhà sản xuất, hoặc bất cứ trường hợp có lỗi khách quan nào xảy ra với toàn bộ chi phí do công ty chịu.'
                },
                {
                    title: 'Điều kiện đổi trả hàng',
                    content: '&Quý khách có thể đổi trả hàng mua tại website khi xảy ra một trong những trường hợp sau:Hàng hoá hư hỏng do vận chuyển, phản hồi trong vòng 7 ngày sau khi nhận hàng: Đổi mới sản phẩm, miễn phí vận chuyển.:Hàng hoá phát hiện lỗi của nhà sản xuất, phản hồi trong vòng 30 ngày sau khi nhận hàng: Nhận lại sản phẩm với chi phí do <b>Langfarm</b> chịu, đổi mới sản phẩm, miễn phí vận chuyển hoặc hoàn tiền 100%.:Hàng hoá gửi bị nhầm mặt hàng, số lượng, phản hồi trong vòng 7 ngày sau khi nhận hàng: Bổ sung, miễn phí vận chuyển.:Khách hàng bị dị ứng với sản phẩm, phản hồi trong vòng 30 ngày sau khi nhận hàng: Nhận lại sản phẩm với tất cả chi phí do <b>Langfarm</b> chịu, hoàn tiền 100%.:Các trường hợp khác: Xin vui lòng liên lạc tổng đài điện thoại 19009065 để được hỗ trợ.',
                },
                {
                    title: 'Phương thức đổi trả hàng',
                    content: 'Tất cả chi phí đổi trả hàng sẽ do <b>Langfarm</b> chịu.\nQuý khách vui lòng liên lạc tổng đài điện thoại 19009065 để được hỗ trợ<div className=""></div>',
                },
                {
                    title: 'Lưu ý',
                    content: `
                        Đối với trường hợp khách hàng huỷ đơn hàng, đã thực hiện thành công thanh toán trước qua cổng thanh toán hoặc chuyển khoản ngân hàng: khách hàng sẽ nhận được hoàn trả sau 2-4 ngày (không tính Thứ 7 và Chủ Nhật) kể từ ngày <b>Langfarm</b> nhận được xác nhận huỷ đơn hàng và yêu cầu hoàn trả.
                    `,
                },
            ],
            image: [],
        },
    ],
};

export const fakeBlogTransportPolicy = {
    id: '02',
    title: 'Chính sách giao hàng',
    tag: 0,
    author: 'Chang House',
    createdAt: new Date(),
    updatedAt: new Date(),
    viewed: 10,
    image: 'https://dongphucict.com/public/upload/images/thumb_baiviet/chinh-sach-giao-hang-751679825333.png',
    content: [
        {
            section: '',
            subsection: [
                {
                    title: '',
                    content: 'Với mong muốn có thể phục vụ khách hàng tốt nhất, <b>Langfarm</b> cung cấp dịch vụ giao hàng đến tận tay khách hàng trên toàn quốc thông qua việc chọn mua sản phẩm trên website thương mại điện tử này'
                },
                {
                    title: 'Thời gian giao hàng',
                    content: 'Khi nhận được đơn đặt hàng trên website, nhân viên sẽ xử lý đơn hàng và gọi điện thoại xác nhận với khách hàng thông tin đơn hàng, thanh toán và vận chuyển trong vòng <b>24 giờ</b> (không kể chủ nhật và ngày lễ).\nThời gian giao hàng trong khoảng từ <b>3 - 5 ngày</b> (không kể thứ 7, chủ nhật và ngày lễ) tính từ ngày xác nhận đơn hàng thành công.\n&Một số trường hợp thời gian giao hàng có thể kéo dài như sau:Nhân viên xử lý đơn không thể liên lạc xác nhận đơn hàng qua điện thoại với khách hàng.:Nhân viên giao hàng không thể liên lạc với khách hàng nhiều lần khi đến giao hàng.:Địa chỉ giao hàng do khách hàng cung cấp không đầy đủ, không chính xác hoặc khó tìm.:Xảy ra trường hợp bất khả kháng như: Thiên tai, bão lụt, hoả hoạn,…',
                },
                {
                    title: 'Bảng phí giao hàng',
                    content: '<b>Miễn phí</b> giao hàng toàn quốc đối với đơn hàng có trị giá từ 490,000đ trở lên.\n<b>30,000đ</b> cho mỗi đơn hàng có trị giá dưới 490,000đ.',
                },
                {
                    title: 'Thông tin giao hàng khác',
                    content: `
                        Đối tác vận chuyển: <a href="Giaohangtietkiem.vn">Giaohangtietkiem.vn</a>\nĐịa điểm có thể giao hàng: Trên toàn lãnh thổ Việt Nam, ngoại trừ các khu vực đối tác vận chuyển không thể giao tới\n&Lưu ý:Langfarm hiện chưa cung cấp dịch vụ giao hàng ra nước ngoài:Tất cả trách nhiệm pháp lý liên quan đến việc giao hàng và tiến độ giao hàng sẽ được đối tác vận chuyển chịu trách nhiệm
                    `,
                },
            ],
            image: [],
        },
    ],
};

export const fakeBlogSecurityPolicy = {
    id: '02',
    title: 'Chính sách bảo mật',
    tag: 1,
    author: 'Chang House',
    createdAt: new Date(),
    updatedAt: new Date(),
    viewed: 10,
    image: 'https://internet-viettel.vn/uploads/files/tin_tuc/Chinh-sach-bao-mat.png',
    content: [
        {
            section: '',
            subsection: [
                {
                    title: 'Mục đích và phạm vi thu thập thông tin',
                    content: 'Việc thu thập thông tin chủ yếu trên website bao gồm: Họ & tên, email, số điện thoại, địa chỉ khách hàng. Đây là các thông tin cần thiết tối thiểu để khách hàng có thể sử dụng dịch vụ mua hàng online giao tận nơi của <b>Langfarm</b>'
                },
                {
                    title: 'Phạm vi sử dụng thông tin',
                    content: `&<b>Langfarm</b> sử dụng thông tin khách hàng cung cấp để:Cung cấp dịch vụ bán hàng online giao tận nơi đến khách hàng.:Gửi các thông tin xác nhận, các thông báo về hoạt động trao đổi thông tin giữa khách hàng và <b>Langfarm</b>.:Liên lạc và hỗ trợ khách hàng trong những trường hợp đặc biệt.:Không sử dụng thông tin cá nhân của khách hàng ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch tại website.:Langfarm có trách nhiệm hợp tác cung cấp thông tin khách hàng khi có yêu cầu từ cơ quan nhà nước có thẩm quyền.`,
                },
                {
                    title: 'Thời gian lưu trữ thông tin',
                    content: 'Dữ liệu của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu huỷ bỏ từ khách hàng. Còn lại trong mọi trường hợp, thông tin khách hàng sẽ được bảo mật trên máy chủ của <b>Langfarm</b> hoặc đối tác cung cấp dịch vụ máy chủ',
                },
                {
                    title: 'Những người hoặc tổ chức có thể được tiếp cận với thông tin cá nhân',
                    content: `&Đối tượng được tiếp cận với thông tin cá nhân của khách hàng thuộc một trong những trường hợp sau:Nhân viên của công ty:Các đối tác có ký hợp động thực hiện 1 phần dịch vụ của công ty. Các đối tác này sẽ nhận được những thông tin theo thỏa thuận hợp đồng (có thể 1 phần hoặc toàn bộ thông tin tuy theo điều khoản hợp đồng) để tiến hành hỗ trợ người dùng sử dụng dịch vụ do công ty cung cấp.
                    `,
                },
                {
                    title: 'Thông tin của đơn vị thu thập, quản lý thông tin và hỗ trợ khách hàng',
                    content: `
                        Công Ty TNHH Ola Việt Nam\nD8/39N Ấp 4, Xã Vĩnh Lộc A, Huyện Bình Chánh, Hồ Chí Minh, Việt Nam\nMST: 0315241288\nTổng đài điện thoại: 19009065\nEmail: <a href="mailto:info@langfarm.com">info@langfarm.com</a>
                    `,
                },
                {
                    title: 'Cách thức và phương tiện để khách hàng tiếp cận và chỉnh sửa dữ liệu của mình',
                    content: `Khách hàng có thể kiểm tra thông tin của mình bằng cách xem email xác nhận đơn hàng gần nhất. Việc chỉnh sửa thông tin cá nhân, khách hàng có thể gửi mail đến địa chỉ <a href="mailto:info@langfarm.com">info@langfarmdalat.com</a> hoặc gọi điện thoại đến tổng đài 19009065 để yêu cầu thực hiện.\nKhách hàng có quyền gửi khiếu nại về việc lộ thông tin cá nhân cho bên thứ ba đến ban quản trị của <b>Langfarm</b>. Khi tiếp nhận những phản hồi này, <b>Langfarm</b> sẽ xác nhận lại thông tin và phải có trách nhiệm trả lời lý do và hướng dẫn khách hàng khôi phục và bảo mật lại thông tin.
                    `,
                },
                {
                    title: 'Cam kết bảo mật thông tin cá nhân khách hàng',
                    content: `&Thông tin cá nhân của khách hàng trên website này được cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của <b>Langfarm</b>. Việc thu thập và sử dụng thông tin của mỗi khách hàng cho mục đích khác chỉ được thực hiện khi có sự đồng ý của khách hàng đó, trừ những trường hợp pháp luật quy định. <b>Langfarm</b> cam kết:Không sử dụng, không chuyển giao, không cung cấp hay tiết lộ cho bất kỳ bên thứ ba nào về thông tin cá nhân của khách hàng khi không được sự cho phép hoặc đồng ý từ khách hàng, trừ những trường hợp pháp luật có quy định khác.:Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân khách hàng, <b>Langfarm</b> sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho khách hàng được biết.:Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của khách hàng, bao gồm cả thông tin hoá đơn.`,
                },
            ],
            image: [],
        },
    ],
};

export const fakeBlog = [fakeBlogPaymentPolicy];
