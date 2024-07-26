import { Trace } from 'Components';
import './Payment.scss'
import { Col, Row } from 'antd';
import { UserPageNav } from 'Components';

export default function Payment() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Ngân hàng"],
        route: ['/home', "/user", "/user/payment"]
    };

    return (
        <div className='Payment container'>
            <div className='container-wrapper'>
                <Trace traceData={traceData} />
                <Row style={{ marginBottom: '100px' }}>
                    <Col span={5} >
                        <UserPageNav type={'nav-payment'} haveDropDown={"nav-info"} />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={18}>
                        <div className='payment-content'>
                            <div>
                                <p>Thông tin ngân hàng</p>
                                <p>Những phương thức để thanh toán!</p>
                            </div>
                            <div>
                                hh
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    )
}