import { Icon } from '@iconify/react';
import './ProductDetail.scss';
import { Trace } from 'Components';
import { Button, Col, Image, InputNumber, Row } from 'antd';
import { fakeProduct } from 'data';

export default function ProductDetail(props) {
    // Setting trace
    let traceData = ["Home"];
    const dataHref = window.location.href.split('/').splice(3,);
    for (let i = 0; i <= dataHref.length - 2; i++) {
        if (dataHref[i] === 'products') {
            traceData.push(`${fakeProduct.name} ${fakeProduct.code}`);
            break;
        } else {
            traceData.push(dataHref[i]);
        };
    }

    return (
        <div className='ProductDetail'>
            <div className='container'>
                <Trace traceData={traceData} />
                <div className='product-detail-main'>
                    <Row>
                        <Col xl={{ span: 12 }}>
                            <Image
                                src={fakeProduct.picSrc}
                                className='product-image'
                            />
                            <div className='product-image-sub'></div>
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
                                        Xin cam kết sản phẩm hoàn toàn giống 100% so với hình ảnh. Nếu có bất cứ thắc mắc nào xin vui lồng liên hệ
                                        hotline: <a href="tel:+84964643875">0964643875</a> để được hỗ trợ!
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div >
    )
}