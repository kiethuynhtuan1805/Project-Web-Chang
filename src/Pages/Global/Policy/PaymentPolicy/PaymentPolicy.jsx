import { Blog } from 'Components'
import './PaymentPolicy.scss'

const data = {
    traceData: {
        data: ["Trang chủ", "Tin tức", "Chính sách thanh toán"],
        route: ['/home', "/blog", "/blog/policy/payment-policy"]
    }
}

export default function PaymentPolicy() {
    return (
        <div className='PaymentPolicy'>
            <Blog data={data} />
        </div>
    )
}