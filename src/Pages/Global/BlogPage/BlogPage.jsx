import { Col, Row, Tag, Select, Pagination } from 'antd';
import './BlogPage.scss'
import { Trace } from 'Components'
import { fakeBlogList, fakeKeywords } from 'data';
import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function BlogPage() {
    const traceData = {
        data: ["Trang chủ", "Tin tức"],
        route: ['/home']
    };

    const [current, setCurrent] = useState(1);

    const formattedDate = (value) => {
        return `${value.getDate().toString().padStart(2, '0')}/${(value.getMonth() + 1).toString().padStart(2, '0')}/${value.getFullYear()}`
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };

    const onChangePagination = (page) => {
        console.log(page);
        setCurrent(page);
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
                            <div className='content-tag'>
                                <div>
                                    <Tag color={fakeBlogList[0].type === 'cs' ? "red" : fakeBlogList[0].type === 'cskh' ? "green" : "blue"} >
                                        {
                                            fakeBlogList[0].type === 'cs' ? "Chính sách" : fakeBlogList[0].type === 'cskh' ? "Chăm sóc khách hàng" : "Tin tức"
                                        }
                                    </Tag>
                                    <p>Đăng bởi <b>CHANG HOUSE</b> - <span>{formattedDate(fakeBlogList[0].updated)}</span></p>
                                </div>
                                <div>
                                    <Icon icon="carbon:view" width={22} height={22} />
                                    <p>{fakeBlogList[0].viewed} lượt xem</p>
                                </div>
                            </div>
                            <div className='keywords-wrapper'>
                                <p className='title'>Từ khóa</p>
                                <div>
                                    {
                                        fakeKeywords.map((item, index) => {
                                            return (
                                                <p key={`keywords-${index}`}>
                                                    #{item.data}
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='category'>
                                <Select
                                    defaultValue="all"
                                    size='large'
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: 'all',
                                            label: 'Tất cả',
                                        },
                                        {
                                            value: 'policy',
                                            label: 'Chính sách',
                                        },
                                        {
                                            value: 'usercare',
                                            label: 'CSKH',
                                        },
                                        {
                                            value: 'blog',
                                            label: 'Tin tức',
                                        },
                                    ]}
                                />
                                <Select
                                    defaultValue="latest"
                                    onChange={handleChange}
                                    size='large'
                                    options={[
                                        {
                                            value: 'latest',
                                            label: 'Mới nhất',
                                        },
                                        {
                                            value: 'oldest',
                                            label: 'Cũ nhất',
                                        },
                                        {
                                            value: 'viewed',
                                            label: 'Xem nhiều',
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className='blog-sub'>
                            <p className="title">Các bài viết khác</p>
                            {
                                fakeBlogList.map((item, index) => {
                                    return (
                                        <div className='item'>
                                            <img src="#" alt="" />
                                            <div>
                                                <p className="content-title">{item.label}</p>
                                                <div className='content-tag'>
                                                    <div>
                                                        <Tag color={item.type === 'cs' ? "red" : item.type === 'cskh' ? "green" : "blue"} >
                                                            {
                                                                item.type === 'cs' ? "Chính sách" : item.type === 'cskh' ? "Chăm sóc khách hàng" : "Tin tức"
                                                            }
                                                        </Tag>
                                                        <p>Đăng bởi <b>CHANG HOUSE</b> - <span>{formattedDate(item.updated)}</span></p>
                                                    </div>
                                                    <p>
                                                        {item.viewed}
                                                    </p>
                                                </div>
                                                <p className='content-description'>
                                                    {
                                                        item.description
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="pagination">
                                <p>
                                    Tổng <span>14 bài viết</span>
                                </p>
                                <Pagination
                                    showSizeChanger
                                    onShowSizeChange={onShowSizeChange}
                                    onChange={onChangePagination}
                                    current={current}
                                    total={200}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col md={{ span: 8 }}>
                        <div className='most-viewed-list'>
                            <p className="title">Xem nhiều nhất</p>
                            <div className="item">
                                <img src="#" alt="" />
                                <div>
                                    <p className="content-title"></p>
                                    <p>Đăng bởi <b>CHANG HOUSE</b></p>
                                    <p>{formattedDate(fakeBlogList[0].updated)}</p>
                                    <p>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}