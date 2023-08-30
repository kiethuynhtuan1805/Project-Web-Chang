import './ListProduct.scss';
import Product from '../Product/Product';
import { Button, Col, Row } from 'antd';

export default function ListProduct({ data, btn, type }) {
    return (
        <div className='ListProduct'>
            <Row>
                {
                    data.map((item, id) => {
                        return (
                            <Col key={`Product-${item}-${id}`} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Product dataProduct={item} type={type ? type : ''} />
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
            {
                btn !== false && (
                    <Button className='btn-more'>Xem thêm</Button>
                )
            }
        </div>
    )
}