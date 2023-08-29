import { Image } from 'antd';
import './Product.scss';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Product({ dataProduct, type }) {
    // useNavigate
    const navigate = useNavigate();

    const linkTo = () => {
        return navigate('/products/1');
    };
    return (
        <div className='Product'>
            <div onClick={linkTo}>
                <Image
                    width={'100%'}
                    height={type === 'home' ? '250px' : '200px'}
                    preview={false}
                    src={dataProduct.picSrc[0].src}
                    fallback={require('../../../assets/images/image-not-found.png')}
                />
                <div className='product-action'>
                    <div className='favorite-action'></div>
                    <Icon icon="pepicons-pop:line-y" width={32} height={32} />
                    <div className='cart-action'></div>
                </div>
            </div>
            <div >
                <div onClick={linkTo}>
                    <p>
                        {dataProduct.name}
                    </p>
                    <p>
                        {dataProduct.code}
                    </p>
                </div>
                <p>
                    {`${dataProduct.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`}
                </p>
            </div>
        </div>
    )
}