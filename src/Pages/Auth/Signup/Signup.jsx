import { Button, Col, DatePicker, Form, Input, Row, Select, Image } from 'antd'
import './Signup.scss'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    // useNavigate
    const navigate = useNavigate();

    // Function
    const logIn = () => {
        navigate('/login');
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="Signup">
            <div className='container-wrapper'>
                <div className='header'>
                    <img src={require('assets/images/logo1.jpg')} alt="" />
                    <p>Đăng ký với CHANG HOUSE</p>
                </div>
                <Row>
                    <Col span={12} className='cover-wrapper'>
                        <Image
                            width={'100%'}
                            height={'100%'}
                            preview={false}
                            src={'https://cellphones.com.vn/sforum/wp-content/uploads/2023/08/hinh-nen-meo-5.jpg'}
                            fallback={require('assets/images/logo1.jpg')}
                        />
                    </Col>
                    <Col span={12} className='signup-wrapper'>
                        <div className='select'>
                            <Row>
                                <Col span={12} className='select-log-in' onClick={logIn}>
                                    <p>ĐĂNG NHẬP</p>
                                </Col>
                                <Col span={12} className='select-sign-up selected'>
                                    <p>ĐĂNG KÝ</p>
                                </Col>
                            </Row>
                        </div>
                        <div className='signup-data'>
                            <Form
                                name="basic"
                                style={{
                                    width: '100%',
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    name="name"
                                    className='default-input'
                                >
                                    <Input placeholder="Họ và tên" />
                                </Form.Item>

                                <Form.Item
                                    name="date-picker"
                                    className='default-input'
                                >
                                    <DatePicker style={{ width: '80%', height: '40px' }} format={'DD/MM/YYYY'} placeholder='Ngày sinh (DD/MM/YYYY)' />
                                </Form.Item>

                                <Form.Item
                                    name="province"
                                    className='default-select'
                                >
                                    <Select placeholder="Tỉnh/thành phố">
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    name="ward"
                                    className='default-select'
                                >
                                    <Select placeholder="Vui lòng chọn tỉnh/thành phố trước!">
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    name="street"
                                    className='default-input'
                                >
                                    <Input placeholder="Địa chỉ chi tiết" />
                                </Form.Item>

                                <Form.Item
                                    name="email"
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
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập tên đăng nhập!',
                                        },
                                    ]}
                                    className='default-input'
                                >
                                    <Input placeholder="Tên đăng nhập (*)" />
                                </Form.Item>

                                <Form.Item
                                    name="password"
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
                                    dependencies={['password']}
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
                                        <Button className='btn-sign-up' size='large' htmlType='submit'>ĐĂNG KÝ</Button>
                                    </div>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    )
}