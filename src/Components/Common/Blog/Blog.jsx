import './Blog.scss';
import { useState } from 'react';
import { Trace } from 'Components';
import { Tag, Button, Card, Row, Col, Menu } from 'antd';
import { Icon } from '@iconify/react';
import { faketest } from 'data';

export default function Blog({ data, trace, items1, items2, defaultItem }) {
    const [nav1, setNav1] = useState(true);
    let parser = new DOMParser();

    const hide1 = () => {
        setNav1(!nav1);
        return;
    }

    const [nav2, setNav2] = useState(true);

    const hide2 = () => {
        setNav2(!nav2);
        return;
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
                            <Card
                                size="middle"
                                title="Chính sách"
                                extra={
                                    <Button type="link" style={{ display: 'flex', alignItems: 'center', padding: 0 }} onClick={hide1}>
                                        {
                                            nav1 === true && <Icon icon="ic:baseline-minus" width={20} height={20} />
                                        }
                                        {
                                            nav1 === false && <Icon icon="ic:baseline-plus" width={20} height={20} />
                                        }
                                    </Button>
                                }
                                bordered={false}
                            >
                                {
                                    nav1 === true && (
                                        <Menu
                                            // onClick={onClick}
                                            defaultSelectedKeys={[defaultItem]}
                                            mode="inline"
                                            items={items1}
                                        />
                                    )
                                }
                            </Card>
                            <Card
                                size="middle"
                                title="Chăm sóc khách hàng"
                                extra={
                                    <Button type="link" style={{ display: 'flex', alignItems: 'center', padding: 0 }} onClick={hide2}>
                                        {
                                            nav2 === true && <Icon icon="ic:baseline-minus" width={20} height={20} />
                                        }
                                        {
                                            nav2 === false && <Icon icon="ic:baseline-plus" width={20} height={20} />
                                        }
                                    </Button>
                                }
                                bordered={false}
                            >
                                {
                                    nav2 === true && (
                                        <Menu
                                            // onClick={onClick}
                                            defaultSelectedKeys={[defaultItem]}
                                            mode="inline"
                                            items={items2}
                                        />
                                    )
                                }
                            </Card>
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
                                <p>{data.viewed} lượt xem</p>
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