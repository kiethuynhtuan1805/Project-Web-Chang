import { Blog } from 'Components'
import './ReturnPolicy.scss'
import { fakeBlogReturnPolicy } from 'data'

export default function ReturnPolicy() {
    return (
        <div className='ReturnPolicy'>
            <Blog data={fakeBlogReturnPolicy} trace={
                {
                    data: ["Trang chủ", "Tin tức", "Chính sách đổi trả hàng"],
                    route: ['/home', "/blog", "/blog/policy/return-policy"]
                }
            }
                defaultItem={'csdth'}
            />
        </div>
    )
}