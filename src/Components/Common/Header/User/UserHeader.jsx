import './UserHeader.scss';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { fakeNav } from 'data';
import { CommonHeader, ContactBar, OnTopButton } from 'Components';

const { Header } = Layout;

const headerStyle = {
    height: 150,
    alignItems: 'center',
    paddingInline: 0,
    backgroundColor: '#ffffff',
};

function UserHeader(props) {
    // useNavigate
    const navigate = useNavigate();

    const linkTo = (e) => {
        navigate(e.key);
    }

    return (
        <div className='UserHeader container'>
            <Header style={headerStyle}>
                <ContactBar />
                <div className="container-wrapper">
                    <div className='header-top'>
                        <div className='container-wrapper'>
                            <div>
                                <a href="/">HỆ THỐNG CỬA HÀNG</a>
                                <a href="/blog/user/terms-of-use">CHĂM SÓC KHÁCH HÀNG</a>
                                <a href="/blog/policy">CHÍNH SÁCH THANH TOÁN - GIAO HÀNG - ĐỔI TRẢ</a>
                            </div>
                        </div>
                    </div>
                    <CommonHeader />
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
                </div>
                <OnTopButton />
            </Header >
        </div >
    )
}

export default UserHeader;