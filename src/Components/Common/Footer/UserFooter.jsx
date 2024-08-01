import './UserFooter.scss';
import { Col, Row, Image } from "antd";

export default function UserFooter() {
    return (
        <div className="UserFooter">
            <div className="container-wrapper">
                <Row>
                    <Col span={9} className="footer-left">
                        {/* <div className='hot-line'>
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
                        </div> */}
                        <div>VỀ CHÚNG TÔI</div>
                        <br />
                        <div>
                            HỆ THỐNG CỬA HÀNG
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
                                <Image
                                    width={'100%'}
                                    height={'180px'}
                                    preview={false}
                                    src={''}
                                    fallback={require('../../../assets/images/signature.jpg')}
                                />
                            </div>
                            <div className="note">
                                Cảm ơn vì đã quan tâm đến sản phẩm của chúng tôi!
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};