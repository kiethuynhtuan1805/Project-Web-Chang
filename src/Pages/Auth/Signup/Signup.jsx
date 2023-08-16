import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd'
import './Signup.scss'
import { useNavigate } from 'react-router-dom';
import { Option } from 'antd/es/mentions';

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
        <div className="Signup container">
            <div className='container-wrapper'>
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
                    <Input placeholder="Điện thoại (*)" />
                    <Input placeholder="Email (*)" type='email' />
                    <Input placeholder="Nhập tên đăng nhập" />
                    <Input placeholder="Nhập tên đăng nhập" />
                    <Input placeholder="Nhập tên đăng nhập" />
                    <Input placeholder="Nhập tên đăng nhập" />
                    <Input.Password placeholder="Mật khẩu" />
                    <Input.Password placeholder="Mật khẩu" />
                </div>
            </div>
        </div >
    )
}