import { Trace } from 'Components';
import './VoucherWallet.scss'
import { Col, Row } from 'antd';
import { UserPageNav } from 'Components';

export default function VoucherWallet() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Voucher"],
        route: ['/home', "/user/voucher-wallet"]
    };

    return (
        <div className='VoucherWallet container'>
            <div className='container-wrapper'>
                <Trace traceData={traceData} />
                <Row style={{ marginBottom: '100px' }}>
                    <Col span={5} >
                        <UserPageNav type={'nav-info'} haveDropDown={""} />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={18}>
                        <div className='voucher-wallet-content'>
                            <div>
                                <p>Voucher</p>
                                <p>Những khuyến mãi dành cho bạn!</p>
                            </div>
                            <div className='option'>
                                <div className='selected'>Tất cả (0)</div>
                                <div>Chang (0)</div>
                                <div>Dành cho riêng bạn (0)</div>
                                <div>Dịch vụ tài chính (0)</div>
                                <div>Từ đối tác (0)</div>
                            </div>
                            <div>
                                hh
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    )
}