import { Trace } from 'Components';
import './SettingNotification.scss'
import { Col, Row, Switch } from 'antd';
import { UserPageNav } from 'Components';
import { useState, useEffect } from 'react';

export default function SettingNotification() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Cài đặt thông báo"],
        route: ['/home', "/user"]
    };

    const [notificationEmail, setNotificationEmail] = useState(false);
    const [notificationSMS, setNotificationSMS] = useState(false);
    const [order, setOrder] = useState(false);
    const [sale, setSale] = useState(false);
    const [surveyEmail, setSurveyEmail] = useState(false);
    const [surveySMS, setSurveySMS] = useState(false);

    const onChangeEmail = (checked) => {
        const notificationEmail = document.getElementById('notification-email');
        if (!checked) {
            notificationEmail.classList.add('hidden');
            onChangeOrder(false);
            onChangeSurveyEmail(false);
            onChangeSale(false);
            setNotificationEmail(false);
        } else {
            notificationEmail.classList.remove('hidden');
            setNotificationEmail(true);
        };
    };

    const onChangeSMS = (checked) => {
        const notificationSMS = document.getElementById('notification-sms');
        if (!checked) {
            notificationSMS.classList.add('hidden');
            onChangeSurveySMS(false);
            setNotificationSMS(false);
        } else {
            notificationSMS.classList.remove('hidden');
            setNotificationSMS(true);
        };
    };

    const onChangeOrder = (checked) => {
        setOrder(checked);
    };

    const onChangeSurveyEmail = (checked) => {
        setSurveyEmail(checked);
    };

    const onChangeSale = (checked) => {
        setSale(checked);
    };

    const onChangeSurveySMS = (checked) => {
        setSurveySMS(checked);
    };

    useEffect(() => {


        return () => {

        };
    }, []);

    return (
        <div className='SettingNotification'>
            <Trace traceData={traceData} />
            <Row style={{ marginBottom: '100px' }}>
                <Col span={5} >
                    <UserPageNav type={'nav-setting-notification'} haveDropDown={"nav-info"} />
                </Col>
                <Col span={1}></Col>
                <Col span={18}>
                    <div className='setting-notification-content'>
                        <div>
                            <p>Cài đặt thông báo</p>
                            <p>Thiết lập một số thông báo của bạn!</p>
                        </div>
                        <div>
                            <div className='notification-part'>
                                <div className='notification-main-wrapper'>
                                    <div className="notification-content-wrapper">
                                        <div className='notification-content'>
                                            <p className='title'>
                                                Email thông báo
                                            </p>
                                            <p className='content'>
                                                Thông báo và nhắc nhở quan trọng về tài khoản sẽ không thể bị tắt
                                            </p>
                                        </div>
                                        <Switch checked={notificationEmail} onChange={onChangeEmail} />
                                    </div>
                                </div>
                                <div className={`notification-extra-wrapper ${notificationEmail ? '' : 'hidden'}`} id='notification-email'>
                                    <div className="notification-content-wrapper">
                                        <div className='notification-content'>
                                            <p className='title'>
                                                Cập nhật đơn hàng
                                            </p>
                                            <p className='content'>
                                                Cập nhật về tình trạng vận chuyển của tất cả các đơn hàng
                                            </p>
                                        </div>
                                        <Switch checked={order} onChange={onChangeOrder} />
                                    </div>
                                    <div className="notification-content-wrapper">
                                        <div className='notification-content'>
                                            <p className='title'>
                                                Khuyến mãi
                                            </p>
                                            <p className='content'>
                                                Cập nhật về các ưu đãi và khuyến mãi sắp tới
                                            </p>
                                        </div>
                                        <Switch checked={sale} onChange={onChangeSale} />
                                    </div>
                                    <div className="notification-content-wrapper">
                                        <div className='notification-content'>
                                            <p className='title'>
                                                Khảo sát
                                            </p>
                                            <p className='content'>
                                                Đồng ý nhận khảo sát để cho chúng tôi được lắng nghe bạn
                                            </p>
                                        </div>
                                        <Switch checked={surveyEmail} onChange={onChangeSurveyEmail} />
                                    </div>
                                </div>
                            </div>
                            <div className='notification-part'>
                                <div className='notification-main-wrapper'>
                                    <div className="notification-content-wrapper">
                                        <div className='notification-content'>
                                            <p className='title'>
                                                Thông báo SMS
                                            </p>
                                            <p className='content'>
                                                Thông báo và nhắc nhở quan trọng về tài khoản sẽ không thể bị tắt
                                            </p>
                                        </div>
                                        <Switch checked={notificationSMS} onChange={onChangeSMS} />
                                    </div>
                                </div>
                                <div className={`notification-extra-wrapper ${notificationSMS ? '' : 'hidden'}`} id='notification-sms'>
                                    <div className="notification-content-wrapper">
                                        <div className='notification-content'>
                                            <p className='title'>
                                                Khuyến mãi
                                            </p>
                                            <p className='content'>
                                                Cập nhật về các ưu đãi và khuyến mãi sắp tới
                                            </p>
                                        </div>
                                        <Switch checked={surveySMS} onChange={onChangeSurveySMS} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
    )
}