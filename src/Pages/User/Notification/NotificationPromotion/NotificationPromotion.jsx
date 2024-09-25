import { Trace } from 'Components';
import './NotificationPromotion.scss'
import { Col, Row } from 'antd';
import { UserPageNav } from 'Components';

export default function NotificationPromotion() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Thông báo khuyến mãi"],
        route: ['/home', "/user"]
    };

    return (
        <div className='NotificationPromotion'>
            <Trace traceData={traceData} />
            <Row style={{ marginBottom: '100px' }}>
                <Col span={5} >
                    <UserPageNav type={'nav-notification-promotion'} haveDropDown={"nav-notification"} />
                </Col>
                <Col span={1}></Col>
                <Col span={18}>
                    <div className='notification-content'>
                        <div>
                            <p>Thông báo khuyến mãi</p>
                            <p>Những khuyến mãi khả dụng!</p>
                        </div>
                        <div className='content-wrapper'>
                            <img src={require('assets/images/notificationChang.png')} alt={require('assets/images/image-not-found.png')} />
                            <p>Chưa có Khuyến mãi từ Chang House!</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
    )
}