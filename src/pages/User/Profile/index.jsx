import './Profile.scss'
import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import { UserPageNav, Trace } from 'components';
import TextArea from 'antd/es/input/TextArea';
import { useEffect, useState } from 'react';

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export default function Profile() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Hồ sơ"],
        route: ['/home', "/user"]
    };

    const [isLoading, setLoading] = useState(true);

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

    useEffect(() => {
        setLoading(false);
        return () => {

        };
    }, []);

    return (
        <div className='Profile'>
            {
                !isLoading && (
                    <>
                        <Trace traceData={traceData} />
                        <Row style={{ marginBottom: '100px' }}>
                            <Col span={5} >
                                <UserPageNav type={'nav-info'} haveDropDown={"nav-info"} />
                            </Col>
                            <Col span={1}></Col>
                            <Col span={18}>
                                <div className='profile-content'>
                                    <div>
                                        <p>Hồ sơ của tôi</p>
                                        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản!</p>
                                    </div>
                                    <div>
                                        <Form
                                            {...formItemLayout}
                                            layout={formLayout}
                                            // onFinish={}
                                            validateMessages={validateMessages}
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
                                                name="name"
                                                label="Họ và tên"
                                                className='default-input'
                                            >
                                                <Input placeholder="Họ và tên" />
                                            </Form.Item>

                                            <Form.Item
                                                name="date-picker"
                                                label="Ngày sinh"
                                                className='default-input'
                                            >
                                                <DatePicker style={{ width: '100%', height: '40px' }} format={'DD/MM/YYYY'} placeholder='Ngày sinh (DD/MM/YYYY)' />
                                            </Form.Item>

                                            <Form.Item
                                                name="email"
                                                label='Email'
                                                rules={[
                                                    {
                                                        type: 'email',
                                                        message: 'Email không chính xác!',
                                                    },
                                                    {
                                                        required: true,
                                                        message: 'Vui lòng nhập email!',
                                                    },
                                                ]}
                                                className='default-input'
                                            >
                                                <Input placeholder='Email (*)' />
                                            </Form.Item>

                                            <Form.Item
                                                name="province"
                                                label="Tỉnh/thành phố"
                                                className='default-select'
                                            >
                                                <Select placeholder="Tỉnh/thành phố">
                                                </Select>
                                            </Form.Item>

                                            <Form.Item
                                                name="ward"
                                                label="Quận/huyện"
                                                className='default-select'
                                            >
                                                <Select placeholder="Vui lòng chọn tỉnh/thành phố trước!">
                                                </Select>
                                            </Form.Item>

                                            <Form.Item
                                                name="street"
                                                label="Địa chỉ chi tiết"
                                                className='default-input'
                                            >
                                                <TextArea placeholder="Địa chỉ chi tiết" rows={4} />
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
                    </>
                )
            }
        </div >
    )
}