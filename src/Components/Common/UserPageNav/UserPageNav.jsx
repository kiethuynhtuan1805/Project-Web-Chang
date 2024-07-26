import { fakeUser } from 'data'
import AvatarUpload from '../AvatarUpload/AvatarUpload'
import './UserPageNav.scss'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'

export default function UserPageNav({ type, haveDropDown }) {
    // useNavigate
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById(type).classList.add('selected');
        return () => {
        };
    }, [haveDropDown, type]);
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
                    <div className='nav-info-wrapper'>
                        <div id={type === 'nav-info' ? '' : 'nav-info'} className='nav-target have-icon' onClick={() => {
                            if (haveDropDown !== 'nav-info') {
                                return navigate('/user/profile');
                            }
                        }}>
                            <Icon icon="pajamas:user" width={16} height={16} />
                            <p>Tài khoản của tôi</p>
                        </div>
                        <div id='smooth-element-profile' className={`${haveDropDown === 'nav-info' ? 'dropdown-open' : ''}`}>
                            <div onClick={() => {
                                return navigate('/user/profile');
                            }} id='nav-info' className='nav-target'>Hồ sơ cá nhân</div>
                            <div onClick={() => {
                                return navigate('/user/payment');
                            }} id='nav-payment' className='nav-target'>Ngân hàng</div>
                            <div onClick={() => {
                                return navigate('/user/password');
                            }} id='nav-password' className='nav-target'>Đổi mật khẩu</div>
                            <div onClick={() => {
                                return navigate('/user/setting/notification');
                            }} id='nav-setting-notification' className='nav-target'>Cài đặt thông báo</div>
                            <div onClick={() => {
                                return navigate('/user/setting/privacy');
                            }} id='nav-setting-privacy' className='nav-target'>Thiết lập riêng tư</div>
                        </div>
                    </div>
                    <div onClick={() => {
                        return navigate('/user/purchase');
                    }} id='nav-purchase' className='nav-target have-icon'>
                        <Icon icon="lets-icons:order" width={18} height={18} />
                        <p>Lịch sử đơn hàng</p>
                    </div>
                    <div onClick={() => {
                        return navigate('/user/favorite');
                    }} id='nav-favorite' className='nav-target have-icon'>
                        <Icon icon="ph:heart-bold" width={18} height={18} />
                        <p>Sản phẩm yêu thích</p>
                    </div>
                    <div onClick={() => {
                        return navigate('/user/voucher-wallet');
                    }} id='nav-voucher' className='nav-target have-icon'>
                        <Icon icon="ci:ticket-voucher" width={18} height={18} />
                        <p>Kho voucher</p>
                    </div>
                    <div className='nav-notifications-wrapper'>
                        <div id={type === 'nav-notification-order' ? '' : 'nav-notification-order'} className='nav-target have-icon' onClick={() => {
                            if (haveDropDown !== 'nav-notification') {
                                return navigate('/user/notifications/order');
                            }
                        }}>
                            <Icon icon="mingcute:notification-line" width={18} height={18} />
                            <p>Thông báo</p>
                        </div>
                        <div id='smooth-element-notification' className={`${haveDropDown === 'nav-notification' ? 'dropdown-open' : ''}`}>
                            <div onClick={() => {
                                return navigate('/user/notifications/order');
                            }} id='nav-notification-order' className='nav-target'>Cập nhật đơn hàng</div>
                            <div onClick={() => {
                                return navigate('/user/notifications/promotion');
                            }} id='nav-notification-promotion' className='nav-target'>Khuyến mãi</div>
                            <div onClick={() => {
                                return navigate('/user/notifications/new-update');
                            }} id='nav-notification-new-update' className='nav-target'>Cập nhật Chang House</div>
                        </div>
                    </div>
                    <div onClick={() => {
                        return navigate('/home');
                    }} id='nav-log-out' className='nav-target'>
                        <p>Đăng xuất</p>
                    </div>
                </div>
            </div>
        </div>
    )
}