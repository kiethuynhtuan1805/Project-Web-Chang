import { Trace } from 'Components';
import './NotificationPromotion.scss'
import { Col, Row } from 'antd';
import { UserPageNav } from 'Components';

export default function NotificationPromotion() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Thông báo"],
        route: ['/home', "/user", "/user/notifacations"]
    };

    return (
        <div className='NotificationPromotion container'>
            <div className='container-wrapper'>
                <Trace traceData={traceData} />
                <Row style={{ marginBottom: '100px' }}>
                    <Col span={5} >
                        <UserPageNav type={'nav-notification-promotion'} haveDropDown={"nav-notification"} />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={18}>
                        <div className='notification-content'>
                            <div>
                                <p>Thông báo</p>
                                <p>Một số thông báo gần đây về đơn hàng của bạn!</p>
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