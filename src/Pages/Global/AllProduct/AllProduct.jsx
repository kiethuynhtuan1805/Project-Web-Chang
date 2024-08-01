import './AllProduct.scss'
import { Trace } from 'Components';
import { fakeListProduct } from 'data';
import { ListProduct } from 'Components';
import { Button, Card, Col, Menu, Pagination, Row, Select, Slider } from 'antd';
import { useState } from 'react';
import { Icon } from '@iconify/react';

function getItem(label, key, children) {
    return {
        key,
        children,
        label,
    };
}
const items = [
    getItem('Navigation One', 'sub1', [
        getItem('Item 1', 'g1', [getItem('Option 1', '1'), getItem('Option 2', '2')]),
        getItem('Item 2', 'g2', [getItem('Option 3', '3'), getItem('Option 4', '4')]),
    ]),
    getItem('Navigation Two', 'sub2', [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Navigation Three', 'sub4'),
];

const formatter = (value) => `${`${value.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`}`;

export default function AllProduct(props) {
    const [inputValue, setInputValue] = useState(0);
    const [nav, setNav] = useState(true);

    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };

    const hide = () => {
        setNav(!nav);
        return;
    }

    const onChange = (newValue) => {
        setInputValue(newValue);
    };

    const traceData = {
        data: ["Trang chủ", ...fakeListProduct.trace.split('\n')],
        route: ['/home', ...fakeListProduct.type.split('\n')]
    };

    return (
        <div className='AllProduct container'>
            <div className='container-wrapper'>
                <Trace traceData={traceData} />
                <div>
                    <Row>
                        <Col span={6}>
                            <div className='list-select'>
                                <Card
                                    size="middle"
                                    title="Danh mục sản phẩm"
                                    extra={
                                        <Button type="link" style={{ display: 'flex', alignItems: 'center', padding: 0 }} onClick={hide}>
                                            {
                                                nav === true && <Icon icon="ic:baseline-minus" width={20} height={20} />
                                            }
                                            {
                                                nav === false && <Icon icon="ic:baseline-plus" width={20} height={20} />
                                            }
                                        </Button>
                                    }
                                    bordered={false}
                                >
                                    {
                                        nav === true && (
                                            <Menu
                                                // onClick={onClick}
                                                defaultSelectedKeys={['1']}
                                                mode="inline"
                                                items={items}
                                            />
                                        )
                                    }
                                </Card>
                                <Card
                                    size="middle"
                                    title="GIÁ"
                                    bordered={false}
                                >
                                    <p>Từ {`${inputValue.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`} - 1.000.000 đ</p>
                                    <Slider
                                        min={0}
                                        max={1000000}
                                        step={10000}
                                        tooltip={{
                                            formatter,
                                        }}
                                        onChange={onChange}
                                        value={typeof inputValue === 'number' ? inputValue : 0}
                                    />
                                </Card>
                            </div>
                        </Col>
                        <Col span={18}>
                            <div className='content'>
                                <div>
                                    <p>
                                        {props.title ? props.title : traceData.data[traceData.data.length - 1]}
                                    </p>
                                    <Select
                                        defaultValue="Mới nhất"
                                        style={{
                                            width: 160,
                                        }}
                                        // onChange={ }
                                        options={[
                                            {
                                                value: 'latest',
                                                label: 'Mới nhất',
                                            },
                                            {
                                                value: 'price-up',
                                                label: 'Giá thấp nhất',
                                            },
                                            {
                                                value: 'price-down',
                                                label: 'Giá cao nhất',
                                            },
                                        ]}
                                    />
                                </div>
                                <div>
                                    <ListProduct data={fakeListProduct.data} btn={false} type='' />
                                    <Pagination
                                        showSizeChanger={false}
                                        onShowSizeChange={onShowSizeChange}
                                        defaultCurrent={1}
                                        total={500}
                                        className='pagination'
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}