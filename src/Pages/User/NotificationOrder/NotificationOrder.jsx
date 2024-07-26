import { Trace } from 'Components';
import './NotificationOrder.scss'
import { Col, Row } from 'antd';
import { UserPageNav } from 'Components';

export default function NotificationOrder() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Cập nhật đơn hàng"],
        route: ['/home', "/user", "/user/notifacations/order"]
    };

    return (
        <div className='NotificationOrder container'>
            <div className='container-wrapper'>
                <Trace traceData={traceData} />
                <Row style={{ marginBottom: '100px' }}>
                    <Col span={5} >
                        <UserPageNav type={'nav-notification-order'} haveDropDown={"nav-notification"} />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={18}>
                        <div className='notification-content'>
                            <div>
                                <p>Cập nhật đơn hàng</p>
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