import { Blog } from 'Components'
import './SecurityPolicy.scss'
import { fakeBlogSecurityPolicy } from 'data'

export default function SecurityPolicy() {
    return (
        <div className='SecurityPolicy'>
            <Blog data={fakeBlogSecurityPolicy} trace={
                {
                    data: ["Trang chủ", "Tin tức", "Chính sách bảo mật"],
                    route: ['/home', "/blog", "/blog/policy/security-policy"]
                }
            }
                defaultItem={'csbm'}
            />
        </div>
    )
}