import { Trace } from 'components';
import './NotificationUpdate.scss'
import { Col, Row } from 'antd';
import { UserPageNav } from 'components';


export default function NotificationUpdate() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Cập nhật"],
        route: ['/home', "/user"]
    };

    return (
        <div className='NotificationUpdate'>
            <Trace traceData={traceData} />
            <Row style={{ marginBottom: '100px' }}>
                <Col span={5} >
                    <UserPageNav type={'nav-notification-new-update'} haveDropDown={"nav-notification"} />
                </Col>
                <Col span={1}></Col>
                <Col span={18}>
                    <div className='notification-content'>
                        <div>
                            <p>Cập nhật</p>
                            <p>Những cập nhật gần đây!</p>
                        </div>
                        <div className='content-wrapper'>
                            <img src={require('assets/images/notificationChang.png')} alt={require('assets/images/image-not-found.png')} />
                            <p>Chưa có cập nhật mới từ Chang House!</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
    )
}