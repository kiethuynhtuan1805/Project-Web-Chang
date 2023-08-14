import './ListProduct.scss';
import Product from '../Product/Product';
import { fakeListProduct } from 'data';
import { Button } from 'antd';

export default function ListProduct(props) {
    return (
        <div className='ListProduct'>
            <div className='ListProduct-wrap'>
                {
                    fakeListProduct.map((data, id) => {
                        return (
                            <div key={`Product-${id}`}>
                                <Product dataProduct={data} />
                            </div>
                        )
                    })
                }
            </div>
            <Button type="primary" className='btn-more'>Xem thêm</Button>
        </div>
    )
}