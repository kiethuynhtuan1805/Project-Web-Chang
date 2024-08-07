import { Blog } from 'Components'
import './PaymentPolicy.scss'
import { fakeBlogPaymentPolicy } from 'data'

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

export default function PaymentPolicy() {
    return (
        <div className='PaymentPolicy'>
            <Blog data={fakeBlogPaymentPolicy} trace={
                {
                    data: ["Trang chủ", "Tin tức", "Chính sách thanh toán"],
                    route: ['/home', "/blog", "/blog/policy/payment-policy"]
                }
            }
                items1={items1}
                defaultItem1={'1'}
            />
        </div>
    )
}