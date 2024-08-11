import './Blog.scss';
import { Trace } from 'Components';
import { Tag, Button, Card, Row, Col, Menu } from 'antd';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { fakeBlogList } from 'data';

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
                            <Card
                                size="middle"
                                title={'Chính sách'}
                                extra={
                                    <Button type="link" style={{ display: 'flex', alignItems: 'center', padding: 0 }} onClick={() => {
                                        document.getElementById('cs').classList.toggle('hide');
                                    }}>
                                        <Icon icon="ic:baseline-minus" width={20} height={20} />
                                    </Button>
                                }
                                bordered={false}
                            >
                                <Menu
                                    onClick={(data) => {
                                        return handleNav(data, fakeBlogList.filter(item => item.type === 'cs'))
                                    }}
                                    defaultSelectedKeys={[defaultItem]}
                                    mode="inline"
                                    items={fakeBlogList.filter(item => item.type === 'cs')}
                                    id={'cs'}
                                />
                            </Card>
                            <Card
                                size="middle"
                                title={'Chăm sóc khách hàng'}
                                extra={
                                    <Button type="link" style={{ display: 'flex', alignItems: 'center', padding: 0 }} onClick={() => {
                                        document.getElementById('cskh').classList.toggle('hide');
                                    }}>
                                        <Icon icon="ic:baseline-minus" width={20} height={20} />
                                    </Button>
                                }
                                bordered={false}
                            >
                                <Menu
                                    onClick={(data) => {
                                        return handleNav(data, fakeBlogList.filter(item => item.type === 'cskh'))
                                    }}
                                    defaultSelectedKeys={[defaultItem]}
                                    mode="inline"
                                    items={fakeBlogList.filter(item => item.type === 'cskh')}
                                    id={'cskh'}
                                />
                            </Card>
                            <Card
                                size="middle"
                                title={'Tin tức'}
                                extra={
                                    <Button type="link" style={{ display: 'flex', alignItems: 'center', padding: 0 }} onClick={() => {
                                        document.getElementById('tt').classList.toggle('hide');
                                    }}>
                                        <Icon icon="ic:baseline-minus" width={20} height={20} />
                                    </Button>
                                }
                                bordered={false}
                            >
                                <Menu
                                    onClick={(data) => {
                                        return handleNav(data, fakeBlogList.filter(item => item.type === 'tt'))
                                    }}
                                    defaultSelectedKeys={[defaultItem]}
                                    mode="inline"
                                    items={fakeBlogList.filter(item => item.type === 'tt')}
                                    id={'tt'}
                                />
                            </Card>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className='content-wrapper'>
                            <p className="title">{data.label}</p>
                            <div className='author-wrapper'>
                                <div>
                                    <Tag color={data.type === 'cs' ? "red" : data.type === 'cskh' ? "green" : "blue"} >
                                        {
                                            data.type === 'cs' ? "Chính sách" : data.type === 'cskh' ? "Chăm sóc khách hàng" : "Tin tức"
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
                                <p>Đăng ngày: {formattedDate(data.created)}</p>
                                <p>Cập nhật mới nhất ngày: {formattedDate(data.updated)}</p>
                            </div>
                            <div className='image'>
                                <img src={data.image} alt={"Hình ảnh chính sách thanh toán"} />
                            </div>
                            <div className='content'>
                                {
                                    data.content.map((item, index) => {
                                        return (
                                            <div key={'section-' + index} className='section'>
                                                {
                                                    item.section !== '' && (
                                                        <p className="title">{item.section}</p>
                                                    )
                                                }
                                                {
                                                    item.subsection.map((itemSub, indexSub) => {
                                                        return (
                                                            <div key={'sub-section-' + indexSub} className='sub-section'>
                                                                <p className='sub-title'>{itemSub.title}</p>
                                                                {
                                                                    itemSub.content.split('\n').map((contentSub, indexContentSub) => {
                                                                        if (contentSub[0] === '&' && contentSub[1] === 'l') {
                                                                            return (
                                                                                <div key={'sub-section-content-' + indexContentSub} className='normal-content'>
                                                                                    <p dangerouslySetInnerHTML={{ __html: `${contentSub.split(':')[0].split('&l')[1]}:` }}></p>
                                                                                    <ul>
                                                                                        {contentSub.split(':').slice(1).map((listItem, indexListItem) => {
                                                                                            return <li key={'list-item-' + indexListItem}>
                                                                                                <p dangerouslySetInnerHTML={{ __html: `${listItem}` }}></p>
                                                                                            </li>
                                                                                        })}
                                                                                    </ul>
                                                                                </div>
                                                                            )
                                                                        } else if (contentSub[0] === '&' && contentSub[1] === 'i') {
                                                                            const index = parseInt(contentSub.split('&i')[1], 10);
                                                                            return (
                                                                                <div className='sub-image' key={'sub-section-content-' + indexContentSub}>
                                                                                    <img src={itemSub.image[index]} alt="Ảnh bị lỗi!" />
                                                                                </div>
                                                                            )
                                                                        } else {
                                                                            return (
                                                                                <div key={'sub-section-content-' + indexContentSub} className='normal-content'>
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
                                <div className='keywords-wrapper'>
                                    <p className='title'>Từ khóa</p>
                                    <div>
                                        {
                                            data.keywords.map((item, index) => {
                                                return (
                                                    <p key={`keywords-${index}`}>
                                                        #{item}
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='relative-blog'>
                                    <p className='title'>Các bài viết liên quan</p>
                                    <ul>
                                        <li>
                                            <a href="/blog/policy/transport">Chính sách giao hàng</a>
                                        </li>
                                        <li>
                                            <a href="/blog/policy/transport">Chính sách giao hàng</a>
                                        </li>
                                        <li>
                                            <a href="/blog/policy/transport">Chính sách giao hàng</a>
                                        </li>
                                        <li>
                                            <a href="/blog/policy/transport">Chính sách giao hàng</a>
                                        </li>
                                        <li>
                                            <a href="/blog/policy/transport">Chính sách giao hàng</a>
                                        </li>
                                        <li>
                                            <a href="/blog/policy/transport">Chính sách giao hàng</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}