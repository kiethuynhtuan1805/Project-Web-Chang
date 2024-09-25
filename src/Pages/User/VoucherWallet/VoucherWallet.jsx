import { Trace } from 'Components';
import './VoucherWallet.scss'
import { Col, Row, Menu } from 'antd';
import { UserPageNav, ListVoucher } from 'Components';
import { fakeListVoucher, fakeNavVoucher } from 'data';
import { useEffect, useState } from 'react';

export default function VoucherWallet() {
    // useState
    const [opt, setOpt] = useState(1);

    const handleNav = () => {
        setOpt(0);
    }

    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Voucher"],
        route: ['/home', "/user"]
    };

    useEffect(() => {
        const optPicked = document.getElementsByClassName("option")[0].childNodes[0];
        optPicked.classList.add("selected");
        return () => {
        };
    }, []);

    return (
        <div className='VoucherWallet'>
            <Trace traceData={traceData} />
            <Row style={{ marginBottom: '100px' }}>
                <Col span={5} >
                    <UserPageNav type={'nav-voucher'} haveDropDown={""} />
                </Col>
                <Col span={1}></Col>
                <Col span={18}>
                    <div className='voucher-wallet-content'>
                        <div>
                            <p>Voucher</p>
                            <p>Những khuyến mãi dành cho bạn!</p>
                        </div>
                        <Menu
                            theme="#FFB0BD"
                            mode="horizontal"
                            selectedKeys={[`${opt}`]}
                            items={fakeNavVoucher}
                            className='option'
                            onClick={handleNav}
                        />
                        <ListVoucher data={fakeListVoucher} btn={false} type={''} />
                    </div>
                </Col>
            </Row>
        </div >
    )
}