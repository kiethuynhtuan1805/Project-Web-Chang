import { Blog } from 'Components'
import './Guide.scss'
import { fakeBlogGuide } from 'data'

export default function Guide() {
    return (
        <div className='Guide'>
            <Blog data={fakeBlogGuide} trace={
                {
                    data: ["Trang chủ", "Tin tức", "Hướng dẫn mua hàng"],
                    route: ['/home', "/blog"]
                }
            }
                defaultItem={fakeBlogGuide.key}
            />
        </div>
    )
}