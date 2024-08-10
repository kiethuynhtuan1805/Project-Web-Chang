import './ListVoucher.scss';
import Voucher from '../Voucher/Voucher';
import { Col, Row } from 'antd';

export default function ListVoucher({ data, btn, type }) {
    return (
        <div className='ListVoucher'>
            <Row>
                {
                    data.map((item, id) => {
                        return (
                            <Col key={`Voucher-${id}`} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 8 }}>
                                <Voucher dataVoucher={item} type={type ? type : ''} />
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}