import './Trace.scss'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export default function Trace({ traceData }) {
    const navigate = useNavigate();

    const linkTo = (id) => {
        return navigate(id);
    }

    return (
        <div className='Trace'>
            {
                traceData.data.map((data, id) => {
                    return (
                        <div key={`Trace-${id}`} id={`${data}`} className='trace-data' onClick={() => {
                            if (id + 1 !== traceData.data.length)
                                return linkTo(traceData.route[id]);
                            return;
                        }}>
                            <p>{data}</p>
                            {
                                id + 1 !== traceData.data.length && (
                                    <Icon icon="grommet-icons:next" width="10" height="10" style={{
                                        margin: '0 10px',
                                    }} />
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}