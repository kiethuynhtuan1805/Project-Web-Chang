import { Trace } from 'Components';
import './SettingNotification.scss'
import { Col, Row } from 'antd';
import { UserPageNav } from 'Components';

export default function SettingNotification() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Cài đặt thông báo"],
        route: ['/home', "/user", "/user/setting/notifacation"]
    };

    return (
        <div className='SettingNotification container'>
            <div className='container-wrapper'>
                <Trace traceData={traceData} />
                <Row style={{ marginBottom: '100px' }}>
                    <Col span={5} >
                        <UserPageNav type={'nav-setting-notification'} haveDropDown={"nav-info"} />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={18}>
                        <div className='setting-notification-content'>
                            <div>
                                <p>Cài đặt thông báo</p>
                                <p>Thiết lập một số thông báo của bạn!</p>
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