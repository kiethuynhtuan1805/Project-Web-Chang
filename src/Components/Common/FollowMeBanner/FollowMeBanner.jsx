import { Col, Row } from 'antd';
import './FollowMeBanner.scss';

import { fakeBanner } from 'data';


export default function FollowMeBanner() {
    return (
        <div className="FollowMeBanner">
            <p>FOLLOW ME ON TIKTOK <a href="#">@kiet.ne</a></p>
            <Row>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}>
                    <div className='banner-wrapper' style={{ background: `url('${fakeBanner[0]}') center center/cover` }}></div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}>
                    <div className='banner-wrapper' style={{ background: `url('${fakeBanner[1]}') center center/cover` }}></div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}>
                    <div className='banner-wrapper' style={{ background: `url('${fakeBanner[2]}') center center/cover` }}></div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}>
                    <div className='banner-wrapper' style={{ background: `url('${fakeBanner[3]}') center center/cover` }}></div>
                </Col>
            </Row>
        </div>
    )
}