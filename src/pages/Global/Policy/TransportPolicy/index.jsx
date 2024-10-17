import { Blog } from 'components'
import './TransportPolicy.scss'
import { fakeBlogTransportPolicy } from 'data'

export default function TransportPolicy() {
    return (
        <div className='TransportPolicy'>
            <Blog data={fakeBlogTransportPolicy} trace={
                {
                    data: ["Trang chủ", "Tin tức", "Chính sách giao hàng"],
                    route: ['/home', "/blog"]
                }
            }
                defaultItem={fakeBlogTransportPolicy.key}
            />
        </div>
    )
}