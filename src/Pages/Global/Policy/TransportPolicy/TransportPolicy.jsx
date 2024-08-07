import { Blog } from 'Components'
import './TransportPolicy.scss'
import { fakeBlogTransportPolicy } from 'data'

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

export default function TransportPolicy() {
    return (
        <div className='TransportPolicy'>
            <Blog data={fakeBlogTransportPolicy} trace={
                {
                    data: ["Trang chủ", "Tin tức", "Chính sách giao hàng"],
                    route: ['/home', "/blog", "/blog/policy/transport-policy"]
                }
            }
                items1={items1}
                defaultItem1={'3'}
            />
        </div>
    )
}