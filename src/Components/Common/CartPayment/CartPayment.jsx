import { Row } from 'antd';
import './CartPayment.scss';

export default function CartPayment({ data, btn, type }) {
    return (
        <div className='CartPayment'>
            <div className="cart-payment-wrapper">
                <div>
                    <p>
                        Chang Voucher
                    </p>
                    <div>
                        Chọn hoặc nhập mã
                    </div>
                </div>
                <Row>

                </Row>
            </div>
        </div>
    )
}