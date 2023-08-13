import './UserHeader.scss';
import { Layout, Space, Col, Row } from 'antd';
import SearchBar from 'Components/Common/SearchBar/SearchBar';
import { Icon } from '@iconify/react';

const { Header, Footer, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    height: 200,
    paddingInline: 0,
    backgroundColor: '#ffffff',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    backgroundColor: '#ffffff',
};
const footerStyle = {
    textAlign: 'center',
    backgroundColor: '#ffffff',
};

function UserHeader(props) {
    return (
        <div className="UserHeader">
            <Space
                direction="vertical"
                style={{
                    width: '100%',
                }}
                size={[0, 48]}
            >
                <Layout>
                    <Header style={headerStyle}>
                        <div className='header-top'>
                            <div className='container'>
                                <a href="#">HỆ THỐNG CỬA HÀNG</a>
                                <a href="#">VỀ CHANG</a>
                                <a href="#">TUYỂN DỤNG</a>
                            </div>
                        </div>
                        <Row align="middle" className='header-content container'>
                            <Col span={5} className='logo'>
                                img
                            </Col>
                            <Col span={13} style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <SearchBar />
                            </Col>
                            <Col span={6}>
                                <Row align="middle" className='auth-user'>
                                    <Col span={8}>
                                        Đăng nhập
                                    </Col>
                                    <Col span={8}>
                                        Đăng ký
                                    </Col>
                                    <Col span={8}>

                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <div className='navigation'>
                            {/* <Icon icon="wpf:shopping-cart" /> */}
                        </div>
                    </Header>
                    <Content style={contentStyle}>Content</Content>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>
            </Space>
        </div>
    )
}

export default UserHeader;