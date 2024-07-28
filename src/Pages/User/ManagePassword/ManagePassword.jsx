import { Trace } from 'Components';
import './ManagePassword.scss'
import { Button, Col, Form, Input, Row } from 'antd';
import { UserPageNav } from 'Components';
import { useState } from 'react';

export default function ManagePassword() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Đổi mật khẩu"],
        route: ['/home', "/user"]
    };

    const [formLayout] = useState('horizontal');
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
        <div className='ManagePassword container'>
            <div className='container-wrapper'>
                <Trace traceData={traceData} />
                <Row style={{ marginBottom: '100px' }}>
                    <Col span={5} >
                        <UserPageNav type={'nav-password'} haveDropDown={"nav-info"} />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={18}>
                        <div className='managepassword-content'>
                            <div>
                                <p>Thay đổi mật khẩu</p>
                                <p>Bạn nên cập nhập mật khẩu thường xuyên vì lý do bảo mật!</p>
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
                                                    if (!value || getFieldValue('new-password') === value) {
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