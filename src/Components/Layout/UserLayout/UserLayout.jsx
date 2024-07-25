import { Layout, Space } from 'antd';
import './UserLayout.scss';
import UserHeader from 'Components/Common/Header/User/UserHeader';
import UserFooter from 'Components/Common/Footer/UserFooter';
import { Outlet } from 'react-router-dom';
import { Footer } from 'antd/es/layout/layout';

const { Content } = Layout;

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
};
const footerStyle = {
    textAlign: 'center',
    color: '#886060',
    fontWeight: 'bold',
    backgroundColor: '#ffffff',
    paddingLeft: 0,
    paddingRight: 0,
};

export default function UserLayout() {
    return (
        <div className='UserLayout'>
            <Space
                direction="vertical"
                style={{
                    width: '100%',
                }}
                size={[0, 48]}
            >
                <Layout>
                    <UserHeader />
                    <Content style={contentStyle}>
                        <Outlet />
                    </Content>
                    <Footer style={footerStyle}>
                        <UserFooter />
                    </Footer>
                    <div className='copy-right'>
                        Copyright © 2023 . All Rights Reserved
                    </div>
                </Layout>
            </Space>
        </div>
    )
}