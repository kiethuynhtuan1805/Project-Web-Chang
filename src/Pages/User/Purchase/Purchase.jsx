import { Trace } from 'Components';
import './Purchase.scss'
import { Button, Col, Popconfirm, Row, Space, Tag, Tooltip } from 'antd';
import { UserPageNav } from 'Components';
// import { useState } from 'react';
import { CustomSearchTable } from 'Components';
import { Icon } from '@iconify/react';
import { fakeUser } from 'data';

const columns = [
    {
        title: 'Mã đơn hàng',
        dataIndex: 'orderId',
        isSearched: true,
        width: '30%',
    },
    {
        title: 'Ngày đặt hàng',
        dataIndex: 'date',
        sorter: (a, b) => new Date(a.date) - new Date(b.date),
        isSearched: true,
        width: '25%',
    },
    {
        title: 'Số đơn',
        dataIndex: 'orderCount',
        sorter: (a, b) => a.orderCount - b.orderCount,
        width: '5%',
    },
    {
        title: 'Số tiền',
        dataIndex: 'orderPrice',
        sorter: (a, b) => parseInt(a.orderPrice.split('VND')[0]) - parseInt(b.orderPrice.split('VND')[0]),
        width: '15%',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        render: (text, record) => {
            let currentStatus = "Đang xử lý ...";
            let color = "gold";
            let icon = <Icon icon="mdi:clock-outline" width={16} height={16} style={{ marginRight: '5px' }} />;
            switch (record.status) {
                case 'Đang giao':
                    color = "#2db7f5";
                    currentStatus = "Đang giao";
                    icon = <Icon icon="fa-solid:shipping-fast" width={16} height={16} style={{ marginRight: '5px' }} />;
                    break;
                case 'Đã giao':
                    color = "#87d068";
                    currentStatus = "Đã giao";
                    icon = <Icon icon="icon-park-solid:check-one" width={16} height={16} style={{ marginRight: '5px' }} />;
                    break;
                case 'Đã hủy':
                    color = "#f50";
                    currentStatus = "Đã hủy";
                    icon = <Icon icon="ic:baseline-cancel" width={16} height={16} style={{ marginRight: '5px' }} />;
                    break;
                default:
                    break;
            }
            return (
                <Tag
                    color={color}
                    key={currentStatus}
                    icon={icon}
                    style={{
                        fontWeight: "bold", display: 'flex', alignItems: 'center',
                        height: '25px', justifyContent: 'center', margin: '0', width: '115px'
                    }}
                >
                    {currentStatus}
                </Tag>
            );
        },
        filters: [
            {
                text: 'Đang xử lý',
                value: 'Đang xử lý',
            },
            {
                text: 'Đang giao',
                value: 'Đang giao',
            },
            {
                text: 'Đã giao',
                value: 'Đã giao',
            },
            {
                text: 'Đã hủy',
                value: 'Đã hủy',
            }
        ],
        onFilter: (value, record) => record.status.indexOf(value) === 0,
        width: '15%',
    },
    {
        title: '',
        render: (_, record) => {
            return (
                <Space size="small">
                    <Tooltip title="Nhấn vào để xem chi tiết!">
                        <Button
                            type="link"
                            onClick={() => {
                                // return handleView(record.id);
                            }}
                            className="btn-action btn-view"
                            style={{ color: "white", backgroundColor: '#E56266' }}
                            icon={<Icon icon="bxs:detail" width={24} height={24} />}
                        ></Button>
                    </Tooltip>
                    <Popconfirm
                        title="Hủy đơn hàng!"
                        description="Bạn có chắc muốn hủy đặt hàng đơn hàng này?"
                        onConfirm={(e) => {
                            // return handleDelete(record);
                        }}
                        onCancel={() => { }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button
                            type="link"
                            className="btn-action btn-delete"
                            style={{ color: "white", backgroundColor: 'red' }}
                            icon={<Icon icon="carbon:rule-cancelled" width={24} height={24} />}
                        ></Button>
                    </Popconfirm>
                </Space>
            );
        },
        width: '10%',
    },
];

export default function Purchase() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Quản lý lịch sử đơn hàng"],
        route: ['/home', "/user"]
    };

    // const [formLayout, setFormLayout] = useState('horizontal');
    // const formItemLayout =
    //     formLayout === 'horizontal'
    //         ? {
    //             labelCol: {
    //                 span: 5,
    //             },
    //             wrapperCol: {
    //                 span: 19,
    //             },
    //         }
    //         : null;

    return (
        <div className='Purchase container'>
            <div className='container-wrapper'>
                <Trace traceData={traceData} />
                <Row style={{ marginBottom: '100px' }}>
                    <Col span={5}>
                        <UserPageNav type={'nav-purchase'} haveDropDown={""} />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={18}>
                        <div className='Purchase-content'>
                            <div>
                                <p>Lịch sử đơn hàng</p>
                                <p>Cảm ơn bạn vì đã tin tưởng và đặt hàng tại Chang House!</p>
                            </div>
                            <div>
                                <CustomSearchTable columns={columns} data={fakeUser.orderPurchase} type={'Purchase'} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    )
}