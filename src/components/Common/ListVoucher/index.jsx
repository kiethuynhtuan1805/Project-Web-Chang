import './ListVoucher.scss'
import Voucher from '../Voucher'
import { Col, Row } from 'antd'

export default function ListVoucher({ data, btn }) {
  return (
    <div className="ListVoucher">
      <Row>
        {data.map((item, id) => {
          return (
            <Col key={`Voucher-${id}`}>
              <Voucher dataVoucher={item} />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
