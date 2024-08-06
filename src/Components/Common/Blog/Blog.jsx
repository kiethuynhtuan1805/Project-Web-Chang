import './Blog.scss';
import { Trace } from 'Components';
import { Tag } from 'antd';

export default function Blog({ data, trace }) {
    const formattedDate = (value) => {
        return `${value.getDate().toString().padStart(2, '0')}/${(value.getMonth() + 1).toString().padStart(2, '0')}/${value.getFullYear()}`
    }

    return (
        <div className='Blog container'>
            <div className="container-wrapper">
                <Trace traceData={trace} />
                <div className='content-wrapper'>
                    <p className="title">{data.title}</p>
                    <div className='author-wrapper'>
                        <div>
                            <Tag color={data.tag === 0 ? "red" : data.tag === 1 ? "green" : "blue"}>
                                {
                                    data.tag === 0 ? "Chính sách" : data.tag === 1 ? "Chăm sóc khách hàng" : "Tin tức"
                                }
                            </Tag>
                            <p>Đăng bởi <b>CHANG HOUSE</b></p>
                        </div>
                        <p>{data.viewed} lượt xem</p>
                    </div>
                    <div className='date'>
                        <p>Đăng ngày: {formattedDate(data.createdAt)}</p>
                        <p>Cập nhật mới nhất ngày: {formattedDate(data.updatedAt)}</p>
                    </div>
                    <img src={data.image} alt={"Hình ảnh chính sách thanh toán"} style={{ width: '100%' }} />
                    <div className='content'>
                        {
                            data.content.map((item, index) => {
                                return (
                                    <div key={'section-' + item + '-' + index} className='section'>
                                        {
                                            item.section !== '' && (
                                                <p className="title">{item.section}</p>
                                            )
                                        }
                                        {
                                            item.subsection.map((itemSub, indexSub) => {
                                                return (
                                                    <div key={'sub-section-' + itemSub + '-' + indexSub} className='sub-section'>
                                                        <p className='sub-title'>{itemSub.title}</p>
                                                        {
                                                            itemSub.content.split('\n').map((contentSub, indexContentSub) => {
                                                                if (contentSub[0] === '&') {
                                                                    return (
                                                                        <div key={'sub-section-content-' + contentSub + '-' + indexContentSub} className='normal-content'>
                                                                            <p>{contentSub.split(':')[0].split('&')[1]}:</p>
                                                                            <ul>
                                                                                {contentSub.split(':').slice(1).map((listItem, indexListItem) => {
                                                                                    return <li key={'list-item-' + listItem + '-' + indexListItem}>
                                                                                        {listItem}
                                                                                    </li>
                                                                                })}
                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                } else {
                                                                    return (
                                                                        <div key={'sub-section-content-' + contentSub + '-' + indexContentSub} className='normal-content'>
                                                                            <p>{contentSub}</p>
                                                                        </div>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}