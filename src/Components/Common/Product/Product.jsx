import './Product.scss';

export default function Product({ dataProduct }) {
    return (
        <div className='Product'>
            <div style={{
                height: '70%',
                background: `url('${dataProduct.picSrc}') center center/cover`
            }}>
            </div>
            <div style={{ height: '30%' }}>
                <p>
                    {dataProduct.name}
                </p>
                <p>
                    {dataProduct.code}
                </p>
                <p>
                    {dataProduct.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                </p>
            </div>
        </div>
    )
}