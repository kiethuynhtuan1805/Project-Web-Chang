import { Icon } from '@iconify/react';
import './ProductDetail.scss';
import { Trace } from 'Components';
import { Button, Col, Image, InputNumber, Row, Tooltip } from 'antd';
import { fakeProduct, fakeListProduct, fakeTrace } from 'data';
import { ListProduct } from 'Components';

export default function ProductDetail(props) {
    // Setting trace
    // let traceData = ["Home"];
    // const dataHref = window.location.href.split('/').splice(3,);
    // for (let i = 0; i <= dataHref.length - 2; i++) {
    //     if (dataHref[i] === 'products') {
    //         traceData.push(`${fakeProduct.name} ${fakeProduct.code}`);
    //         break;
    //     } else {
    //         traceData.push(dataHref[i]);
    //     };
    // }

    return (
        <div className='ProductDetail container'>
            <div className='container-wrapper'>
                <Trace traceData={fakeTrace} />
                <div className='product-detail-main'>
                    <Row>
                        <Col xl={{ span: 12 }}>
                            <div className='product-image'>
                                <Image
                                    src={fakeProduct.picSrc[0].src}
                                    width={'100%'}
                                    height={'100%'}
                                    fallback={require('../../../assets/images/image-not-found.png')}
                                />
                            </div>
                            <div className='product-image-sub'>
                                {
                                    fakeProduct.picSrc.splice(1,).map((data, id) => {
                                        return (
                                            <Image
                                                key={`sub-image-${data.src}-${id}`}
                                                src={data.src}
                                                width={'100%'}
                                                height={'100%'}
                                                fallback={require('../../../assets/images/image-not-found.png')}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </Col>
                        <Col xl={{ span: 12 }}>
                            <div className='product-detail-content'>
                                <p className='title'>{`${fakeProduct.name} ${fakeProduct.code}`}</p>
                                <p className='price'>{fakeProduct.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                <p className='inventory'>*Hiện tại cửa hàng còn <strong>{fakeProduct.inventory}</strong> sản phẩm này.</p>
                                <div className='quantity'>
                                    <p>Số lượng</p>
                                    <InputNumber min={1} max={fakeProduct.inventory} defaultValue={1} style={{ width: '200px', height: '40px', display: 'flex', alignItems: 'center', fontSize: '1rem' }} />
                                    <Button size={'large'} className='btn-cart'>
                                        Thêm vào giỏ hàng
                                    </Button>
                                </div>
                                <div className='description'>
                                    <p><Icon icon="twemoji:christmas-tree" width="24" height="24" /> Mô tả chi tiết:</p>
                                    <div className='description-wrapper'>
                                        <ul>
                                            {
                                                fakeProduct.description.split('\n').map((data, id) => {
                                                    return (
                                                        <li key={`description-${data}-${id}`}>
                                                            {data}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className='commit'>
                                    <p>
                                        <Icon icon="fxemoji:flowerplayingcards" width="24" height="24" style={{ marginRight: '5px' }} />
                                        <strong>Chang House</strong> cam kết sản phẩm hoàn toàn giống 100% so với hình ảnh. Nếu có bất cứ thắc mắc nào xin vui lồng liên hệ
                                        hotline: <a href="tel:+84964643875">0964643875</a> để được hỗ trợ!
                                    </p>
                                    <p>
                                        <Icon icon="fxemoji:smiletongue" width="24" height="24" style={{ marginRight: '5px' }} />
                                        Cảm ơn vì đã quan tâm!!
                                        <Icon icon="noto:red-heart" width="24" height="24" style={{ marginLeft: '5px' }} />
                                    </p>
                                </div>
                                <div className='share'>
                                    <p>
                                        Chia sẽ ngay:
                                    </p>
                                    <Row>
                                        <Col span={8} style={{ paddingRight: '5px' }}>
                                            <Tooltip title={'Share on Facebook'}>
                                                <Button type="text" className='btn-share'><Icon icon="devicon:facebook" className='icon' /> Share</Button>
                                            </Tooltip>
                                        </Col>
                                        <Col span={8} style={{ paddingRight: '5px' }}>
                                            <Tooltip title={'Share on Tiktok'}>
                                                <Button type="text" className='btn-share'><Icon icon="logos:tiktok-icon" className='icon' />Share</Button>
                                            </Tooltip>
                                        </Col>
                                        <Col span={8} style={{ paddingRight: '5px' }}>
                                            <Tooltip title={'Tweet on Twitter'}>
                                                <Button type="text" className='btn-share'><Icon icon="logos:twitter" className='icon' />Tweet</Button>
                                            </Tooltip>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='product-detail-sub'>
                    <p>
                        Một số sản phẩm liên quan
                    </p>
                    <div>
                        <ListProduct data={fakeListProduct} btn={false} />
                    </div>
                </div>
            </div>
        </div >
    )
}