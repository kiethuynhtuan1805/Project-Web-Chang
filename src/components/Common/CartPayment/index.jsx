import { Button, Col, Modal, Row, Input } from 'antd'
import './CartPayment.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ListVoucher } from 'components'
import { fakeListVoucher } from 'data'

const { Search } = Input

export default function CartPayment({
  totalAmount,
  totalPrice,
  selectedAmount,
  checkedAll,
  handleCheckAll,
  setCheckedAll,
  setCheckedItems,
  product,
}) {
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

  const clearCheckedItems = () => {
    setCheckedAll(false)
    setCheckedItems(Array(product.length).fill(false))
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
              <input type="checkbox" checked={checkedAll} onChange={handleCheckAll} />
            </div>
          </Col>
          <Col md={{ span: 10 }} className="second-col">
            <p
              onClick={() => {
                if (!checkedAll) {
                  setCheckedAll(true)
                  setCheckedItems(Array(product.length).fill(true))
                } else {
                  setCheckedAll(false)
                  setCheckedItems(Array(product.length).fill(false))
                }
              }}
            >
              Chọn tất cả <span>({totalAmount})</span>
            </p>
            <button onClick={clearCheckedItems}>Xóa</button>
            <button style={{ color: 'orangered' }}>Lưu vào mục đã thích</button>
          </Col>
          <Col md={{ span: 7 }} className="third-col">
            <p>
              TỔNG THANH TOÁN (<span>{selectedAmount}</span> SẢN PHẨM):{' '}
              <span style={{ fontSize: '1.2rem', color: '#fb7474' }}>
                {
                  totalPrice
                    .toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
                    .split('VND')[0]
                }
              </span>
              đ
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
              disabled={selectedAmount === 0}
            >
              Mua Hàng
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}
