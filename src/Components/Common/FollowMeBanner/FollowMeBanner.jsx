import { Col, Image, Row } from 'antd';
import './FollowMeBanner.scss';

import { fakeBanner } from 'data';


export default function FollowMeBanner() {
    return (
        <div className="FollowMeBanner">
            <p>FOLLOW ME ON TIKTOK <a href="#">@kiet.ne</a></p>
            <Row>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}>
                    <div className='banner-wrapper'>
                        <Image
                            width={'100%'}
                            height={'300px'}
                            preview={false}
                            src={fakeBanner[0]}
                            fallback={require('../../../assets/images/image-not-found.png')}
                        />
                    </div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}>
                    <div className='banner-wrapper'>
                        <Image
                            width={'100%'}
                            height={'300px'}
                            preview={false}
                            src={fakeBanner[1]}
                            fallback={require('../../../assets/images/image-not-found.png')}
                        />
                    </div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}>
                    <div className='banner-wrapper'>
                        <Image
                            width={'100%'}
                            height={'300px'}
                            preview={false}
                            src={fakeBanner[2]}
                            fallback={require('../../../assets/images/image-not-found.png')}
                        />
                    </div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}>
                    <div className='banner-wrapper'>
                        <Image
                            width={'100%'}
                            height={'300px'}
                            preview={false}
                            src={fakeBanner[3]}
                            fallback={require('../../../assets/images/image-not-found.png')}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}