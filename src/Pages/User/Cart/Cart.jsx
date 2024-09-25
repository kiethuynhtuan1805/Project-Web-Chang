import './Cart.scss'
import { Col, Row } from 'antd';
import { ProductCarousel } from 'Components';
import { CartPayment, Trace } from 'Components';
import { fakeUser, fakeCart } from 'data';


export default function Cart() {
    const traceData = {
        data: ["Trang chủ", "Quản lý giỏ hàng"],
        route: ['/home']
    };
    console.log(fakeUser);

    return (
        <div className='Cart'>
            <Trace traceData={traceData} />
            <Row className='col-header'>
                <Col md={{ span: 2 }}>
                    <div>
                        <input type="checkbox" name="" id="" />
                    </div>
                </Col>
                <Col md={{ span: 6 }} className='label-sp'>
                    <p>
                        Sản Phẩm
                    </p>
                </Col>
                <Col md={{ span: 4 }}></Col>
                <Col md={{ span: 3 }}>
                    <p>Đơn Giá</p>
                </Col>
                <Col md={{ span: 3 }}>
                    <p>Số Lượng</p>
                </Col>
                <Col md={{ span: 3 }}>
                    <p>Số Tiền</p>
                </Col>
                <Col md={{ span: 3 }}>
                    <p>Thao Tác</p>
                </Col>
            </Row>
            <div className="col-item">
                {
                    fakeCart.data.map((item, index) => {
                        return (
                            <Row className='item-wrapper' key={`cart-item-${index}`}>
                                <Col md={{ span: 2 }}>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                </Col>
                                <Col md={{ span: 6 }} className='item'>
                                    <img src={item.product.picSrc[0].src} alt="" />
                                    <p className='item-label'>{item.product.name}</p>
                                </Col>
                                <Col md={{ span: 4 }}></Col>
                                <Col md={{ span: 3 }}>
                                    <p>{`${item.product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`}</p>
                                </Col>
                                <Col md={{ span: 3 }}>
                                    <p>{item.amount}</p>
                                </Col>
                                <Col md={{ span: 3 }}>
                                    <p>{`${(item.product.price * item.amount).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`}</p>
                                </Col>
                                <Col md={{ span: 3 }}>
                                    <p>Xóa</p>
                                    <p>Tìm sản phẩm tương tự</p>
                                </Col>
                            </Row>
                        )
                    })
                }
            </div>
            <CartPayment />
            <div className='product-detail-sub'>
                <p>
                    Có thể bạn cũng thích
                </p>
                <div>
                    <ProductCarousel />
                </div>
            </div>
        </div>
    )
}