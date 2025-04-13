import './Cart.scss'
import { Col, Row } from 'antd'
import { ProductCarousel } from 'components'
import { CartPayment, Trace } from 'components'
import { fakeCart } from 'data'
import { useState } from 'react'

export default function Cart() {
  const traceData = {
    data: ['Trang chủ', 'Quản lý giỏ hàng'],
    route: ['/home'],
  }

  const [checkedAll, setCheckedAll] = useState(false)
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
  })

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

  return (
    <div className="Cart">
      <Trace traceData={traceData} />
      <Row className="col-header">
        <Col md={{ span: 2 }}>
          <div>
            <input type="checkbox" name="" id="" checked={checkedAll} onChange={handleCheckAll} />
          </div>
        </Col>
        <Col md={{ span: 6 }} className="label-sp">
          <p>Sản Phẩm</p>
        </Col>
        <Col md={{ span: 4 }}></Col>
        <Col md={{ span: 3 }}>
          <p>Đơn Giá</p>
        </Col>
        <Col md={{ span: 3 }}>
          <p>Số Lượng</p>
        </Col>
        <Col md={{ span: 3 }}>
          <p>Số Tiền</p>
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
              <Col md={{ span: 6 }} className="item">
                <img src={item.product.picSrc[0].src} alt="" />
                <p className="item-label">{item.product.name}</p>
              </Col>
              <Col md={{ span: 4 }}></Col>
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
                <p>Xóa</p>
                <p>Tìm sản phẩm tương tự</p>
              </Col>
            </Row>
          )
        })}
      </div>
      <CartPayment />
      <div className="product-detail-sub">
        <p>Có thể bạn cũng thích</p>
        <div>
          <ProductCarousel />
        </div>
      </div>
    </div>
  )
}
