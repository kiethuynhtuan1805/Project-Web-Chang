import './Cart.scss'
import { CartPayment } from 'Components';
import { Trace } from 'Components';
import { CustomSearchTable } from 'Components';
import { fakeUser } from 'data';

const columns = [
    {
        title: () => {
            return (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <input type="checkbox" style={{ width: '15px', height: '15px' }} />
                </div>
            )
        },
        dataIndex: 'product',
        render: (product, record) => {
            return (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <input type="checkbox" style={{ width: '15px', height: '15px' }} />
                </div>
            )
        },
        width: '5%',
    },
    {
        title: 'Sản phẩm',
        dataIndex: 'product',
        render: (product) => {
            return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={require('assets/images/souvenir.jpg')} alt={require('assets/images/image-not-found.png')} style={{ width: '100px', height: '100%' }} />
                    <p style={{ paddingLeft: '5px' }}>{product.name}</p>
                </div>
            )
        },
        width: '30%',
    },
    {
        title: 'Đơn giá',
        dataIndex: 'product',
        render: (product) => {
            return product.price
        },
        width: '20%',
    },
    {
        title: 'Số lượng',
        dataIndex: 'quantity',
        render: (quantity) => {
            return quantity
        },
        width: '20%',
    },
    {
        title: 'Tổng',
        dataIndex: 'product',
        render: (product, record) => {
            return record.product.price * record.quantity
        },
        width: '20%',
    },
    {
        dataIndex: 'product',
        render: (product) => {
            console.log(product);
        },
        width: '5%',
    },
];

export default function Cart() {
    const traceData = {
        data: ["Trang chủ", "Quản lý giỏ hàng"],
        route: ['/home']
    };
    console.log(fakeUser);

    return (
        <div className='Cart container'>
            <div className='container-wrapper'>
                <Trace traceData={traceData} />
                <div>
                    <CustomSearchTable columns={columns} data={fakeUser.cart.data} type={'Cart'} />
                </div>
            </div>
            <CartPayment />
        </div>
    )
}