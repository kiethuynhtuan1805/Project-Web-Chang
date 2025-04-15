import { Button, Col, Modal, Row, Input } from 'antd'
import './CartPayment.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ListVoucher } from 'components'
import { fakeListVoucher } from 'data'

const { Search } = Input

export default function CartPayment({ data, btn, type }) {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleSearch = () => {
    console.log('searching...')
  }

  return (
    <div className="CartPayment">
      <div className="cart-payment-wrapper">
        <div>
          <p>Chang Voucher</p>
          <p onClick={showModal}>Chọn hoặc nhập mã</p>
          <Modal
            title="Chọn Voucher"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            className="modal-select-voucher"
            style={{ top: 50 }}
            okText={'OK'}
            cancelText={'TRỞ LẠI'}
          >
            <Search
              placeholder="Nhập mã voucher!"
              allowClear
              enterButton="ÁP DỤNG"
              size="large"
              onSearch={handleSearch}
            />
            <div className="voucher-selector">
              <ListVoucher data={fakeListVoucher} />
            </div>
          </Modal>
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
