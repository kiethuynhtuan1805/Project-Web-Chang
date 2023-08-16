import { Icon } from '@iconify/react';
import './UserFooter.scss';
import { Col, Row } from "antd";

export default function UserFooter() {
    return (
        <div className="UserFooter">
            <div className="container-wrapper">
                <Row>
                    <Col span={9} className="footer-left">
                        <div className='hot-line'>
                            <Icon icon="gg:phone" width="48" height="48" />
                            <div>
                                Hotline
                                <br />
                                <a href="tel:+84964643875">0964.643.875</a>
                            </div>
                        </div>
                        <br />
                        <div className='email'>
                            <Icon icon="foundation:mail" width="48" height="48" />
                            <div>
                                Email
                                <br />
                                <a href="mailto:kiet.huynhtuan1805@gmail.com">kiet.huynhtuan1805@gmail.com</a>
                            </div>
                        </div>
                        <br />
                        <div>
                            CHÍNH SÁCH BÁN HÀNG
                        </div>
                        <br />
                        <div>
                            HƯỚNG DẪN MUA HÀNG
                        </div>
                    </Col>
                    <Col span={6} className='footer-middle'>
                        <div className='logo'></div>
                    </Col>
                    <Col span={9} className='footer-right'>
                        <div className='footer-right-wrapper'>
                            <div className='signature'>

                            </div>
                            <div>
                                Hãy kết nối với chúng mình
                            </div>
                            <br />
                            <div className='contact'>
                                <Icon icon="devicon:facebook" width="36" height="36" style={{ marginRight: '10px' }} />
                                <Icon icon="skill-icons:instagram" width="36" height="36" style={{ marginRight: '10px' }} />
                                <Icon icon="logos:tiktok-icon" width="36" height="36" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};