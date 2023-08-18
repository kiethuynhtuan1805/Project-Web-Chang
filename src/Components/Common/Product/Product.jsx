import { Image } from 'antd';
import './Product.scss';

export default function Product({ dataProduct }) {
    return (
        <div className='Product'>
            <div style={{ height: '70%' }}>
                <Image
                    width={'100%'}
                    height={'100%'}
                    preview={false}
                    src={dataProduct.picSrc[0].src}
                    fallback={require('../../../assets/images/image-not-found.png')}
                />
            </div>
            <div style={{ height: '30%' }}>
                <p>
                    {dataProduct.name}
                </p>
                <p>
                    {dataProduct.code}
                </p>
                <p>
                    {`${dataProduct.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`}
                </p>
            </div>
        </div>
    )
}