import { Trace } from 'components';
import './Payment.scss'
import { Col, Row } from 'antd';
import { UserPageNav } from 'components';
import { fakePayment } from 'data';

export default function Payment() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Ngân hàng"],
        route: ['/home', "/user"]
    };

    return (
        <div className='Payment'>
            <Trace traceData={traceData} />
            <Row style={{ marginBottom: '100px' }}>
                <Col span={5} >
                    <UserPageNav type={'nav-payment'} haveDropDown={"nav-info"} />
                </Col>
                <Col span={1}></Col>
                <Col span={18}>
                    <div className='payment-content'>
                        <div>
                            <div>
                                <p>Thông tin ngân hàng</p>
                                <p>Những phương thức để thanh toán!</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '26px' }}>+</p> Thêm Phương Thức Thanh Toán
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Ứng dụng thanh toán</p>
                                {
                                    (fakePayment.momo === '' && fakePayment.zalopay === '') ? (
                                        <div>
                                            <p>Bạn chưa thêm ứng dụng thanh toán!</p>
                                        </div>
                                    ) : (
                                        <div>vv</div>
                                    )
                                }
                            </div>
                            <div>
                                <p>Tài khoản ngân hàng của tôi</p>
                                {
                                    fakePayment.bank.length === 0 ? (
                                        <div>
                                            <p>Bạn chưa có tài khoản ngân hàng!</p>
                                        </div>
                                    ) : (
                                        <div>vv</div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
    )
}