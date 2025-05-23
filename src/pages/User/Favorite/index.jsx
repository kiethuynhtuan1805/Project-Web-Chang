import { Trace } from 'components';
import './Favorite.scss'
import { Col, Pagination, Row } from 'antd';
import { UserPageNav } from 'components';
// import { useState } from 'react';
import { Icon } from '@iconify/react';
import { ListProduct } from 'components';
import { fakeListProduct } from 'data';

export default function Favorite() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Sản phẩm yêu thích"],
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
        <div className='Favorite'>
            <Trace traceData={traceData} />
            <Row style={{ marginBottom: '100px' }}>
                <Col span={5}>
                    <UserPageNav type={'nav-favorite'} haveDropDown={""} />
                </Col>
                <Col span={1}></Col>
                <Col span={18}>
                    <div className='favorite-content'>
                        <div>
                            <p>Sản phẩm yêu thích</p>
                            <p style={{ display: 'flex' }}>Hãy <Icon icon="mdi:heart" color="pink" width={24} height={24} style={{ margin: '0 5px' }} /> sản phẩm bạn yêu thích để xem thuận tiện hơn!</p>
                        </div>
                        <div>
                            <ListProduct data={fakeListProduct.data} btn={false} />
                            <Pagination
                                showSizeChanger={false}
                                // onShowSizeChange={onShowSizeChange}
                                defaultCurrent={1}
                                total={500}
                                className='pagination'
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
    )
}