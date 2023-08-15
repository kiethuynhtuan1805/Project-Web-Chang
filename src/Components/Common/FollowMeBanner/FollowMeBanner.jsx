import { Col, Row } from 'antd';
import './FollowMeBanner.scss';


export default function FollowMeBanner() {
    return (
        <div className="FollowMeBanner">
            <Row>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}>
                    <div>1</div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}>
                    <div>2</div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}>
                    <div>3</div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}>
                    <div>4</div>
                </Col>
            </Row>
        </div>
    )
}