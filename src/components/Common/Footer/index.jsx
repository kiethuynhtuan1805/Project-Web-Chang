import './UserFooter.scss';
import { Col, Row, Image } from "antd";

export default function UserFooter() {
    return (
        <div className="UserFooter">
            <Row>
                <Col span={8} className="footer-left">
                    <div>
                        HỆ THỐNG CỬA HÀNG
                    </div>
                    <br />
                    <div>
                        HƯỚNG DẪN MUA HÀNG
                    </div>
                    <br />
                    <div>CHĂM SÓC KHÁCH HÀNG</div>
                    <br />
                    <div>
                        CHÍNH SÁCH THANH TOÁN - GIAO HÀNG - ĐỔI TRẢ
                    </div>
                </Col>
                <Col span={8} className='footer-middle'>
                    <img src={require('assets/images/logo1.jpg')} alt="" />
                </Col>
                <Col span={8} className='footer-right'>
                    <div className='footer-right-wrapper'>
                        <div className='signature'>
                            <Image
                                width={'100%'}
                                height={'180px'}
                                preview={false}
                                src={''}
                                fallback={require('assets/images/signature.jpg')}
                            />
                        </div>
                        <div className="note">
                            Cảm ơn vì đã quan tâm đến sản phẩm của chúng tôi!
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};