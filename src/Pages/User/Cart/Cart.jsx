import './Cart.scss'
import { Trace } from 'Components';
import { Button, Image, Popconfirm, Space, Tag, Tooltip } from 'antd';
import { CustomSearchTable } from 'Components';
import { Icon } from '@iconify/react';
import { fakeUser } from 'data';

const columns = [
    {
        dataIndex: 'product',
        render: (product, record) => {
            return (
                <Image
                    width={'200px'}
                    height={'100%'}
                    preview={false}
                    src={''}
                    fallback={require('../../../assets/images/logo1.jpg')}
                />
            )
        },
        width: '15%',
    },
    {
        title: 'Sản phẩm',
        dataIndex: 'product',
        render: (product) => {
            return product.name
        },
        width: '20%',
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
        route: ['/']
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
        </div>
    )
}