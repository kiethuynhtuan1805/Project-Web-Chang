import { Button, Col, Input, Row } from 'antd'
import './Signup.scss'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    // useNavigate
    const navigate = useNavigate();

    // Function
    const logIn = () => {
        navigate('/login');
    }

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
                    <Input placeholder="Tên đăng nhập (*)" />
                    <Input placeholder="Họ và tên (*)" />
                    <Input placeholder="Nhập tên đăng nhập" />
                    <Input placeholder="Điện thoại (*)" />
                    <Input placeholder="Email (*)" type='email' />
                    <Input placeholder="Nhập tên đăng nhập" />
                    <Input placeholder="Nhập tên đăng nhập" />
                    <Input placeholder="Nhập tên đăng nhập" />
                    <Input placeholder="Nhập tên đăng nhập" />
                    <Input.Password placeholder="Mật khẩu" />
                    <Input.Password placeholder="Mật khẩu" />
                </div>
                <div className='btn'>
                    <Button className='btn-sign-up' size='large'>ĐĂNG KÝ</Button>
                </div>
            </div>
        </div >
    )
}