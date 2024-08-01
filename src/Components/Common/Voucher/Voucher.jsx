import { Col, Row } from 'antd';
import './Voucher.scss';
// import { useNavigate } from 'react-router-dom';

export default function Voucher({ dataVoucher, type }) {
    // // useNavigate
    // const navigate = useNavigate();

    return (
        <div className='Voucher'>
            <Row style={{ height: '100%' }}>
                <Col span={8} style={{ height: '100%' }} className='voucher-type'>
                    <img src={require('../../../assets/images/freeship.png')} alt={require('../../../assets/images/image-not-found.png')} />
                </Col>
                <Col span={16} style={{ height: '100%' }} className='voucher-main'>
                    <div className='voucher-content'>
                        <p className="title">{dataVoucher.name}</p>
                        <p className="effective-time">Có hiệu lực từ: {dataVoucher.effectiveTime} - {dataVoucher.endTime}</p>
                    </div>
                    <div className="btn-wrapper">
                        <div className='btn'>Dùng Sau</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}