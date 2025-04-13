import './ListVoucher.scss'
import Voucher from '../Voucher'
import { Col, Row } from 'antd'

export default function ListVoucher({ data, btn, type }) {
  return (
    <div className="ListVoucher">
      <Row>
        {data.map((item, id) => {
          return (
            <Col key={`Voucher-${id}`}>
              <Voucher dataVoucher={item} type={type ? type : ''} />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
