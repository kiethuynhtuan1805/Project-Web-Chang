import { Icon } from '@iconify/react'
import './ProductDetail.scss'
import { Trace } from 'components'
import { Button, Col, Image, InputNumber, Row, Tooltip } from 'antd'
import { fakeProduct } from 'data'
import { ProductCarousel } from 'components'

export default function ProductDetail(props) {
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
              <p className="price">{`${fakeProduct.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`}</p>
              <p className="inventory">
                * Hiện tại cửa hàng còn <strong>{fakeProduct.inventory}</strong> sản phẩm này.
              </p>
              <div className="shipping">
                <p>Vận chuyển:</p>
                <div className="shipping-wrapper">
                  <Icon icon="mdi-light:truck" width={32} height={32} color={'aqua'} />
                  <div>
                    <div>
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
                  <div style={{ display: 'flex' }}>
                    {fakeProduct.classify.map((classify, id) => (
                      <div className="type">{classify.item}</div>
                    ))}
                  </div>
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
                        <Icon icon="devicon:facebook" className="icon" /> Share
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
      <div className="product-detail-sub">
        <p>Một số sản phẩm liên quan</p>
        <div>
          <ProductCarousel />
        </div>
      </div>
    </div>
  )
}
