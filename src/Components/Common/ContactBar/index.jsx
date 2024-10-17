import './ContactBar.scss';
import { Icon } from '@iconify/react';

const ContactBar = () => (
    <div className="contact-bar">
        <div className='icon-group'>
            <a href="https://www.facebook.com"><Icon icon="uil:facebook-f" width={24} height={24} color='black' /></a>
            <a href="https://tiktok.com"><Icon icon="logos:tiktok-icon" width={22} height={22} color='black' /></a>
        </div>
        <p>Liên lạc với chúng tôi</p>
    </div>
);

export default ContactBar;