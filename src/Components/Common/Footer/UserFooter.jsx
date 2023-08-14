import { Icon } from '@iconify/react';
import './UserFooter.scss';
import { Col, Row } from "antd";

export default function UserFooter() {
    return (
        <div className="UserFooter">
            <div className="container">
                <Row>
                    <Col span={10} className="footer-left">
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
                    <Col span={10} className='footer-middle'>
                        SÓC TRĂNG (9h00 - 22h)
                        <ul>
                            <li>
                                1
                            </li>
                            <li>
                                2
                            </li>
                            <li>
                                3
                            </li>
                            <li>
                                4
                            </li>
                            <li>
                                5
                            </li>
                        </ul>
                    </Col>
                    <Col span={4} className='footer-right'>
                        <div>
                            Hãy kết nối với chúng mình
                        </div>
                        <br />
                        <div className='contact'>
                            <Icon icon="devicon:facebook" width="36" height="36" style={{ marginRight: '10px' }} />
                            <Icon icon="skill-icons:instagram" width="36" height="36" style={{ marginRight: '10px' }} />
                            <Icon icon="logos:tiktok-icon" width="36" height="36" />
                        </div>
                        <br />
                        <div className='logo'></div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};