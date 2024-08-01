import { useNavigate } from 'react-router-dom'
import './WelcomeProduct.scss'
import { Card, Button, Col } from 'antd'

const { Meta } = Card

function WelcomeProduct({ data }) {
    const navigate = useNavigate();

    const handleNavHome = () => {
        navigate('/home');
    }

    return (
        <div className='WelcomeProduct'>
            <div>
                <p>Sản phẩm</p>
                <p>{data.type}</p>
            </div>
            <p style={{ fontStyle: 'italic' }}>{data.description}</p>
            <div className='hot-item'>
                {
                    data.listProduct.map((item, id) => {
                        return (
                            <Col key={`Product-${item}-${id}`} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 4 }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Card
                                        hoverable
                                        style={{ maxWidth: '280px', width: '100%' }}
                                        cover={<div className="image-container"><img alt="example" src={item.url} /></div>}
                                        className='card-product'
                                        key={'Welcome-product-' + id}
                                    >
                                        <Meta title={item.name} description={item.description} />
                                    </Card>
                                </div>
                            </Col>
                        )
                    })
                }
            </div>
            <Button className='btn-more' onClick={handleNavHome}>Xem thêm</Button>
        </div>
    )
};

export default WelcomeProduct;