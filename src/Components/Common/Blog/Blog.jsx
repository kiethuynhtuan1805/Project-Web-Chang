import './Blog.scss';
import { ContactBar, CommonHeader, Trace } from 'Components';

export default function Blog({ data }) {
    return (
        <div className='Blog container'>
            <div className="container-wrapper">
                <ContactBar />
                <CommonHeader type="WP" />
                <Trace traceData={data.traceData} />
            </div>
        </div>
    )
}