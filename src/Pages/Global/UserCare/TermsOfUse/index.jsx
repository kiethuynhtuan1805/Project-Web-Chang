import { Blog } from 'components'
import './TermsOfUse.scss'
import { fakeBlogTermsOfUse } from 'data'

export default function TermsOfUse() {
    return (
        <div className='TermsOfUse'>
            <Blog data={fakeBlogTermsOfUse} trace={
                {
                    data: ["Trang chủ", "Tin tức", "Điều khoản sử dụng"],
                    route: ['/home', "/blog"]
                }
            }
                defaultItem={fakeBlogTermsOfUse.key}
            />
        </div>
    )
}