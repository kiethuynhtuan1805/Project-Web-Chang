export const fakeCompany = {
    name: 'Chang House',
    logo: '',
    signature: '',
    slogan: 'Tận hưởng sự đa dạng, tìm thấy sản phẩm đúng nhu cầu của bạn ngay tại đây.',
}

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
    label: 'Chính sách thanh toán',
    author: 'Chang House',
    created: new Date(),
    updated: new Date(),
    viewed: 10,
    image: 'https://cdn.tgdd.vn//GameApp/1302823//anhh2-800x450.jpg',
    content: [
        {
            section: '',
            subsection: [
                {
                    title: '',
                    content: '&lWebsite thương mại điện tử của <b>Langfarm</b> hiện đang chấp nhận 3 hình thức thanh toán như sau:Thanh toán tiền mặt khi nhận hàng (Thanh toán COD):Chuyển khoản qua ngân hàng:Thanh toán online (Cổng thanh toán VNPAY)',
                    image: [],
                },
                {
                    title: 'Lưu ý',
                    content: 'Hình thức thanh toán COD chỉ áp dụng cho đơn hàng có giá trị từ <b>2,000,000đ</b> trở xuống',
                    image: [],
                },
                {
                    title: 'Thông tin tài khoản ngân hàng chính thức',
                    content: 'Công Ty TNHH Ola Việt Nam\nSố tài khoản: 0561000606363\nMở tại ngân hàng TMCP Ngoại Thương Việt Nam - Chi nhánh Lâm Đồng',
                    image: [],
                },
                {
                    title: 'Lưu ý',
                    content: `
                        Nội dung chuyển khoản xin vui lòng ghi rõ họ tên hoăc công ty và chuyển cho đơn hàng nào. Sau khi chuyển khoản, nhân viên sẽ liên hệ xác nhận thanh toán và tiến hành giao hàng. Nếu sau thời gian thỏa thuận mà chúng tôi chưa giao hàng hoặc chưa phản hồi lại, quý khách vui lòng liên hệ tổng đài điện thoại 19009065 để được hỗ trợ.\nĐối với khách hàng có nhu cầu mua số lượng lớn vui lòng liên hệ trực tiếp với chúng tôi qua tổng đài điện thoại 19009065 để có chính sách giá cả hợp lý. Việc thanh toán sẽ được thực hiện theo hợp đồng.\nĐối với các đơn hàng đã thanh toán thành công qua ngân hàng hoặc cổng thanh toán VNPay, khách hàng có nhu cầu huỷ đơn hàng và hoàn trả tiền đã thanh toán, vui lòng liên hệ đến bộ phận chăm sóc khách hàng (tổng đài điện thoại 19009065) để yêu cầu huỷ đơn hàng và hoàn trả tiền đã thanh toán. Khách hàng sẽ nhận được hoàn trả sau 2 - 4 ngày (không tính Thứ 7 và Chủ nhật) kể từ ngày bộ phận chăm sóc khách hàng L’angfarm xác nhận huỷ đơn hàng và hoàn trả tiền đã thanh toán.
                    `,
                    image: [],
                },
            ],
        },
    ],
    keywords: ['policy', 'support', 'payment'],
    key: 'cstt',
    url: '/blog/policy/payment-policy',
    type: 'cs',
    description: '',
};

export const fakeBlogReturnPolicy = {
    id: '02',
    label: 'Chính sách đổi trả hàng',
    author: 'Chang House',
    created: new Date(),
    updated: new Date(),
    viewed: 10,
    image: 'https://codedeco.art/wp-content/uploads/2021/07/Minimalist-January-Month-Fashion-Sale-Banner-Email-Header-10.5-%C3%97-5-cm-4-1024x488.jpg',
    content: [
        {
            section: '',
            subsection: [
                {
                    title: '',
                    content: 'Với phương châm đặt lợi ích của khách hàng lên hàng đầu, <b>Langfarm</b> chấp nhận đổi trả toàn bộ sản phẩm hư hỏng trong quá trình vận chuyển, có lỗi nhà sản xuất, hoặc bất cứ trường hợp có lỗi khách quan nào xảy ra với toàn bộ chi phí do công ty chịu.',
                    image: [],
                },
                {
                    title: 'Điều kiện đổi trả hàng',
                    content: '&lQuý khách có thể đổi trả hàng mua tại website khi xảy ra một trong những trường hợp sau:Hàng hoá hư hỏng do vận chuyển, phản hồi trong vòng 7 ngày sau khi nhận hàng: Đổi mới sản phẩm, miễn phí vận chuyển.:Hàng hoá phát hiện lỗi của nhà sản xuất, phản hồi trong vòng 30 ngày sau khi nhận hàng: Nhận lại sản phẩm với chi phí do <b>Langfarm</b> chịu, đổi mới sản phẩm, miễn phí vận chuyển hoặc hoàn tiền 100%.:Hàng hoá gửi bị nhầm mặt hàng, số lượng, phản hồi trong vòng 7 ngày sau khi nhận hàng: Bổ sung, miễn phí vận chuyển.:Khách hàng bị dị ứng với sản phẩm, phản hồi trong vòng 30 ngày sau khi nhận hàng: Nhận lại sản phẩm với tất cả chi phí do <b>Langfarm</b> chịu, hoàn tiền 100%.:Các trường hợp khác: Xin vui lòng liên lạc tổng đài điện thoại 19009065 để được hỗ trợ.',
                    image: [],
                },
                {
                    title: 'Phương thức đổi trả hàng',
                    content: 'Tất cả chi phí đổi trả hàng sẽ do <b>Langfarm</b> chịu.\nQuý khách vui lòng liên lạc tổng đài điện thoại 19009065 để được hỗ trợ<div className=""></div>',
                    image: [],
                },
                {
                    title: 'Lưu ý',
                    content: `
                        Đối với trường hợp khách hàng huỷ đơn hàng, đã thực hiện thành công thanh toán trước qua cổng thanh toán hoặc chuyển khoản ngân hàng: khách hàng sẽ nhận được hoàn trả sau 2-4 ngày (không tính Thứ 7 và Chủ Nhật) kể từ ngày <b>Langfarm</b> nhận được xác nhận huỷ đơn hàng và yêu cầu hoàn trả.
                    `,
                    image: [],
                },
            ],
        },
    ],
    keywords: ['policy', 'support', 'return'],
    key: 'csdth',
    url: '/blog/policy/return-policy',
    type: 'cs',
    description: 'Với phương châm đặt lợi ích của khách hàng lên hàng đầu, Langfarm chấp nhận đổi trả toàn bộ sản phẩm hư hỏng trong quá trình vận chuyển, có lỗi nhà sản xuất, hoặc bất cứ trường hợp có lỗi khách quan nào xảy ra với toàn bộ chi phí do công ty chịu.',
};

export const fakeBlogTransportPolicy = {
    id: '03',
    label: 'Chính sách giao hàng',
    author: 'Chang House',
    created: new Date(),
    updated: new Date(),
    viewed: 10,
    image: 'https://dongphucict.com/public/upload/images/thumb_baiviet/chinh-sach-giao-hang-751679825333.png',
    content: [
        {
            section: '',
            subsection: [
                {
                    title: '',
                    content: 'Với mong muốn có thể phục vụ khách hàng tốt nhất, <b>Langfarm</b> cung cấp dịch vụ giao hàng đến tận tay khách hàng trên toàn quốc thông qua việc chọn mua sản phẩm trên website thương mại điện tử này',
                    image: [],
                },
                {
                    title: 'Thời gian giao hàng',
                    content: 'Khi nhận được đơn đặt hàng trên website, nhân viên sẽ xử lý đơn hàng và gọi điện thoại xác nhận với khách hàng thông tin đơn hàng, thanh toán và vận chuyển trong vòng <b>24 giờ</b> (không kể chủ nhật và ngày lễ).\nThời gian giao hàng trong khoảng từ <b>3 - 5 ngày</b> (không kể thứ 7, chủ nhật và ngày lễ) tính từ ngày xác nhận đơn hàng thành công.\n&lMột số trường hợp thời gian giao hàng có thể kéo dài như sau:Nhân viên xử lý đơn không thể liên lạc xác nhận đơn hàng qua điện thoại với khách hàng.:Nhân viên giao hàng không thể liên lạc với khách hàng nhiều lần khi đến giao hàng.:Địa chỉ giao hàng do khách hàng cung cấp không đầy đủ, không chính xác hoặc khó tìm.:Xảy ra trường hợp bất khả kháng như: Thiên tai, bão lụt, hoả hoạn,…',
                    image: [],
                },
                {
                    title: 'Bảng phí giao hàng',
                    content: '<b>Miễn phí</b> giao hàng toàn quốc đối với đơn hàng có trị giá từ 490,000đ trở lên.\n<b>30,000đ</b> cho mỗi đơn hàng có trị giá dưới 490,000đ.',
                    image: [],
                },
                {
                    title: 'Thông tin giao hàng khác',
                    content: `
                        Đối tác vận chuyển: <a href="Giaohangtietkiem.vn">Giaohangtietkiem.vn</a>\nĐịa điểm có thể giao hàng: Trên toàn lãnh thổ Việt Nam, ngoại trừ các khu vực đối tác vận chuyển không thể giao tới\n&lLưu ý:Langfarm hiện chưa cung cấp dịch vụ giao hàng ra nước ngoài:Tất cả trách nhiệm pháp lý liên quan đến việc giao hàng và tiến độ giao hàng sẽ được đối tác vận chuyển chịu trách nhiệm
                    `,
                    image: [],
                },
            ],
        },
    ],
    keywords: ['policy', 'support', 'delivery'],
    key: 'csgh',
    url: '/blog/policy/transport-policy',
    type: 'cs',
    description: 'Với mong muốn có thể phục vụ khách hàng tốt nhất, L’angfarm cung cấp dịch vụ giao hàng đến tận tay khách hàng trên toàn quốc thông qua việc chọn mua sản phẩm trên website thương mại điện tử này',
};

export const fakeBlogSecurityPolicy = {
    id: '04',
    label: 'Chính sách bảo mật',
    author: 'Chang House',
    created: new Date(),
    updated: new Date(),
    viewed: 10,
    image: 'https://internet-viettel.vn/uploads/files/tin_tuc/Chinh-sach-bao-mat.png',
    content: [
        {
            section: '',
            subsection: [
                {
                    title: 'Mục đích và phạm vi thu thập thông tin',
                    content: 'Việc thu thập thông tin chủ yếu trên website bao gồm: Họ &l tên, email, số điện thoại, địa chỉ khách hàng. Đây là các thông tin cần thiết tối thiểu để khách hàng có thể sử dụng dịch vụ mua hàng online giao tận nơi của <b>Langfarm</b>',
                    image: [],
                },
                {
                    title: 'Phạm vi sử dụng thông tin',
                    content: `&l<b>Langfarm</b> sử dụng thông tin khách hàng cung cấp để:Cung cấp dịch vụ bán hàng online giao tận nơi đến khách hàng.:Gửi các thông tin xác nhận, các thông báo về hoạt động trao đổi thông tin giữa khách hàng và <b>Langfarm</b>.:Liên lạc và hỗ trợ khách hàng trong những trường hợp đặc biệt.:Không sử dụng thông tin cá nhân của khách hàng ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch tại website.:Langfarm có trách nhiệm hợp tác cung cấp thông tin khách hàng khi có yêu cầu từ cơ quan nhà nước có thẩm quyền.`,
                    image: [],
                },
                {
                    title: 'Thời gian lưu trữ thông tin',
                    content: 'Dữ liệu của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu huỷ bỏ từ khách hàng. Còn lại trong mọi trường hợp, thông tin khách hàng sẽ được bảo mật trên máy chủ của <b>Langfarm</b> hoặc đối tác cung cấp dịch vụ máy chủ',
                    image: [],
                },
                {
                    title: 'Những người hoặc tổ chức có thể được tiếp cận với thông tin cá nhân',
                    content: `&lĐối tượng được tiếp cận với thông tin cá nhân của khách hàng thuộc một trong những trường hợp sau:Nhân viên của công ty:Các đối tác có ký hợp động thực hiện 1 phần dịch vụ của công ty. Các đối tác này sẽ nhận được những thông tin theo thỏa thuận hợp đồng (có thể 1 phần hoặc toàn bộ thông tin tuy theo điều khoản hợp đồng) để tiến hành hỗ trợ người dùng sử dụng dịch vụ do công ty cung cấp.
                    `,
                    image: [],
                },
                {
                    title: 'Thông tin của đơn vị thu thập, quản lý thông tin và hỗ trợ khách hàng',
                    content: `
                        Công Ty TNHH Ola Việt Nam\nD8/39N Ấp 4, Xã Vĩnh Lộc A, Huyện Bình Chánh, Hồ Chí Minh, Việt Nam\nMST: 0315241288\nTổng đài điện thoại: 19009065\nEmail: <a href="mailto:info@langfarm.com">info@langfarm.com</a>
                    `,
                    image: [],
                },
                {
                    title: 'Cách thức và phương tiện để khách hàng tiếp cận và chỉnh sửa dữ liệu của mình',
                    content: `Khách hàng có thể kiểm tra thông tin của mình bằng cách xem email xác nhận đơn hàng gần nhất. Việc chỉnh sửa thông tin cá nhân, khách hàng có thể gửi mail đến địa chỉ <a href="mailto:info@langfarm.com">info@langfarmdalat.com</a> hoặc gọi điện thoại đến tổng đài 19009065 để yêu cầu thực hiện.\nKhách hàng có quyền gửi khiếu nại về việc lộ thông tin cá nhân cho bên thứ ba đến ban quản trị của <b>Langfarm</b>. Khi tiếp nhận những phản hồi này, <b>Langfarm</b> sẽ xác nhận lại thông tin và phải có trách nhiệm trả lời lý do và hướng dẫn khách hàng khôi phục và bảo mật lại thông tin.
                    `,
                    image: [],
                },
                {
                    title: 'Cam kết bảo mật thông tin cá nhân khách hàng',
                    content: `&lThông tin cá nhân của khách hàng trên website này được cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của <b>Langfarm</b>. Việc thu thập và sử dụng thông tin của mỗi khách hàng cho mục đích khác chỉ được thực hiện khi có sự đồng ý của khách hàng đó, trừ những trường hợp pháp luật quy định. <b>Langfarm</b> cam kết:Không sử dụng, không chuyển giao, không cung cấp hay tiết lộ cho bất kỳ bên thứ ba nào về thông tin cá nhân của khách hàng khi không được sự cho phép hoặc đồng ý từ khách hàng, trừ những trường hợp pháp luật có quy định khác.:Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân khách hàng, <b>Langfarm</b> sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho khách hàng được biết.:Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của khách hàng, bao gồm cả thông tin hoá đơn.`,
                    image: [],
                },
            ],
        },
    ],
    keywords: ['policy', 'support', 'privacy'],
    key: 'csbm',
    url: '/blog/user-care/security-policy',
    type: 'cskh',
    description: 'Việc thu thập thông tin chủ yếu trên website bao gồm: Họ & tên, email, số điện thoại, địa chỉ khách hàng. Đây là các thông tin cần thiết tối thiểu để khách hàng có thể sử dụng dịch vụ mua hàng online giao tận nơi của Langfarm.',
};

export const fakeBlogTermsOfUse = {
    id: '05',
    label: 'Điều khoản sử dụng',
    author: 'Chang House',
    created: new Date(),
    updated: new Date(),
    viewed: 10,
    image: 'https://nextcrm.vn/wp-content/uploads/2022/12/dieu-khoan-su-dung-1024x538-1.jpg',
    content: [
        {
            section: '',
            subsection: [
                {
                    title: 'Giới thiệu',
                    content: `Chào mừng quý khách hàng đến với website thương mại điện tử uỷ quyền chính thức của <b>Langfarm</b>. <b>Langfarm</b> là một thương hiệu của công ty TNHH Quảng Thái, được thành lập vào năm 2002 tại TP. Đà Lạt. Hiện nay, <b>Langfarm</b> là thương hiệu đặc sản Đà Lạt hàng đầu, cung cấp sản phẩm nông sản chế biến chất lượng cao, an toàn, tin cậy, phải chăng, đẹp mắt, hài lòng như: Trà atisô, bánh mứt đặc sản, cà phê, hạt, nước cốt, thảo mộc, thịt khô, trà pha ấm, trà túi lọc, trái cây sấy dẻo, trái cây sấy giòn, bột trà xanh matcha, trà sencha hoa,…\nKhi quý khách truy cập và sử dụng dịch vụ tại website thương mại điện tử này đồng nghĩa với việc đồng ý với điều khoản sử dụng của website. Chúng tôi có quyền thay đổi, chỉnh sửa, bổ sung hoặc lược bớt bất kỳ phần nào trong điều khoản sử dụng này vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên website mà không cần thông báo trước. Và khi quý khách hàng tiếp tục sử dụng website, sau khi các thay đổi vè điều khoản sử dụng được đăng tải, có nghĩa là quý khách đã đồng ý với những thay đổi đó.`,
                    image: [],
                },
                {
                    title: 'Hướng dẫn sử dụng',
                    content: 'Khi quý khách truy cập và sử dụng dịch vụ tại website thương mại điện tử này, khách hàng phải đảm bảo trên 18 tuổi, hoặc truy cập dưới sự giám sát của cha mẹ hoặc người bảo hộ hợp pháp. Khách hàng phải đảm bảo có đủ hành vị dân sự để thực hiện các giao dịch mua bán hàng hoá theo quy định hiện hành của pháp luật Việt Nam.\nNghiêm cấm sử dụng bất kỳ phần nào của website này với mục đích thương mại nào khác hoặc nhân danh bất kỳ đối tác thứ ba nào nếu không được chúng tôi cho phép bằng văn bản.',
                    image: [],
                },
                {
                    title: 'Bình luận của khách hàng',
                    content: 'Tất cả nội dung trên website này và bình luận phê bình của khách hàng đều là tài sản của chúng tôi. Nếu chúng tôi phát hiện bất kỳ thông tin nào mang tính chất giả mạo, phát tán, truyền bá hay cổ vũ nội dung khiêu dâm, phản động chống phá Nhà Nước Việt Nam, chúng tôi có quyền xoá mà không cần thông báo trước hoặc áp dụng các biện pháp chế khác theo quy định của pháp luật Việt Nam.',
                    image: [],
                },
                {
                    title: 'Chấp nhận đơn hàng và giá cả',
                    content: `
                        Chúng tôi cam kết cung cấp thông tin sản phẩm và giá cả chính xác nhất cho khách hàng. Tuy nhiên, đôi lúc vẫn có sai sót xảy ra, ví dụ như trường hợp giá sản phẩm không hiển thị chính xác trên website hoặc sai giá. Tùy theo từng trường hợp, chúng tôi có quyền từ chối hoặc huỷ đơn hàng của quý khách vì lý do liên quan đến lỗi kỹ thuật, hệ thống một các khách quan. Nhân viên sẽ liên hệ hướng dẫn hoặc thông báo hủy đơn hàng đó, đồng thời hoàn tiền cho khách hàng đã thanh toán (nếu có).
                    `,
                    image: [],
                },
                {
                    title: 'Thương hiệu và bản quyền',
                    content: `
                        Mọi quyền sở hữu trí tuệ (đã đăng ký hoặc chưa đăng ký), nội dung thông tin và tất cả các thiết kế, văn bản, đồ họa, phần mềm, hình ảnh, video, âm nhạc, âm thanh, biên dịch phần mềm, mã nguồn và phần mềm cơ bản đều là tài sản của chúng tôi. Toàn bộ nội dung của website được bảo vệ bởi luật bản quyền của Việt Nam và các công ước quốc tế. Bản quyền đã được bảo lưu.
                    `,
                    image: [],
                },
                {
                    title: 'Quyền pháp lý',
                    content: `
                        Các điều kiện, điều khoản và nội dung của website này được điều chỉnh bởi luật pháp Việt Nam. Tòa án có thẩm quyền tại Việt Nam sẽ giải quyết bất kỳ tranh chấp nào phát sinh từ việc sử dụng trái phép trang web này.
                    `,
                    image: [],
                },
                {
                    title: 'Quy định về bảo mật và an toàn giao dịch',
                    content: `
                        Website của chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất bảo vệ thông tin và việc thanh toán của quý khách. Thông tin của quý khách trong quá trình thanh toán sẽ được mã hóa để đảm bảo an toàn. Sau khi quý khách hoàn thành quá trình đặt hàng, quý khách sẽ thoát khỏi chế độ an toàn. Chúng tôi sử dụng các dịch vụ để bảo vệ thông tin về nội dung trên website. Để đảm bảo các giao dịch được tiến hành thành công, hạn chế tối đa rủi ro có thể phát sinh.\nQuý khách không được sử dụng bất kỳ chương trình, công cụ hay hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi cấu trúc dữ liệu. Trang web cũng nghiêm cấm việc phát tán, truyền bá hay cổ vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống. Cá nhân hay tổ chức vi phạm sẽ bị tước bỏ mọi quyền lợi cũng như sẽ bị truy tố trước pháp luật nếu cần thiết. Mọi thông tin giao dịch sẽ được bảo mật ngoại trừ trong trường hợp cơ quan pháp luật có thẩm quyền yêu cầu.
                    `,
                    image: [],
                },
                {
                    title: 'Luật pháp và thẩm quyền trên lãnh thổ Việt Nam',
                    content: `
                        Tất cả các điều khoản và điều kiện này và hợp đồng và nghĩa vụ phát sinh ngoài hợp đồng (Nếu có) sẽ bị chi phối bởi và được hiểu theo luật pháp của Việt Nam. Nếu có tranh chấp phát sinh bởi các quy định sử dụng này, quý khách hàng có quyền gửi khiếu nại hoặc khiếu kiện lên tòa án có thẩm quyền tại Việt Nam để giải quyết.
                    `,
                    image: [],
                },
            ],
        },
    ],
    keywords: ['terms', 'conditions', 'support'],
    key: 'dksd',
    url: '/blog/user-care/terms-of-use',
    type: 'cskh',
    description: '',
};

export const fakeBlogGuide = {
    id: '06',
    label: 'Hướng dẫn mua hàng',
    author: 'Chang House',
    created: new Date(),
    updated: new Date(),
    viewed: 10,
    image: 'https://langfarmstore.com/_next/image?url=https%3A%2F%2Flangfarm-backend.s3.amazonaws.com%2Fhuonddan.png&w=1080&q=75',
    content: [
        {
            section: '',
            subsection: [
                {
                    title: '',
                    content: `Các bước mua hàng trên website điện tử này được thực hiện như sau:`,
                    image: [],
                },
                {
                    title: 'Bước 1: Tìm kiếm sản phẩm',
                    content: '&lQuý khách có thể tìm kiếm sản phẩm theo 1 trong 3 cách:Gõ tên sản phẩm vào thanh tìm kiếm.:Tìm theo danh mục.:Tìm theo các sản phẩm nổi bật hoặc bán chạy.',
                    image: [],
                },
                {
                    title: 'Bước 2: Thêm sản phẩm vào giỏ hàng',
                    content: '&lKhi đã tìm được sản phẩm mong muốn, quý khách vui lòng bấm vào hình hoặc tên của sản phẩm để vào trang thông tin chi tiết của sản phẩm, sau đó:Kiểm tra thông tin sản phẩm, giá cả, thông tin khuyến mãi.:Chọn số lượng mong muốn.:Thêm sản phẩm vào giỏ hàng.',
                    image: [],
                },
                {
                    title: 'Bước 3: Kiểm tra giỏ hàng và đặt hàng',
                    content: `&lĐể đặt nhiều sản phẩm khác nhau vào cùng một đơn hàng, vui lòng thực hiện theo các bước sau:Thêm sản phẩm vào giỏ hàng như ở Bước 2.:Quá trình này có thể lặp lại đến khi quý khách hoàn tất việc bỏ tất cả sản phẩm vào giỏ hàng.:Điều chỉnh số lượng và cập nhật giỏ hàng.:Bấm “Thanh Toán” để bắt đầu đặt hàng.:<b>Có thể click vào logo để quay lại trang chủ.</b>`,
                    image: [],
                },
                {
                    title: 'Bước 4: Điền địa chỉ giao hàng',
                    content: `
                        Điền các thông tin về địa chỉ giao hàng.
                    `,
                    image: [],
                },
                {
                    title: 'Bước 5: Chọn phương thức vận chuyển và phương thức thanh toán',
                    content: `
                        Chọn phương thức vận chuyển và thanh toán phù hợp.
                    `,
                    image: [],
                },
                {
                    title: 'Bước 6: Bấm vào “Hoàn tất đơn hàng”',
                    content: ``,
                    image: [],
                }
            ],
        },
    ],
    keywords: ['guide', 'buying', 'support'],
    key: 'hdmh',
    url: '/blog/user-care/guide',
    type: 'cskh',
    description: '',
};

export const fakeBlogVAT = {
    id: '07',
    label: 'Chính sách xuất hoá đơn GTGT',
    author: 'Chang House',
    created: new Date(),
    updated: new Date(),
    viewed: 10,
    image: 'https://thegioiinan.com/images/faq/The_gioi_in_an_20240711172742477vat.jpeg',
    content: [
        {
            section: '',
            subsection: [
                {
                    title: '',
                    content: `&i0\nCông ty TNHH Ola Việt Nam sẽ phát hành hoá đơn điện tử. Hoá đơn sẽ được gửi đến email đã cung cấp tại mục "Bạn có muốn xuất hóa đơn VAT" sau khi khách hàng nhận hàng từ đối tác vận chuyển.\nKhách hàng yêu cầu xuất hoá đơn vui lòng cung cấp thông tin tại bước đặt hàng bằng cách click vào “Có” tại mục "Bạn có muốn xuất hóa đơn VAT?" và điền đầy đủ thông tin như hình minh hoạ trên.\nKhách hàng không cung cấp thông tin xuất hoá đơn tại bước đặt hàng, sau thời hạn 12 giờ tính từ khi khách hàng nhận hàng từ đối tác vận chuyển, chúng tôi không chịu trách nhiệm xuất lại hoá đơn cho khách hàng vì hoá đơn đã được xuất dưới hình thức “Người mua không lấy hoá đơn”.`,
                    image: ['https://langfarm-staging-backend.s3.amazonaws.com/Screenshot%202024-02-23%20at%2011.58.16.png']
                },
            ],
        },
    ],
    keywords: ['guide', 'buying', 'support'],
    key: 'csvat',
    url: '/blog/policy/vat-policy',
    type: 'cs',
    description: '',
};

export const fakeBlog = {
    id: '08',
    label: 'Cao Atisô Và Những Điều Cần Biết',
    author: 'Huỳnh Tuấn Kiệt',
    created: new Date(),
    updated: new Date(),
    viewed: 10,
    image: 'https://langfarmstore.com/_next/image?url=https%3A%2F%2Flangfarm-backend.s3.amazonaws.com%2Fcaoatiso.webp&w=1080&q=75',
    content: [
        {
            section: '',
            subsection: [
                {
                    title: '',
                    content: `Atisô (bắt nguồn từ tiếng Pháp artichaut) là loại cây lá gai lâu năm có nguồn gốc từ miền Nam châu Âu (quanh Địa Trung Hải) đã được người Cổ Hy Lạp và Cổ La Mã trồng để lấy hoa làm rau ăn. Những cây atisô được trồng đầu tiên ở quanh Naples vào giữa thế kỷ 15. Ngày nay, atisô được trồng chủ yếu ở Pháp, Ý và Tây Ban Nha, Mỹ và các nước Mỹ Latinh. Atisô du thực vào Việt Nam đầu thế kỷ 20, được trồng ở Sa Pa, Tam Đảo, nhiều nhất là ở Đà Lạt. (Trích nguồn Wikipedia).\nHiện nay, với những hoạt chất có công dụng cực tốt, Atisô không chỉ để ăn, làm trà mà còn được trồng để làm cao thuốc. Để giữ nguyên chất dinh dưỡng và thành phần duợc tính có trong Atisô, với công nghệ tân tiến nhất, L'angfarm đã cô đặc lá tươi và cho ra sản phẩm Cao Atisô.`,
                    image: []
                },
            ],
        },
        {
            section: '1. Cao Atisô là gì?',
            subsection: [
                {
                    title: '',
                    content: `Cao Atisô là sản phẩm cô đặc từ Atisô, có màu đen bóng, dạng đặc sánh, vị đắng.\nLá Atisô tươi sau khi lựa chọn thật kỹ, loại bỏ tạp chất được đem đi rửa sạch, phân loại rồi mang đi trích ly hơi nước trong lò. Trải qua giai đoạn trích ly hơi nước hơn 24 giờ đồng hồ, lá Atisô được chắt lọc lại lần nữa , sau đó dùng máy để tách hàm lượng muối có trong thành phẩm sau khi trích ly hơi nước. Bước cuối cùng là bổ sung thảo dược vào sản phẩm để cân bằng lượng dinh dưỡng, các vi lượng, vi chất có trong Atiso để đạt tiêu chuẩn cho phép.\n&i0\n<b><a href="/home">Đặt mua Cao Atisô lá tươi Langfarm ngay tại đây>></a></b>`,
                    image: ['https://file.hstatic.net/1000303672/file/1_2c69ec6d601a4ebd8f628fdb7f3e9c41_1024x1024.jpg']
                },
            ],
        },
        {
            section: '2. Công dụng của cao Atisô.',
            subsection: [
                {
                    title: '',
                    content: `Khoa học đã chứng minh Atisô có rất nhiều lợi ích cho sức khoẻ của con người, sau đây là những công dụng nổi bật của cao Atisô.`,
                    image: []
                },
                {
                    title: '2.1. Ngăn ngừa ung thư',
                    content: 'Là loài thực vật có hàm lượng chất chống oxy hoá cao nhất trong tất cả các loại rau, Polyphenol, Quercetin và Vitamin C (chất chống oxy hoá có trong Atiso) có tính chất ngăn ngừa ung thư, hạn chế nguy cơ mắc bệnh viêm niêm mạc và xơ hoá, ung thư tuyền liệt tuyến va bệnh bạch cầu.',
                    image: [],
                },
                {
                    title: '2.2. Cải thiện tim mạch, giảm Cholesterol',
                    content: 'Lá Atisô có một số thành phần giúp giảm mức Cholesterol xấu (LDL) và tăng mức Cholesterol tốt (HDL hoặc Omega-3), cải thiện sức khoẻ tim mạch cho cơ thể. Bên canh đó, Kali có trong lá Atisô đóng vai trò như một loại thuốc làm giãn mạch, giúp ngừa các biến chứng liên quan đến huyết áp và giảm nguy cơ mắc bệnh nhồi máu cơ tim và bệnh mạnh vành',
                    image: [],
                },
                {
                    title: '2.3. Thanh nhiệt cơ thể, cải thiện sức khoẻ của gan',
                    content: 'Một trong những công dụng nổi bật của Atisô là cải thiện sức khoẻ của gan, Cynarin và Silymarin có trong khả năng giảm độc, nhiều nghiên cứu đã chỉ ra những chất này có thể thúc đẩy sự tái phát triển và phục hồi các tế bào gan bị tổn thương. Vì vậy Atisô cũng là một phương pháp giảm mệt mỏi, khó chịu sau khi sử dụng rượu bia.',
                    image: ['https://file.hstatic.net/1000303672/file/2_573a0a8ca93a499c9b21cda1b798c107_1024x1024.jpg'],
                },
                {
                    title: '2.4. Ngăn ngừa các bệnh về dạ dày',
                    content: 'Bên cạnh đó, Atisô là một trong những thực phẩm tốt nhất cung cấp các vitamin, chất xơ và khoáng chất. Chất xơ giúp ngăn ngừa nguy cơ các bệnh về dạ dày, ruột, giúp làm dịu túi mật và giải quyết vấn đề khi các cơ quan bị tắc nghẽn.',
                    image: [],
                },
                {
                    title: '2.5. Giảm nguy cơ mắc bệnh về xương',
                    content: 'Khoáng chất Magie, Photpho, Mangan không những là thành phần thiết yếu trong việc tăng cường sức khoẻ và mât độ xương, giảm nguy cơ mắc bệnh về xương mà còn đóng vai trò quan trọng trong quá trình tổng hợp Protein, trao đổi chất của cơ thể, tối ưu hoá lượng canxi trong cơ thể giúp xương chắc khoẻ. Đặc biệt là giúp cho phụ nữ nuôi dưỡng thai nhi khỏe mạnh và phát triển bình thường trong thai kỳ.',
                    image: [],
                },
                {
                    title: '2.6. Giảm đường trong máu',
                    content: 'Trong cao atisô có các thành phần dược tính giúp ngăn chặn quá trình hình thành glucose trong gan. Mặt khác, gan lại là cơ quan chính yếu trong việc tiết ra mật để tiêu thụ thực phẩm và chất béo có trong cơ thể, đồng thời giữ lượng đường dưới dạng glycogen rồi chuyển đổi lại thành glucose cung cấp cho máu.',
                    image: [],
                },
                {
                    title: '2.7. Cải thiện giấc ngủ',
                    content: 'Cao Atisô có chứa hàm lượng caffein vừa phải giúp tinh thần thoải mái, dễ chịu và thư giãn cơ thể, giảm thiểu khả năng hình thành bệnh lý liên quan đến stress và hạn chế ảnh hưởng của stress, từ đó giúp cơ thể đi vào giấc ngủ dễ hơn.',
                    image: ['https://file.hstatic.net/1000303672/file/3_8cbb61a5cf3642759c840387fa276578_1024x1024.png'],
                }
            ],
        },
        {
            section: '3. Cách sử dụng cao Atisô',
            subsection: [
                {
                    title: '',
                    content: `Mỗi ngày nên uống 2-3 lần. Pha 2g cao atisô với 200ml nước ấm cho 1 lần uống. Tốt nhất nên uống giữa 2 bữa ăn hoặc cách bữa ăn 30 phút. Để tăng thêm hương vị, có thể dùng chung với đường hoặc mật ong.\nVì là hợp chất cô đặc nên cao Atisô có tính thẩm thấu, nên sử dụng liên tục 10-15 ngày để đạt được hiệu quả cao. Atisô được biết đến với nhiều công dụng và lợi ích cho cơ thể nhưng không nên lạm dụng, sẽ gây tác dụng ngược, ảnh hưởng đên sức khoẻ.\n&i0\n&lNhững trường hợp cần lưu ý và bệnh lý có thể phản ứng khi sử dụng cao Atisô quá nhiều:Có thể gây chướng bụng: khi nghe đến một loại thực phẩm từ thiên nhiên nào đó làm mát cơ thể, đẹp da, không mất ngủ thì mọi người không ngần ngại gì mà không thử. Nhưng sử dụng quá liều lượng sẽ gây nên tình trạng chướng bụng, khó tiêu.:Người có tiền sử bệnh thận: Cao atiso có tác dụng, mát gan, lợi tiểu nhưng khi sử dụng quá nhiều sẽ gây mất cân bằng điện giải, tăng đào thải hoạt chất, kém hấp thu một số vi chất cần thiết cho cơ thể như canxi, K… lâu ngày sẽ có hại cho thận, dẫn tới suy thận.:Người gầy gò, ốm yếu: Trong cao atiso chứa nhiều sắt nhưng lại thiếu các chất dinh dưỡng thiết yếu cho cơ thể như kẽm, nhôm… Chính vì thế mà khi sử dụng một thời gian sẽ gây nên tình trạng mệt mỏi, chán ăn. Dẫn đến ảnh hưởng cân nặng và sụt kg.`,
                    image: ['https://file.hstatic.net/1000303672/file/4_fac830b0bdb34353b4d91e7b5dccf702_1024x1024.jpg']
                },
            ],
        },
        {
            section: '4. Sản phẩm cao Atisô',
            subsection: [
                {
                    title: '4.1 Cao Atisô lá tươi, hộp 150g, hũ thuỷ tinh',
                    content: `Từ 100% lá tươi, sau khi được làm sạch, trích ly hơi nước và cân bằng dinh dưỡng, cao Atisô được đóng vào các hũ thuỷ tinh để bảo quản, tránh tiếp xúc với môi trường bên ngoài. Bên cạnh đó, với chất liệu thuỷ tinh dày dặn, khó vỡ, tiện lợi cho việc vận chuyển, cao Atisô lá tươi 150g thích hợp dùng thử tại nhà và mang đi xa.\n$i0`,
                    image: ['https://file.hstatic.net/1000303672/file/5_962fa5805ec4495fa6d214d99c356a50_1024x1024.jpg']
                },
                {
                    title: '4.2 Cao Atisô lá tươi, hộp 450g, hũ thuỷ tinh',
                    content: `Quy cách chế biến, sản xuất và đóng hộp tương tự như loại 150g, nhưng có phần khác biệt hơn về mẫu mã bên ngoài, cao Atisô sau khi được đóng vào 3 hũ thuỷ tinh 150g sẽ được đưa vào set hộp giấy. Với thiết kế cực kỳ sang trọng và bắt mắt, cao Atisô lá tươi, hộp 450g thích hợp làm quà tặng, quà biếu cho người thân và bạn bè.\n$i0\nCao Atisô lá tươi L'angfarm được chiết xuất hoàn toàn từ 100% lá Atisô tươi, không chất phụ gia bảo quản, yên tâm sử dụng. L'angfarm luôn làm việc chăm chỉ mỗi ngày để tạo ra những sản phẩm uy tín, chất lượng cao, tốt cho sức khoẻ, bao bì đẹp mắt, hậu mãi hài lòng. Hãy đến với L'angfarm - Nguồn gốc nông sản - Thương hiệu đặc sản Đà Lạt dẫn đầu.\n------\nL'angfarm - Đặc sản Đà Lạt\nWebsite: <a href:"https://www.langfarm.com/">https://www.langfarm.com/</a>`,
                    image: ['https://file.hstatic.net/1000303672/file/6_04ab64a0af964aeaaf9460afd8cf010b_1024x1024.jpg']
                },
            ],

        }
    ],
    keywords: [],
    key: '#121dlc',
    url: '/blog/121',
    type: 'tt',
    description: 'Hiện nay, với những hoạt chất có công dụng cực tốt, atisô không chỉ để ăn, làm trà mà còn được trồng để làm cao thuốc. Để giữ nguyên chất dinh dưỡng và thành phần duợc tính có trong Atisô, với công nghệ tân tiến nhất, Langfarm đã cô đặc lá tươi và cho ra sản phẩm Cao Atisô.',
}

export const fakeKeywords = [
    {
        id: '000',
        data: 'terms',
        type: 'blog',
    },
    {
        id: '001',
        data: 'invoice',
        type: 'blog',
    },
    {
        id: '002',
        data: 'delivery',
        type: 'blog',
    },
    {
        id: '003',
        data: 'policy',
        type: 'blog',
    },
    {
        id: '004',
        data: 'support',
        type: 'blog',
    }
]

export const fakeBlogList = [fakeBlog, fakeBlogPaymentPolicy, fakeBlogReturnPolicy, fakeBlogSecurityPolicy, fakeBlogTermsOfUse, fakeBlogTransportPolicy, fakeBlogVAT, fakeBlogGuide]