import { fakeUser } from 'data'
import AvatarUpload from '../AvatarUpload/AvatarUpload'
import './UserPageNav.scss'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserPageNav({ type }) {
    // useNavigate
    const navigate = useNavigate();

    useEffect(() => {
        const smoothElement = document.getElementById('smooth-element');
        if (type === 'nav-info') {
            setTimeout(() => {
                smoothElement.classList.add('dropdown-open');
            }, 100);
        };
        document.getElementById(type).classList.add('selected');
        return () => {
        };
    }, [type]);
    return (
        <div className='UserPageNav'>
            <div className='content'>
                <AvatarUpload />
                <p>
                    {fakeUser.name}
                </p>
            </div>
            <div className='navigation'>
                <div className='navigation-wrapper'>
                    <div onClick={() => {
                        return navigate('/user');
                    }} className='nav-info-wrapper'>
                        <p id={type === 'nav-info' ? '' : 'nav-info'} className='nav-target'>Tài khoản của tôi</p>
                        <div id='smooth-element'>
                            <div onClick={() => {
                                return navigate('/user');
                            }} id='nav-info' className='nav-target'>Hồ sơ cá nhân</div>
                            <div onClick={() => {
                                return navigate('/user/payment');
                            }} id='nav-payment' className='nav-target'>Ngân hàng</div>
                            <div onClick={() => {
                                return navigate('/user/password');
                            }} id='nav-password' className='nav-target'>Đổi mật khẩu</div>
                            <div onClick={() => {
                                return navigate('/user/setting/notification');
                            }} id='nav-notification' className='nav-target'>Cài đặt thông báo</div>
                            <div onClick={() => {
                                return navigate('/user/setting/privacy');
                            }} id='nav-privacy' className='nav-target'>Thiết lập riêng tư</div>
                        </div>
                    </div>
                    <div onClick={() => {
                        return navigate('/user/purchase');
                    }} id='nav-purchase' className='nav-target'>
                        Lịch sử đơn hàng
                    </div>
                    <div onClick={() => {
                        return navigate('/user/favorite');
                    }} id='nav-favorite' className='nav-target'>
                        Sản phẩm yêu thích
                    </div>
                    <div onClick={() => {
                        return navigate('/user/change-password');
                    }} id='nav-password' className='nav-target'>
                        Đổi mật khẩu
                    </div>
                    <div onClick={() => {
                        return navigate('/home');
                    }} id='nav-log-out' className='nav-target'>
                        Đăng xuất
                    </div>
                </div>
            </div>
        </div>
    )
}