import { Blog } from 'Components'
import './VATPolicy.scss'
import { fakeBlogVAT } from 'data'

export default function VATPolicy() {
    return (
        <div className='VATPolicy'>
            <Blog data={fakeBlogVAT} trace={
                {
                    data: ["Trang chủ", "Tin tức", "Chính sách xuất hóa đơn GTGT"],
                    route: ['/home', "/blog"]
                }
            }
                defaultItem={fakeBlogVAT.key}
            />
        </div>
    )
}