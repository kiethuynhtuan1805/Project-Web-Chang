import './Blog.scss';
import { ContactBar, CommonHeader, Trace } from 'Components';
import { Tag } from 'antd';

export default function Blog({ data, trace }) {
    return (
        <div className='Blog container'>
            <div className="container-wrapper">
                <ContactBar />
                <CommonHeader type="WP" />
                <Trace traceData={trace} />
                <div className='content-wrapper'>
                    <p className="title">{data.title}</p>
                    <div>
                        <Tag color={data.tag === 0 ? "red" : data.tag === 1 ? "green" : "blue"}>
                            {
                                data.tag === 0 ? "Chính sách" : data.tag === 1 ? "Chăm sóc khách hàng" : "Tin tức"
                            }
                        </Tag>
                        <p>Đăng bởi </p>
                        <p>{data.author}</p>
                        <p>Đăng ngày: {data.createdAt}</p>
                        <p>Cập nhật mới nhất ngày: {data.updatedAt}</p>
                        <p>{data.viewed} lượt xem</p>
                    </div>
                    <img src={data.image} alt={"Hình ảnh chính sách thanh toán"} />
                </div>
            </div>
        </div>
    )
}