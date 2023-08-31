import './UserHeader.scss';
import { Layout, Col, Row, Menu, Tooltip, Image, Dropdown } from 'antd';
import SearchBar from 'Components/Common/SearchBar/SearchBar';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { fakeUser, fakeNav } from 'data';
import { useState } from 'react';

const { Header } = Layout;

const headerStyle = {
    height: 180,
    alignItems: 'center',
    paddingInline: 0,
    backgroundColor: '#ffffff',
};

function UserHeader(props) {
    // useState
    const [isLogIn, setLogIn] = useState(false);

    // useNavigate
    const navigate = useNavigate();

    // Function
    const logIn = () => {
        setLogIn(true);
        // return navigate('/login');
    }
    const signUp = () => {
        return navigate('/signup');
    }
    const logOut = () => {
        setLogIn(false);
    }
    const linkTo = (e) => {
        navigate(e.key);
    }

    // Variables

    return (
        <div className='UserHeader'>
            <Header style={headerStyle}>
                <div className='header-top'>
                    <div className='container-wrapper'>
                        <div>
                            <a href="#">HỆ THỐNG CỬA HÀNG</a>
                            <a href="#">VỀ CHANG</a>
                            <a href="#">TUYỂN DỤNG</a>
                        </div>
                    </div>
                </div>
                <div className='header-content'>
                    <Row align="middle" className='container-wrapper'>
                        <Col span={5} className='logo' onClick={() => {
                            return navigate('/');
                        }}>
                            <Image
                                width={'200px'}
                                height={'100%'}
                                preview={false}
                                src={''}
                                fallback={require('../../../../assets/images/logo1.jpg')}
                            />
                        </Col>
                        <Col span={13} style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <SearchBar />
                        </Col>
                        <Col span={6}>
                            <Row align="middle" className='auth-user'>
                                {
                                    isLogIn ? (
                                        <>
                                            <Col span={12} className='username' onClick={() => {
                                                return navigate('/profile')
                                            }}>
                                                {fakeUser.name}
                                            </Col>
                                            <Col span={2} style={{ display: 'flex', alignItems: 'center' }}>
                                                <Icon icon="ci:line-l" width="24" height="24" />
                                            </Col>
                                            <Col span={5} className='log-out' onClick={logOut}>
                                                Thoát
                                            </Col>
                                        </>
                                    ) : (
                                        <>
                                            <Col span={9} className='log-in' onClick={logIn}>
                                                Đăng nhập
                                                <div></div>
                                            </Col>
                                            <Col span={2} style={{ display: 'flex', alignItems: 'center' }}>
                                                <Icon icon="ci:line-l" width="24" height="24" />
                                            </Col>
                                            <Col span={8} className='sign-up' onClick={signUp}>
                                                Đăng ký
                                            </Col>
                                        </>
                                    )
                                }
                                <Col span={5} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    textAlign: 'right',
                                }}>
                                    <div className='icon-cart'>
                                        {
                                            fakeUser ? (
                                                fakeUser.cart.length === 0 ? (
                                                    <Tooltip placement='bottom' title={'Bạn chưa thêm sản phẩm nào vào giỏ hàng!'}>
                                                        <Icon icon="solar:bag-heart-bold" color="pink" width={48} height={48} />
                                                        <input defaultValue={0} className='number-cart' disabled />
                                                    </Tooltip>
                                                ) : (
                                                    <>
                                                        <Icon icon="solar:bag-heart-bold" color="pink" width={48} height={48} />
                                                        <input defaultValue={fakeUser.cart.length} className='number-cart' disabled />
                                                    </>
                                                )
                                            ) : (
                                                <Tooltip placement='bottom' title={'Bạn chưa thêm sản phẩm nào vào giỏ hàng!'}>
                                                    <Icon icon="solar:bag-heart-bold" color="pink" width={48} height={48} />
                                                    <input defaultValue={0} className='number-cart' disabled />
                                                </Tooltip>
                                            )
                                        }
                                        <div className='cart-dropdown'>
                                            <ul>
                                                <li className='cart-item'>
                                                    <Row>
                                                        <Col span={6}>
                                                            1
                                                        </Col>
                                                        <Col span={14}>
                                                            1
                                                        </Col>
                                                        <Col span={4}>
                                                            1
                                                        </Col>
                                                    </Row>
                                                </li>
                                                <li>

                                                </li>
                                            </ul>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className='navigation'>
                    <div className='container-wrapper'>
                        <Menu
                            theme="#FFB0BD"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            items={fakeNav}
                            className='menu-nav'
                            onClick={linkTo}
                        />
                    </div>
                </div>
            </Header >
        </div >
    )
}

export default UserHeader;