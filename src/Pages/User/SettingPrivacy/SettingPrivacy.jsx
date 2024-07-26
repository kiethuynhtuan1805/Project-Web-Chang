import { Trace } from 'Components';
import './SettingPrivacy.scss'
import { Col, Row } from 'antd';
import { UserPageNav } from 'Components';

export default function SettingPrivacy() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Thiết lập riêng tư"],
        route: ['/home', "/user", "/user/setting/privacy"]
    };

    return (
        <div className='SettingPrivacy container'>
            <div className='container-wrapper'>
                <Trace traceData={traceData} />
                <Row style={{ marginBottom: '100px' }}>
                    <Col span={5} >
                        <UserPageNav type={'nav-setting-privacy'} haveDropDown={"nav-info"} />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={18}>
                        <div className='setting-privacy-content'>
                            <div>
                                <p>Thiết lập riêng tư</p>
                                <p>Những thiết lập riêng tư dành cho bạn!</p>
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