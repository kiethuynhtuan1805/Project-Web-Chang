import './Blog.scss';
import { useState } from 'react';
import { Trace } from 'Components';
import { Tag, Button, Card, Row, Col, Menu } from 'antd';
import { Icon } from '@iconify/react';
import { fakeBlog } from 'data';
import { useNavigate } from 'react-router-dom';

export default function Blog({ data, trace, defaultItem }) {
    const navigate = useNavigate();

    const handleNav = (data, item) => {
        return navigate(item.find(element => element.key === data.key).url);
    }

    const formattedDate = (value) => {
        return `${value.getDate().toString().padStart(2, '0')}/${(value.getMonth() + 1).toString().padStart(2, '0')}/${value.getFullYear()}`
    };

    return (
        <div className='Blog container'>
            <div className="container-wrapper">
                <Trace traceData={trace} />
                <Row>
                    <Col span={6}>
                        <div className='list-select'>
                            {
                                fakeBlog.map((item, index) => {
                                    return (
                                        <Card
                                            size="middle"
                                            title={item.title}
                                            extra={
                                                <Button type="link" style={{ display: 'flex', alignItems: 'center', padding: 0 }} onClick={() => {
                                                    document.getElementById(item.type).classList.toggle('hide');
                                                }}>
                                                    <Icon icon="ic:baseline-minus" width={20} height={20} />
                                                </Button>
                                            }
                                            bordered={false}
                                            key={'blog-list-' + item + '-' + index}
                                        >
                                            <Menu
                                                onClick={(data) => {
                                                    return handleNav(data, item.data)
                                                }}
                                                defaultSelectedKeys={[defaultItem]}
                                                mode="inline"
                                                items={item.data}
                                                id={item.type}
                                            />
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className='content-wrapper'>
                            <p className="title">{data.title}</p>
                            <div className='author-wrapper'>
                                <div>
                                    <Tag color={data.tag === 0 ? "red" : data.tag === 1 ? "green" : "blue"} >
                                        {
                                            data.tag === 0 ? "Chính sách" : data.tag === 1 ? "Chăm sóc khách hàng" : "Tin tức"
                                        }
                                    </Tag>
                                    <p>Đăng bởi <b>CHANG HOUSE</b></p>
                                </div>
                                <div>
                                    <Icon icon="carbon:view" width={22} height={22} />
                                    <p>{data.viewed} lượt xem</p>
                                </div>
                            </div>
                            <div className='date'>
                                <p>Đăng ngày: {formattedDate(data.createdAt)}</p>
                                <p>Cập nhật mới nhất ngày: {formattedDate(data.updatedAt)}</p>
                            </div>
                            <img src={data.image} alt={"Hình ảnh chính sách thanh toán"} style={{ width: '100%' }} />
                            <div className='content'>
                                {
                                    data.content.map((item, index) => {
                                        return (
                                            <div key={'section-' + item + '-' + index} className='section'>
                                                {
                                                    item.section !== '' && (
                                                        <p className="title">{item.section}</p>
                                                    )
                                                }
                                                {
                                                    item.subsection.map((itemSub, indexSub) => {
                                                        return (
                                                            <div key={'sub-section-' + itemSub + '-' + indexSub} className='sub-section'>
                                                                <p className='sub-title'>{itemSub.title}</p>
                                                                {
                                                                    itemSub.content.split('\n').map((contentSub, indexContentSub) => {
                                                                        if (contentSub[0] === '&') {
                                                                            return (
                                                                                <div key={'sub-section-content-' + contentSub + '-' + indexContentSub} className='normal-content'>
                                                                                    <p dangerouslySetInnerHTML={{ __html: `${contentSub.split(':')[0].split('&')[1]}:` }}></p>
                                                                                    <ul>
                                                                                        {contentSub.split(':').slice(1).map((listItem, indexListItem) => {
                                                                                            return <li key={'list-item-' + listItem + '-' + indexListItem}>
                                                                                                <p dangerouslySetInnerHTML={{ __html: `${listItem}` }}></p>
                                                                                            </li>
                                                                                        })}
                                                                                    </ul>
                                                                                </div>
                                                                            )
                                                                        } else {
                                                                            return (
                                                                                <div key={'sub-section-content-' + contentSub + '-' + indexContentSub} className='normal-content'>
                                                                                    <p dangerouslySetInnerHTML={{ __html: `${contentSub}` }}></p>
                                                                                </div>
                                                                            )
                                                                        }
                                                                    })
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}