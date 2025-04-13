import { Button, Col, Row } from 'antd'
import './CartPayment.scss'
import { useNavigate } from 'react-router-dom'

export default function CartPayment({ data, btn, type }) {
  const navigate = useNavigate()
  return (
    <div className="CartPayment">
      <div className="cart-payment-wrapper">
        <div>
          <p>Chang Voucher</p>
          <p>Chọn hoặc nhập mã</p>
        </div>
        <Row className="cart-payment-main">
          <Col md={{ span: 2 }} className="first-col">
            <div>
              <input type="checkbox" />
            </div>
          </Col>
          <Col md={{ span: 10 }} className="second-col">
            <p>Chọn tất cả (1)</p>
            <button>Xóa</button>
            <button style={{ color: 'orangered' }}>Lưu vào mục đã thích</button>
          </Col>
          <Col md={{ span: 7 }} className="third-col">
            <p>
              Tổng thanh toán (0 Sản phẩm): <span>0đ</span>
            </p>
          </Col>
          <Col md={{ span: 5 }} className="fourth-col">
            <Button
              type="primary"
              danger
              className="btn-buy"
              onClick={() => {
                navigate('/user/checkout')
              }}
            >
              Mua Hàng
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}
