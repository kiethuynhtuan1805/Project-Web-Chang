import './Cart.scss'
import { Col, Row } from 'antd'
import { ProductCarousel } from 'components'
import { CartPayment, Trace } from 'components'
import { fakeCart } from 'data'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const traceData = {
    data: ['Trang chủ', 'Quản lý giỏ hàng'],
    route: ['/home'],
  }

  const navigate = useNavigate()

  const [checkedAll, setCheckedAll] = useState(false)
  const [checkedItems, setCheckedItems] = useState(Array(fakeCart.data.length).fill(false))

  const handleCheckAll = (e) => {
    const checked = e.target.checked
    setCheckedAll(checked)

    const newCheckedItems = fakeCart.data.map(() => checked)
    setCheckedItems(newCheckedItems)
  }

  const handleItemCheck = (index) => (e) => {
    const updated = [...checkedItems]
    updated[index] = e.target.checked
    setCheckedItems(updated)

    // Nếu tất cả item đều được check => checkedAll = true
    const allChecked = updated.every(Boolean)
    setCheckedAll(allChecked)
  }

  const selectedItems = fakeCart.data.filter((_, index) => checkedItems[index])
  const selectedAmount = selectedItems.reduce((sum, item) => sum + item.amount, 0)
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.amount * item.product.price, 0)

  return (
    <div className="Cart">
      <Trace traceData={traceData} />
      <Row className="col-header">
        <Col md={{ span: 2 }}>
          <div>
            <input type="checkbox" name="" id="" checked={checkedAll} onChange={handleCheckAll} />
          </div>
        </Col>
        <Col md={{ span: 8 }} className="label-sp">
          <p>Sản Phẩm</p>
        </Col>
        <Col md={{ span: 2 }}></Col>
        <Col md={{ span: 3 }}>
          <p>Đơn Giá</p>
        </Col>
        <Col md={{ span: 3 }}>
          <p>Số Lượng</p>
        </Col>
        <Col md={{ span: 3 }}>
          <p>Thành Tiền</p>
        </Col>
        <Col md={{ span: 3 }}>
          <p>Thao Tác</p>
        </Col>
      </Row>
      <div className="col-item">
        {fakeCart.data.map((item, index) => {
          return (
            <Row className="item-wrapper" key={`cart-item-${index}`}>
              <Col md={{ span: 2 }}>
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={checkedItems[index] || false}
                    onChange={handleItemCheck(index)}
                  />
                </div>
              </Col>
              <Col
                md={{ span: 8 }}
                className="item"
                onClick={() => {
                  navigate('/products/1')
                }}
              >
                <img src={item.product.picSrc[0].src} alt="" />
                <p className="item-label">{item.product.name}</p>
              </Col>
              <Col md={{ span: 2 }}></Col>
              <Col md={{ span: 3 }}>
                <p>{`${item.product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`}</p>
              </Col>
              <Col md={{ span: 3 }}>
                <p>{item.amount}</p>
              </Col>
              <Col md={{ span: 3 }}>
                <p>{`${(item.product.price * item.amount).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`}</p>
              </Col>
              <Col md={{ span: 3 }}>
                <p
                  className="cart-delete"
                  onClick={() => {
                    console.log(item)
                  }}
                >
                  Xóa
                </p>
                <p className="cart-search">Tìm sản phẩm tương tự</p>
              </Col>
            </Row>
          )
        })}
      </div>
      <CartPayment
        totalAmount={fakeCart.data.reduce((sum, item) => sum + item.amount, 0)}
        selectedAmount={selectedAmount}
        totalPrice={totalPrice}
        checkedAll={checkedAll}
        handleCheckAll={handleCheckAll}
        setCheckedAll={setCheckedAll}
        setCheckedItems={setCheckedItems}
        product={fakeCart.data}
      />
      <div className="product-detail-sub">
        <p>Có thể bạn cũng thích</p>
        <div>
          <ProductCarousel />
        </div>
      </div>
    </div>
  )
}
