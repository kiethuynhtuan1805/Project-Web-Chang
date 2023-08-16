import './UserHeader.scss';
import { Layout, Col, Row, Menu } from 'antd';
import SearchBar from 'Components/Common/SearchBar/SearchBar';
import { Icon } from '@iconify/react';

const { Header } = Layout;

const headerStyle = {
    height: 180,
    alignItems: 'center',
    paddingInline: 0,
    backgroundColor: '#ffffff',
};

function getItem(label, key, children) {
    return {
        key,
        children,
        label,
    };
}
const items = [
    getItem('TẤT CẢ', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', 'sub1', [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Option 4', 'sub2', [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Option 5', '9'),
    getItem('Option 6', '10'),
    getItem('Option 7', '11'),
    getItem('Option 8', '12'),
    getItem('Option 9', '13'),
    getItem('Option 10', '14'),
];

function UserHeader(props) {
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
                                <Col span={9} className='log-in'>
                                    Đăng nhập
                                    <div></div>
                                </Col>
                                <Col span={9} className='sign-up'>
                                    Đăng ký
                                </Col>
                                <Col span={6} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    textAlign: 'right',
                                }}>
                                    <div className='icon-cart'>
                                        <Icon icon="solar:cart-bold-duotone" color="pink" width={48} height={48} />
                                        <input defaultValue={0} className='number-cart' />
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
                            items={items}
                            className='menu-nav'
                        />
                    </div>
                </div>
            </Header>
        </div>
    )
}

export default UserHeader;