import { Trace } from 'components'
import './Checkout.scss'

export default function Checkout() {
  const traceData = {
    data: ['Trang chủ', 'Thanh toán'],
    route: ['/home'],
  }
  return (
    <div className="Checkout">
      <Trace traceData={traceData} />
    </div>
  )
}
