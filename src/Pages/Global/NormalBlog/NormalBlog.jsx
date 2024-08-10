import { Blog } from 'Components'
import './NormalBlog.scss'
import { fakeBlog } from 'data'

export default function NormalBlog() {
    return (
        <div className='NormalBlog'>
            <Blog data={fakeBlog} trace={
                {
                    data: ["Trang chủ", "Tin tức", fakeBlog.title],
                    route: ['/home', "/blog", ""]
                }
            }
                defaultItem={fakeBlog.key}
            />
        </div>
    )
}