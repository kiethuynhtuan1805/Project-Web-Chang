import { Trace } from 'components';
import './SettingPrivacy.scss'
import { Col, Row } from 'antd';
import { UserPageNav } from 'components';
import { useState } from 'react';

export default function SettingPrivacy() {
    const traceData = {
        data: ["Trang chủ", "Thông tin tài khoản", "Thiết lập riêng tư"],
        route: ['/home', "/user"]
    };

    const [btnDelete, setBtnDelete] = useState(false);

    const handleDelete = () => {
        setBtnDelete(true);
    };

    return (
        <div className='SettingPrivacy'>
            <Trace traceData={traceData} />
            <Row style={{ marginBottom: '100px' }}>
                <Col span={5} >
                    <UserPageNav type={'nav-setting-privacy'} haveDropDown={"nav-info"} />
                </Col>
                <Col span={1}></Col>
                <Col span={18}>
                    <div className='setting-privacy-content'>
                        <div>
                            <p>Thiết lập riêng tư</p>
                            <p>Những thiết lập riêng tư dành cho bạn!</p>
                        </div>
                        {
                            !btnDelete ? (
                                <div className='request-delete'>
                                    <p>Yêu cầu xóa tài khoản</p>
                                    <div onClick={handleDelete}>
                                        Xóa bỏ
                                    </div>
                                </div>
                            ) : (
                                <div className='confirm-delete'>
                                    <p>
                                        Nhấn "Tiếp tục" đồng nghĩa với việc bạn đồng ý với các điều khoản sau đây:
                                    </p>
                                    <ul>
                                        <li>
                                            Sau khi xác nhận xóa tài khoản, bạn sẽ không thể đăng nhập cũng như khôi phục lại tài khoản. Vui lòng cân nhắc trước khi xác nhận xóa.
                                        </li>
                                        <li>
                                            Toàn bộ Xu trong kho Chang Xu của bạn sẽ mất
                                        </li>
                                        <li>
                                            Việc xóa tài khoản sẽ không thực hiện được nếu bạn có đơn hàng mua/bán chưa hoàn tất, hoặc các vấn đề liên quan đến pháp lý chưa được xử lý xong (nếu có).
                                        </li>
                                        <li>
                                            Sau khi xoá tài khoản, Chang House có thể lưu trữ một số dữ liệu của bạn theo quy định tại Chính sách bảo mật của Chang và quy định pháp luật có liên quan.
                                        </li>
                                        <li>
                                            Chang bảo lưu quyền từ chối bất cứ yêu cầu tạo tài khoản mới nào từ bạn trong tương lai.
                                        </li>
                                        <li>
                                            Việc xoá tài khoản không đồng nghĩa với việc loại bỏ tất cả trách nhiệm và nghĩa vụ liên quan của bạn trên tài khoản đã xóa.
                                        </li>
                                    </ul>
                                    <div>
                                        Tiếp tục
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </Col>
            </Row>
        </div >
    )
}