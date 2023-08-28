import { Trace } from 'Components';
import './Favorite.scss'
import { Button, Col, Form, Input, Row } from 'antd';
import { UserPageNav } from 'Components';
import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Favorite() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Sản phẩm yêu thích"],
        route: ['/', "/profile"]
    };

    const [formLayout, setFormLayout] = useState('horizontal');
    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 5,
                },
                wrapperCol: {
                    span: 19,
                },
            }
            : null;


    return (
        <div className='Favorite container'>
            <div className='container-wrapper'>
                <Trace traceData={traceData} />
                <Row style={{ marginBottom: '100px' }}>
                    <Col span={6} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '10px', height: '360px' }}>
                        <UserPageNav type={'nav-favorite'} />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={17}>
                        <div className='favorite-content'>
                            <div>
                                <p>Sản phẩm yêu thích</p>
                                <p style={{ display: 'flex' }}>Hãy <Icon icon="mdi:heart" color="pink" width={24} height={24} style={{ margin: '0 5px' }} /> sản phẩm bạn yêu thích để xem thuận tiện hơn!</p>
                            </div>
                            <div>
                                <Form
                                    {...formItemLayout}
                                    layout={formLayout}
                                    // onFinish={}
                                    name="basic"
                                    style={{
                                        width: '100%',
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    // onFinish={onFinish}
                                    // onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        name="password"
                                        label="Mật khẩu cũ"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng nhập mật khẩu!',
                                            },
                                        ]}
                                        className='password'
                                    >
                                        <Input.Password placeholder="Mật khẩu (*)" />
                                    </Form.Item>

                                    <Form.Item
                                        name="new-password"
                                        label="Mật khẩu mới"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng nhập mật khẩu!',
                                            },
                                        ]}
                                        className='password'
                                    >
                                        <Input.Password placeholder="Mật khẩu (*)" />
                                    </Form.Item>

                                    <Form.Item
                                        name="confirm"
                                        label="Xác nhận mật khẩu"
                                        dependencies={['new-password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Vui lòng nhập lại mật khẩu!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('Mật khẩu không khớp!'));
                                                },
                                            }),
                                        ]}
                                        className='password'
                                    >
                                        <Input.Password placeholder={'Xác nhận mật khẩu (*)'} />
                                    </Form.Item>


                                    <Form.Item>
                                        <div className='btn'>
                                            <Button className='btn-update' size='large' htmlType='submit'>Cập nhật</Button>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    )
}