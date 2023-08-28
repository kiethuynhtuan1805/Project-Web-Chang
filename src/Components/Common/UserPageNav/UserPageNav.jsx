import { fakeUser } from 'data'
import AvatarUpload from '../AvatarUpload/AvatarUpload'
import './UserPageNav.scss'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserPageNav({ type }) {
    // useNavigate
    const navigate = useNavigate();

    useEffect(() => {
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
                <ul>
                    <li onClick={() => {
                        return navigate('/profile');
                    }} id='nav-info'>
                        Thông tin tài khoản
                    </li>
                    <li onClick={() => {
                        return navigate('/profile/change-password');
                    }} id='nav-password'>
                        Đổi mật khẩu
                    </li>
                    <li onClick={() => {
                        return navigate('/profile/history');
                    }} id='nav-history'>
                        Lịch sử đơn hàng
                    </li>
                    <li onClick={() => {
                        return navigate('/profile/favorite');
                    }} id='nav-favorite'>
                        Sản phẩm yêu thích
                    </li>
                    <li onClick={() => {
                        return navigate('/');
                    }} id='nav-log-out'>
                        Đăng xuất
                    </li>
                </ul>
            </div>
        </div>
    )
}