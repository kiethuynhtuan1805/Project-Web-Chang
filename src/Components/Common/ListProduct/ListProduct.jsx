import './ListProduct.scss';
import Product from '../Product/Product';
import { Button, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function ListProduct({ data, btn }) {
    const navigate = useNavigate();

    const linkTo = () => {
        return navigate('/products/1');
    };

    return (
        <div className='ListProduct'>
            <Row>
                {
                    data.map((data, id) => {
                        return (
                            <Col key={`Product-${data}-${id}`} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }} onClick={linkTo}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Product dataProduct={data} />
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