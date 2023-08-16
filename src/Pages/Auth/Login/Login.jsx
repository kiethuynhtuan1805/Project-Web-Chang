import { Button, Col, Input, Row } from 'antd'
import './Login.scss'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';

export default function Login(props) {
    const [type, setType] = useState(props.type);

    const changeType = (e) => {
        if (type === 'login' && e.target.innerHTML !== 'ĐĂNG NHẬP') {
            document.getElementsByClassName('select-log-in')[0].classList.remove('selected');
            document.getElementsByClassName('select-sign-up')[0].classList.add('selected');
            setType('signup');
        } else if (type === 'signup' && e.target.innerHTML !== 'ĐĂNG KÝ') {
            document.getElementsByClassName('select-sign-up')[0].classList.remove('selected');
            document.getElementsByClassName('select-log-in')[0].classList.add('selected');
            setType('login');
        }
    }

    useEffect(() => {
        if (type === 'login') {
            document.getElementsByClassName('select-log-in')[0].classList.add('selected');
        } else if (type === 'signup') {
            document.getElementsByClassName('select-sign-up')[0].classList.add('selected');
        }
        return () => {
        };
    }, []);

    return (
        <div className="Login container">
            <div className='container-wrapper'>
                <div className='select'>
                    <Row>
                        <Col span={12} className='select-log-in' onClick={(e) => {
                            return changeType(e);
                        }}>
                            <p>ĐĂNG NHẬP</p>
                        </Col>
                        <Col span={12} className='select-sign-up' onClick={(e) => {
                            return changeType(e);
                        }}>
                            <p>ĐĂNG KÝ</p>
                        </Col>
                    </Row>
                </div>
                <div className='login-data'>
                    {
                        type === 'login' ? (
                            <>
                                <Input placeholder="Nhập tên đăng nhập" />
                                <Input.Password placeholder="Mật khẩu" />
                            </>
                        ) : (
                            <>
                                <Input placeholder="Nhập tên đăng nhập" />
                                <Input placeholder="Nhập tên đăng nhập" />
                                <Input placeholder="Nhập tên đăng nhập" />
                                <Input placeholder="Nhập tên đăng nhập" />
                                <Input placeholder="Nhập tên đăng nhập" />
                                <Input placeholder="Nhập tên đăng nhập" />
                                <Input placeholder="Nhập tên đăng nhập" />
                                <Input placeholder="Nhập tên đăng nhập" />
                                <Input placeholder="Nhập tên đăng nhập" />
                                <Input.Password placeholder="Mật khẩu" />
                                <Input.Password placeholder="Mật khẩu" />
                            </>
                        )
                    }
                </div>
                <div className='btn'>
                    {
                        type === 'signup' ? (
                            <Button className='btn-sign-up' size='large'>ĐĂNG KÝ</Button>
                        ) : (
                            <>
                                <Button className='btn-log-in' size='large'>ĐĂNG NHẬP</Button>
                                <Button type="link" className='btn-forget-password'>Quên mật khẩu?</Button>
                                <div style={{ width: '80%', fontSize: '1.1rem', marginTop: '40px', marginBottom: '20px' }}>
                                    ---------- Hoặc ----------
                                </div>
                                <Button className='btn-facebook' size='large'><Icon icon="logos:facebook" style={{ marginRight: '5px' }} />Đăng nhập với Facebook</Button>
                                <Button className='btn-google' size='large'><Icon icon="devicon:google" style={{ marginRight: '5px' }} />Đăng nhập với Google</Button>
                            </>
                        )
                    }
                </div>
            </div>
        </div >
    )
}