import { Icon } from '@iconify/react'
import './ProductDetail.scss'
import { Trace } from 'components'
import { Button, Col, Image, InputNumber, Row, Tooltip, Card, Avatar, Modal } from 'antd'
import { fakeProduct } from 'data'
import { ProductCarousel, StarRating } from 'components'
import { useRef, useState } from 'react'

const actions = [
  <Icon icon="tabler:edit" width="24" height="24" className="evaluate-edit" />,
  <Icon
    icon="material-symbols:delete-outline"
    width="24"
    height="24"
    className="evaluate-delete"
  />,
]

export default function ProductDetail(props) {
  const myRef = useRef(null)
  const [open, setOpen] = useState(false)

  const traceRoute = [...fakeProduct.type.split('\n')]

  const traceData = {
    data: [
      'Trang chủ',
      ...fakeProduct.trace.split('\n'),
      `${fakeProduct.name} ${fakeProduct.code}`,
    ],
    route: [
      '/home',
      ...traceRoute.map((value, index) => {
        return `/products/collections/${traceRoute.slice(0, index + 1).join('/')}`
      }),
    ],
  }

  const handleScroll = () => {
    myRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="ProductDetail">
      <Trace traceData={traceData} />
      <div className="product-detail-main">
        <Row>
          <Col xl={{ span: 12 }}>
            <div className="product-image">
              <Image
                src={fakeProduct.picSrc[0].src}
                width={'100%'}
                height={'100%'}
                fallback={require('assets/images/image-not-found.png')}
                style={{ maxWidth: '700px' }}
              />
            </div>
            <div className="product-image-sub">
              {[...fakeProduct.picSrc].splice(1).map((data, id) => {
                return (
                  <Image
                    key={`sub-image-${id}`}
                    src={data.src}
                    width={'140px'}
                    height={'140px'}
                    fallback={require('assets/images/image-not-found.png')}
                  />
                )
              })}
            </div>
          </Col>
          <Col xl={{ span: 12 }}>
            <div className="product-detail-content">
              <div className="title-wrapper">
                <p className="title">{`${fakeProduct.name}`}</p>
                <div className="favorite">
                  <div className="favorite-select">
                    <Icon icon="mdi:heart-outline" width={40} height={40} />
                  </div>
                  <div className="favorite-selected">
                    <Icon icon="mdi:heart" color="pink" width={40} height={40} />
                  </div>
                </div>
              </div>
              <p className="code">Mã sản phẩm: {fakeProduct.code}</p>
              <div className="re">
                <div className="rating" onClick={handleScroll}>
                  <p>4.4</p>
                  <StarRating rating={4.4} />
                </div>
                <div className="evaluate" onClick={handleScroll}>
                  <p>34 đánh giá</p>
                </div>
              </div>
              <p className="price">{`${fakeProduct.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`}</p>
              <p className="inventory">
                * Hiện tại cửa hàng còn <strong>{fakeProduct.inventory}</strong> sản phẩm này.
              </p>
              <div className="shipping">
                <p>Vận chuyển:</p>
                <div className="shipping-wrapper">
                  <Icon icon="mdi-light:truck" width={32} height={32} color={'aqua'} />
                  <div>
                    <div
                      onClick={() => {
                        setOpen(true)
                      }}
                    >
                      <p>Nhận từ 10 Th04 - 14 Th04, phí giao 0đ</p>
                      <Icon icon="weui:arrow-outlined" width="32" height="24" />
                    </div>
                    <p className="note">Tặng Voucher ₫15.000 nếu đơn giao sau thời gian trên.</p>
                  </div>
                </div>
              </div>
              <div className="type-picked">
                <p>Kích thước/kiểu:</p>
                <div className="type-wrapper">
                  {fakeProduct.classify.map((classify, id) => (
                    <div className="type picked" key={id}>
                      <p>{classify.item}</p>
                      <div className="tick-wrapper ">
                        <Icon
                          icon="typcn:tick"
                          width="14"
                          height="14"
                          color="#FFFFFF"
                          className="tick"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="quantity">
                <p>Số lượng:</p>
                <InputNumber
                  min={1}
                  max={fakeProduct.inventory}
                  defaultValue={1}
                  style={{
                    width: '200px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                  }}
                />
                <div className="btn-wrapper">
                  <Button size={'large'} className="btn-cart">
                    Thêm vào giỏ hàng
                  </Button>
                  <Button size={'large'} className="btn-buy">
                    Mua ngay
                  </Button>
                </div>
              </div>
              <div className="description">
                <p>
                  <Icon icon="twemoji:christmas-tree" width="24" height="24" /> Chi tiết sản phẩm:
                </p>
                <div className="description-wrapper">
                  <ul>
                    {fakeProduct.description.split('\n').map((data, id) => {
                      return <li key={`description-${id}`}>{data}</li>
                    })}
                  </ul>
                </div>
              </div>
              <div className="commit">
                <p>
                  <Icon
                    icon="fxemoji:flowerplayingcards"
                    width="24"
                    height="24"
                    style={{ marginRight: '5px' }}
                  />
                  <strong>Chang House</strong> cam kết sản phẩm hoàn toàn giống 100% so với hình
                  ảnh. Nếu có bất cứ thắc mắc nào xin vui lồng liên hệ hotline:{' '}
                  <a href="tel:+84964643875">0964643875</a> để được hỗ trợ!
                </p>
                <p>
                  <Icon
                    icon="fxemoji:smiletongue"
                    width="24"
                    height="24"
                    style={{ marginRight: '5px' }}
                  />
                  Cảm ơn vì đã quan tâm!!
                  <Icon
                    icon="noto:red-heart"
                    width="24"
                    height="24"
                    style={{ marginLeft: '5px' }}
                  />
                </p>
              </div>
              <div className="share">
                <p>Chia sẽ ngay:</p>
                <Row>
                  <Col span={8} style={{ paddingRight: '5px' }}>
                    <Tooltip title={'Share on Facebook'}>
                      <Button type="text" className="btn-share">
                        <Icon icon="devicon:facebook" className="icon" width={24} height={24} />{' '}
                        Share
                      </Button>
                    </Tooltip>
                  </Col>
                  <Col span={8} style={{ paddingRight: '5px' }}>
                    <Tooltip title={'Share on Tiktok'}>
                      <Button type="text" className="btn-share">
                        <Icon icon="logos:tiktok-icon" className="icon" />
                        Share
                      </Button>
                    </Tooltip>
                  </Col>
                  <Col span={8} style={{ paddingRight: '5px' }}>
                    <Tooltip title={'Tweet on Twitter'}>
                      <Button type="text" className="btn-share">
                        <Icon icon="logos:twitter" className="icon" />
                        Tweet
                      </Button>
                    </Tooltip>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="evaluate-detail" ref={myRef}>
        <p>Đánh giá sản phẩm</p>
        <div>
          <Row className="filter">
            <Col xs={{ span: 6 }}>
              <p>
                <b>4.4</b>
                trên 5
              </p>
              <div>
                <StarRating rating={4.4} />
              </div>
            </Col>
            <Col xs={{ span: 18 }}>
              <div id="all" className="picked">
                Tất cả
              </div>
              <div id="5s">5 sao (32)</div>
              <div id="4s">4 sao (0)</div>
              <div id="3s">3 sao (0)</div>
              <div id="2s">2 sao (0)</div>
              <div id="1s">1 sao (0)</div>
              <div id="0s">0 sao (0)</div>
            </Col>
          </Row>
          <div className="evaluate-wrapper">
            <Card actions={actions} style={{ minWidth: 300 }} className="evaluate-content">
              <Card.Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                title={'Kiet dep trai'}
                description={
                  <>
                    <div className="rating">
                      <p>4</p>
                      <StarRating rating={4.4} />
                    </div>
                    <p className="created-at">2024-03-18 18:30</p>
                    <p>
                      Tính năng nổi bật: <span>11</span>
                    </p>
                    <p>
                      Chất lượng sản phẩm: <span>good</span>
                    </p>
                    <p className="content">
                      Cũng tạm, không kì vọng quá nhiều vì săn được em này với giá rẻ, đóng gói cẩn
                      thận
                    </p>
                    <div className="img-wrapper">
                      <Image
                        src={'https://api.dicebear.com/7.x/miniavs/svg?seed=1'}
                        width={'120px'}
                        height={'120px'}
                        fallback={require('assets/images/image-not-found.png')}
                      />
                    </div>
                  </>
                }
              />
            </Card>
          </div>
        </div>
      </div>
      <div className="product-detail-sub">
        <p>Một số sản phẩm liên quan</p>
        <div>
          <ProductCarousel />
        </div>
      </div>
      <Modal
        title="Thông tin về phí vận chuyển"
        centered
        open={open}
        onOk={() => setOpen(false)}
        className="modal-delivery"
      >
        <p>
          - Nhận từ <span>10 Th04</span> đến <span>14 Th04</span>
        </p>
        <p>
          - Trong phạm vi tỉnh ...: <span>0</span>đ
        </p>
        <p>
          - Các tỉnh còn lại ...: <span>0</span>đ
        </p>
        <ul>
          <li>Tặng voucher ....</li>
          <li>Tặng voucher ....</li>
          <li>Tặng voucher ....</li>
          <li>Tặng voucher ....</li>
          <li>Tặng voucher ....</li>
        </ul>
      </Modal>
    </div>
  )
}
