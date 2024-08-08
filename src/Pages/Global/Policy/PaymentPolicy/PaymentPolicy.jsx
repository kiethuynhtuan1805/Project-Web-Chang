import { Blog } from 'Components'
import './PaymentPolicy.scss'
import { fakeBlogPaymentPolicy } from 'data'

export default function PaymentPolicy() {
    return (
        <div className='PaymentPolicy'>
            <Blog data={fakeBlogPaymentPolicy} trace={
                {
                    data: ["Trang chủ", "Tin tức", "Chính sách thanh toán"],
                    route: ['/home', "/blog", "/blog/policy/payment-policy"]
                }
            }
                defaultItem={'cstt'}
            />
        </div>
    )
}