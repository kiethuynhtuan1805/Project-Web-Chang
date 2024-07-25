import { useNavigate } from 'react-router-dom'
import './WelcomeProduct.scss'
import { Card, Button } from 'antd'

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
                            <Card
                                hoverable
                                style={{ width: 220 }}
                                cover={<div className="image-container"><img alt="example" src={item.url} /></div>}
                                className='card-product'
                                key={'Welcome-product-' + id}
                            >
                                <Meta title={item.name} description={item.description} />
                            </Card>
                        )
                    })
                }
            </div>
            <Button className='btn-more' onClick={handleNavHome}>Xem thêm</Button>
        </div>
    )
};

export default WelcomeProduct;