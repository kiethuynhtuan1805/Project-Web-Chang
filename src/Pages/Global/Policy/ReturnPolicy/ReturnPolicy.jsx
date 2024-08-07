import { Blog } from 'Components'
import './ReturnPolicy.scss'
import { fakeBlogReturnPolicy } from 'data'

function getItem(label, key, children) {
    return {
        key,
        children,
        label,
    };
};

const items1 = [
    getItem('Chính sách thanh toán', '1'),
    getItem('Chính sách đổi trả', '2'),
    getItem('Chính sách giao hàng', '3'),
];

export default function ReturnPolicy() {
    return (
        <div className='ReturnPolicy'>
            <Blog data={fakeBlogReturnPolicy} trace={
                {
                    data: ["Trang chủ", "Tin tức", "Chính sách đổi trả"],
                    route: ['/home', "/blog", "/blog/policy/return-policy"]
                }
            }
                items1={items1}
                defaultItem1={'2'}
            />
        </div>
    )
}