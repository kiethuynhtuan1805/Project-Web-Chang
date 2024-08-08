import { Blog } from 'Components'
import './TermsOfUse.scss'
import { fakeBlogTermsOfUse } from 'data'

export default function TermsOfUse() {
    return (
        <div className='TermsOfUse'>
            <Blog data={fakeBlogTermsOfUse} trace={
                {
                    data: ["Trang chủ", "Tin tức", "Điều khoản sử dụng"],
                    route: ['/home', "/blog", "/blog/user-care/terms-of-use"]
                }
            }
                defaultItem={'dksd'}
            />
        </div>
    )
}