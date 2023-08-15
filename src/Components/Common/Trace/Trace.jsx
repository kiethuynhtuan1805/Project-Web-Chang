import './Trace.scss'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export default function Trace({ traceData }) {
    const navigate = useNavigate();

    const linkTo = (id) => {
        if (id === 'Home') return navigate('/');
        return navigate(`/${id}`);
    }

    return (
        <div className='Trace'>
            {
                traceData.map((data, id) => {
                    return (
                        <div key={`Trace-${data}-${id}`} id={`${data}`} className='trace-data' onClick={() => {
                            if (id + 1 !== traceData.length)
                                return linkTo(data);
                            return;
                        }}>
                            <p>{data}</p>
                            {
                                id + 1 !== traceData.length && (
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