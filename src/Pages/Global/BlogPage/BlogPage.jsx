import { Col, Row, Tag } from 'antd';
import './BlogPage.scss'
import { Trace } from 'Components'
import { fakeBlogList } from 'data';

export default function BlogPage() {
    const traceData = {
        data: ["Trang chủ", "Tin tức"],
        route: ['/home']
    };

    const formattedDate = (value) => {
        return `${value.getDate().toString().padStart(2, '0')}/${(value.getMonth() + 1).toString().padStart(2, '0')}/${value.getFullYear()}`
    };

    return (
        <div className='BlogPage container'>
            <div className='container-wrapper'>
                <Trace traceData={traceData} />
                <Row>
                    <Col md={{ span: 16 }} style={{ textAlign: 'left' }}>
                        <div className='blog-main'>
                            <p className="title">
                                Khám phá ngay các tin tức mới nhất từ <span>CHANG HOUSE</span>
                            </p>
                            <img src={fakeBlogList[0].image} alt="Ảnh bị lỗi" />
                            <p className="content-title">{fakeBlogList[0].label}</p>
                            <p className="content-description">{fakeBlogList[0].description}</p>
                            <div>
                                <div>
                                    <Tag color={fakeBlogList[0].type === 'cs' ? "red" : fakeBlogList[0].type === 'cskh' ? "green" : "blue"} >
                                        {
                                            fakeBlogList[0].type === 'cs' ? "Chính sách" : fakeBlogList[0].type === 'cskh' ? "Chăm sóc khách hàng" : "Tin tức"
                                        }
                                    </Tag>
                                    <p>Đăng bởi <b>CHANG HOUSE</b> - <span>{formattedDate(fakeBlogList[0].updated)}</span></p>
                                </div>
                                <p>
                                    {fakeBlogList[0].viewed}
                                </p>
                            </div>
                            <div className='keywords-wrapper'>
                                <p className='title'>Từ khóa</p>
                                <div>
                                    {
                                        fakeBlogList[0].keywords.map((item, index) => {
                                            return (
                                                <p key={`keywords-${index}`}>
                                                    #{item}
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='blog-sub'>

                        </div>
                    </Col>
                    <Col md={{ span: 8 }}>
                        <p className="title">
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}