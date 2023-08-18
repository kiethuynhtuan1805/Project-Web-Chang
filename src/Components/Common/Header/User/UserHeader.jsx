import './UserHeader.scss';
import { Layout, Col, Row, Menu, Tooltip } from 'antd';
import SearchBar from 'Components/Common/SearchBar/SearchBar';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { fakeUser, fakeNav } from 'data';

const { Header } = Layout;

const headerStyle = {
    height: 180,
    alignItems: 'center',
    paddingInline: 0,
    backgroundColor: '#ffffff',
};

function UserHeader(props) {
    // useNavigate
    const navigate = useNavigate();

    // Function
    const logIn = () => {
        return navigate('/login');
    }

    const signUp = () => {
        return navigate('/signup');
    }

    const linkTo = (e) => {
        navigate(e.key);
    }

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
                        <Col span={5} className='logo'>
                            <div></div>
                        </Col>
                        <Col span={13} style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <SearchBar />
                        </Col>
                        <Col span={6}>
                            <Row align="middle" className='auth-user'>
                                <Col span={9} className='log-in' onClick={logIn}>
                                    Đăng nhập
                                    <div></div>
                                </Col>
                                <Col span={2} style={{ display: 'flex', alignItems: 'center' }}>
                                    <Icon icon="ci:line-l" width="24" height="24" />
                                </Col>
                                <Col span={9} className='sign-up' onClick={signUp}>
                                    Đăng ký
                                </Col>
                                <Col span={4} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    textAlign: 'right',
                                }}>
                                    <div className='icon-cart'>
                                        {
                                            fakeUser ? (
                                                <Tooltip placement='bottom' title={fakeUser === 0 ? ('Bạn chưa thêm sản phẩm nào vào giỏ hàng!') : ('Nhấn vào để thanh toán!')}>
                                                    <Icon icon="solar:bag-heart-bold" color="pink" width={48} height={48} />
                                                    <input defaultValue={fakeUser.cart} className='number-cart' disabled />
                                                </Tooltip>
                                            ) : (
                                                <Tooltip placement='bottom' title={'Bạn chưa thêm sản phẩm nào vào giỏ hàng!'}>
                                                    <Icon icon="solar:bag-heart-bold" color="pink" width={48} height={48} />
                                                    <input defaultValue={0} className='number-cart' disabled />
                                                </Tooltip>
                                            )
                                        }
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
            </Header>
        </div>
    )
}

export default UserHeader;