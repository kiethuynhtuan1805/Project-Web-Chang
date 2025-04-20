import { Trace } from 'components'
import './Checkout.scss'
import { Col, Input, List, Modal, Row, Select, Tabs } from 'antd'
import { fakeCart } from 'data'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

export default function Checkout() {
  const traceData = {
    data: ['Trang chủ', 'Thanh toán'],
    route: ['/home'],
  }
  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const [wards, setWards] = useState([])
  const [selectedProvince, setSelectedProvince] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [selectedWard, setSelectedWard] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [items, setItems] = useState([])

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    showModal()
    fetch('https://provinces.open-api.vn/api/p/')
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          label: item.name.replace(/^(Tỉnh|Thành phố)\s+/i, ''),
          value: item.code,
        }))
        setItems([
          {
            key: '1',
            label: 'Tỉnh/Thành phố',
            children: (
              <div
                id="scrollableDiv"
                style={{
                  height: 400,
                  overflow: 'auto',
                  padding: '0 16px',
                  border: '1px solid rgba(140, 140, 140, 0.35)',
                }}
              >
                <List
                  dataSource={formatted}
                  renderItem={(item) => (
                    <List.Item key={item}>
                      <div
                        onClick={() => {
                          console.log(item.value)
                        }}
                        className="input-address"
                      >
                        {item.label}
                      </div>
                    </List.Item>
                  )}
                />
              </div>
            ),
          },
          {
            key: '2',
            label: 'Quận/Huyện',
            children: 'Content of Tab Pane 2',
          },
          {
            key: '3',
            label: 'Phường/Xã',
            children: 'Content of Tab Pane 3',
          },
        ])
        setProvinces(formatted)
      })
  }, [])

  useEffect(() => {
    if (selectedProvince) {
      fetch(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`)
        .then((res) => res.json())
        .then((data) => {
          const formatted = data.districts.map((item) => ({
            label: item.name,
            value: item.code,
          }))
          setDistricts(formatted)
        })
    } else {
      setDistricts([])
      setWards([])
    }
  }, [selectedProvince])

  useEffect(() => {
    if (selectedDistrict) {
      fetch(`https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`)
        .then((res) => res.json())
        .then((data) => {
          const formatted = data.wards.map((item) => ({
            label: item.name,
            value: item.code,
          }))
          setWards(formatted)
        })
    } else {
      setWards([])
    }
  }, [selectedDistrict])

  return (
    <div className="Checkout">
      <Trace traceData={traceData} />
      <Row className="col-header">
        <Col md={{ span: 10 }} className="label-sp">
          <p>Sản Phẩm</p>
        </Col>
        <Col md={{ span: 2 }}></Col>
        <Col md={{ span: 4 }}>
          <p>Đơn Giá</p>
        </Col>
        <Col md={{ span: 4 }}>
          <p>Số Lượng</p>
        </Col>
        <Col md={{ span: 4 }}>
          <p>Thành Tiền</p>
        </Col>
      </Row>
      <div className="col-item">
        {fakeCart.data.map((item, index) => {
          return (
            <Row className="item-wrapper" key={`cart-item-${index}`}>
              <Col md={{ span: 10 }} className="item">
                <img src={item.product.picSrc[0].src} alt="" />
                <p className="item-label">{item.product.name}</p>
              </Col>
              <Col md={{ span: 2 }}></Col>
              <Col md={{ span: 4 }}>
                <p>{`${item.product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`}</p>
              </Col>
              <Col md={{ span: 4 }}>
                <p>{item.amount}</p>
              </Col>
              <Col md={{ span: 4 }}>
                <p>{`${(item.product.price * item.amount).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`}</p>
              </Col>
            </Row>
          )
        })}
      </div>
      <Modal
        title="Địa chỉ mới"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal-checkout"
      >
        <p>Để đặt hàng, vui lòng thêm địa chỉ nhận hàng</p>
        <Row className="i-wrapper">
          <Col span={12}>
            <Input placeholder="Họ và tên" size="large" />
          </Col>
          <Col span={12}>
            <Input placeholder="Số điện thoại" size="large" />
          </Col>
        </Row>
        <Input
          placeholder="Tỉnh/Thành phố, Quận/Huyện, Phường/Xã"
          size="large"
          suffix={
            <div className="icon-select-wrapper">
              <Icon icon="material-symbols:search-rounded" width="20" height="20" />
              <Icon icon="carbon:close-filled" width="14" height="14" className="btn-close" />
              <Icon icon="oui:arrow-down" width="16" height="20" />
            </div>
          }
        />
        <Tabs defaultActiveKey="1" items={items} />
        <Row className="a-wrapper">
          <Col span={8}>
            <Select
              showSearch
              size="large"
              placeholder="Tỉnh/Thành phố"
              value={selectedProvince || undefined}
              filterOption={(input, option) => {
                var _a
                return (
                  (_a = option === null || option === void 0 ? void 0 : option.label) !== null &&
                  _a !== void 0
                    ? _a
                    : ''
                )
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }}
              options={provinces}
              onChange={(item) => {
                setSelectedProvince(item)
                setDistricts([])
                setWards([])
                setSelectedDistrict('')
                setSelectedWard('')
              }}
            />
          </Col>
          <Col span={8}>
            <Select
              showSearch
              size="large"
              placeholder="Quận/Huyện"
              value={selectedDistrict || undefined}
              filterOption={(input, option) => {
                var _a
                return (
                  (_a = option === null || option === void 0 ? void 0 : option.label) !== null &&
                  _a !== void 0
                    ? _a
                    : ''
                )
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }}
              options={districts}
              onChange={(item) => setSelectedDistrict(item)}
            />
          </Col>
          <Col span={8}>
            <Select
              showSearch
              size="large"
              placeholder="Phường/Xã"
              value={selectedWard || undefined}
              filterOption={(input, option) => {
                var _a
                return (
                  (_a = option === null || option === void 0 ? void 0 : option.label) !== null &&
                  _a !== void 0
                    ? _a
                    : ''
                )
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }}
              options={wards}
              onChange={(item) => setSelectedWard(item)}
            />
          </Col>
        </Row>
      </Modal>
    </div>
  )
}
