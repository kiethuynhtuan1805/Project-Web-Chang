import { Blog } from 'Components'
import './SecurityPolicy.scss'
import { fakeBlogSecurityPolicy } from 'data'

function getItem(label, key, children) {
    return {
        key,
        children,
        label,
    };
};

const items1 = [
    getItem('Chính sách thanh toán', '1'),
    getItem('Chính sách giao hàng', '2'),
    getItem('Chính sách đổi trả', '3'),
];

const items2 = [
    getItem('Chính sách bảo mật', '4'),
    getItem('Điều khoản sử dụng', '5'),
    getItem('Hướng dẫn mua hàng', '6'),
];

export default function SecurityPolicy() {
    return (
        <div className='SecurityPolicy'>
            <Blog data={fakeBlogSecurityPolicy} trace={
                {
                    data: ["Trang chủ", "Tin tức", "Chính sách bảo mật"],
                    route: ['/home', "/blog", "/blog/policy/security-policy"]
                }
            }
                items1={items1}
                items2={items2}
                defaultItem={'4'}
            />
        </div>
    )
}