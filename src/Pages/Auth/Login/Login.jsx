import { Button, Col, Input, Row } from 'antd'
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
                    <Input placeholder="Nhập tên đăng nhập" />
                    <Input.Password placeholder="Mật khẩu" />
                </div>
                <div className='btn'>
                    <Button className='btn-log-in' size='large'>ĐĂNG NHẬP</Button>
                    <Button type="link" className='btn-forget-password'>Quên mật khẩu?</Button>
                    <div style={{ width: '80%', fontSize: '1.1rem', marginTop: '40px', marginBottom: '20px' }}>
                        ---------- Hoặc ----------
                    </div>
                    <Button className='btn-facebook' size='large'><Icon icon="logos:facebook" style={{ marginRight: '5px' }} />Đăng nhập với Facebook</Button>
                    <Button className='btn-google' size='large'><Icon icon="devicon:google" style={{ marginRight: '5px' }} />Đăng nhập với Google</Button>
                </div>
            </div>
        </div >
    )
}