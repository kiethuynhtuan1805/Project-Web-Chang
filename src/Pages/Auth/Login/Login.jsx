import { Button, Col, Divider, Form, Input, Row } from 'antd'
import './Login.scss'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    // useNavigate
    const navigate = useNavigate();

    // Function
    const signUp = () => {
        navigate('/signup');
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="Login container">
            <div className='container-wrapper'>
                <div className='select'>
                    <Row>
                        <Col span={12} className='select-log-in selected'>
                            <p>ĐĂNG NHẬP</p>
                        </Col>
                        <Col span={12} className='select-sign-up' onClick={signUp}>
                            <p>ĐĂNG KÝ</p>
                        </Col>
                    </Row>
                </div>
                <div className='login-data'>
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
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tên đăng nhập!',
                                },
                            ]}
                            className='username'
                        >
                            <Input placeholder="Nhập tên đăng nhập" />
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
                            <Input.Password placeholder="Mật khẩu" />
                        </Form.Item>

                        <Form.Item>
                            <div className='btn'>
                                <Button className='btn-log-in' size='large' htmlType="submit">ĐĂNG NHẬP</Button>
                                <Button type="link" className='btn-forget-password'>Quên mật khẩu?</Button>
                                <Divider orientation="center" style={{ width: '80%', fontSize: '1.1rem', marginTop: '40px', marginBottom: '30px' }}>Hoặc</Divider>
                                <Button className='btn-facebook' size='large'><Icon icon="logos:facebook" style={{ marginRight: '5px' }} />Đăng nhập với Facebook</Button>
                                <Button className='btn-google' size='large'><Icon icon="devicon:google" style={{ marginRight: '5px' }} />Đăng nhập với Google</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div >
    )
}