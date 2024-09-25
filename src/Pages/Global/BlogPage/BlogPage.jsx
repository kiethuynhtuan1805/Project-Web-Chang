import { Col, Row, Tag, Select, Pagination } from 'antd';
import './BlogPage.scss'
import { Trace } from 'Components'
import { fakeBlogList, fakeKeywords } from 'data';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export default function BlogPage() {
    // Navigation
    const navigate = useNavigate();

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

    const handleNav = (nav) => {
        return navigate(nav);
    };

    return (
        <div className='BlogPage container'>
            <Trace traceData={traceData} />
            <Row>
                <Col md={{ span: 16 }} style={{ textAlign: 'left' }}>
                    <div className='blog-main'>
                        <p className="title">
                            Khám phá ngay các tin tức mới nhất từ <span>CHANG HOUSE</span>
                        </p>
                        <div className='main-item' onClick={() => {
                            return handleNav(fakeBlogList[0].url);
                        }}>
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
                                    <div className='item' key={`blog-sub-${index}`} onClick={() => {
                                        return handleNav(item.url);
                                    }}>
                                        <img src={item.image} alt="" />
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
                                                <div>
                                                    <Icon icon="carbon:view" width={22} height={22} />
                                                    <p>{item.viewed} lượt xem</p>
                                                </div>
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
                        {
                            fakeBlogList.sort((a, b) => b.viewed - a.viewed).slice(0, 5).map((item, index) => {
                                return (
                                    <div className="item" key={`most-viewed-${index}`} onClick={() => {
                                        return handleNav(item.url);
                                    }}>
                                        <img src={item.image} alt="Ảnh bị lỗi!" />
                                        <div>
                                            <div>
                                                <p className="content-title">{item.label}</p>
                                                <p>Đăng bởi <span>CHANG HOUSE</span></p>
                                                <p>{formattedDate(fakeBlogList[0].updated)}</p>
                                            </div>
                                            <div>
                                                <Icon icon="carbon:view" width={22} height={22} />
                                                <p>{item.viewed} lượt xem</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}