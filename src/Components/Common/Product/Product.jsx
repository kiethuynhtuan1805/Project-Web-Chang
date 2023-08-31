import { Button, Col, Image, InputNumber, Modal, Row, Tooltip } from 'antd';
import './Product.scss';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Product({ dataProduct, type }) {
    // useNavigate
    const navigate = useNavigate();

    // useState
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function
    const linkTo = () => {
        return navigate('/products/1');
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='Product'>
            <div>
                <Image
                    width={'100%'}
                    height={type === 'home' ? '250px' : '200px'}
                    preview={false}
                    src={dataProduct.picSrc[0].src}
                    fallback={require('../../../assets/images/image-not-found.png')}
                    onClick={linkTo}
                />
                <div className='product-action' onClick={showModal}>
                    <div className='favorite-action'></div>
                    <Icon icon="pepicons-pop:line-y" width={32} height={32} />
                    <div className='cart-action'></div>
                </div>
                <Modal open={isModalOpen} onCancel={handleCancel} width={800} footer={null} style={{ top: '50px' }} className='modal-cart'>
                    <Row style={{ height: '100%', minHeight: '500px' }}>
                        <Col span={12}>
                            <div className='modal-picture-wrapper'>
                                <div className='modal-picture-main'>
                                    <Image
                                        width={'100%'}
                                        height={'400px'}
                                        src={dataProduct.picSrc[0].src}
                                        fallback={require('../../../assets/images/image-not-found.png')}
                                    />
                                </div>
                                <div className='modal-picture-sub' style={{ marginTop: '20px' }}>
                                    {
                                        [...dataProduct.picSrc].splice(1,).map((data, id) => {
                                            return (
                                                <Image
                                                    key={`picture-sub-${data.src}-${id}`}
                                                    src={data.src}
                                                    width={'80px'}
                                                    height={'100%'}
                                                    fallback={require('../../../assets/images/image-not-found.png')}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className='modal-content'>
                                <p className='title'>
                                    {dataProduct.name}
                                </p>
                                <p className='code'>
                                    Mã sản phẩm: {dataProduct.code}
                                </p>
                                <div className='price-wrapper'>
                                    <p className='price'>
                                        {`${dataProduct.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`}
                                    </p>
                                    <div className='favorite'>
                                        <div className='favorite-select'>
                                            <Icon icon="mdi:heart-outline" width={32} height={32} />
                                        </div>
                                        <div className='favorite-selected'>
                                            <Icon icon="mdi:heart" color='pink' width={32} height={32} />
                                        </div>
                                    </div>
                                </div>
                                <p className='inventory'>* Hiện tại cửa hàng còn <strong>{dataProduct.inventory}</strong> sản phẩm này.</p>
                                <div className='color-picked'>
                                    <p>Màu sắc:</p>
                                    <Tooltip title={'Hồng nhạt'} >
                                        <Icon icon="fluent:color-16-filled" color="pink" width={40} height={40} className='color-option selected' />
                                    </Tooltip>
                                    <Tooltip title={'Đỏ'} >
                                        <Icon icon="fluent:color-24-filled" color="red" width={40} height={40} className='color-option' />
                                    </Tooltip>
                                    <Tooltip title={'Đỏ'} >
                                        <Icon icon="fluent:color-24-filled" color="red" width={40} height={40} className='color-option' />
                                    </Tooltip>
                                    <Tooltip title={'Đỏ'} >
                                        <Icon icon="fluent:color-24-filled" color="red" width={40} height={40} className='color-option' />
                                    </Tooltip>
                                    <Tooltip title={'Đỏ'} >
                                        <Icon icon="fluent:color-24-filled" color="red" width={40} height={40} className='color-option' />
                                    </Tooltip>
                                    <Tooltip title={'Đỏ'} >
                                        <Icon icon="fluent:color-24-filled" color="red" width={40} height={40} className='color-option' />
                                    </Tooltip>
                                    <Tooltip title={'Đỏ'} >
                                        <Icon icon="fluent:color-24-filled" color="red" width={40} height={40} className='color-option' />
                                    </Tooltip>
                                </div>
                                <div className='type-picked'>
                                    <p>Kích thước/kiểu:</p>
                                    <div className='type-wrapper'>
                                        <Tooltip title={'12x12'} >
                                            <div className='type'>
                                                12x12
                                            </div>
                                        </Tooltip>
                                        <Tooltip title={'24x24'} >
                                            <div className='type'>
                                                24x24
                                            </div>
                                        </Tooltip>
                                        <Tooltip title={'24x24'} >
                                            <div className='type'>
                                                24x24
                                            </div>
                                        </Tooltip>
                                        <Tooltip title={'24x24'} >
                                            <div className='type'>
                                                24x24
                                            </div>
                                        </Tooltip>
                                        <Tooltip title={'24x24'} >
                                            <div className='type'>
                                                24x24
                                            </div>
                                        </Tooltip>
                                        <Tooltip title={'24x24'} >
                                            <div className='type'>
                                                24x24
                                            </div>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className='quantity'>
                                    <p>Số lượng</p>
                                    <InputNumber min={1} max={dataProduct.inventory} defaultValue={1} style={{ width: '180px', height: '40px', display: 'flex', alignItems: 'center', fontSize: '1rem' }} />
                                    <Button size={'large'} className='btn-cart'>
                                        Thêm vào giỏ hàng
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Modal>
            </div>
            <div >
                <div onClick={linkTo}>
                    <p>
                        {dataProduct.name}
                    </p>
                    <p>
                        {dataProduct.code}
                    </p>
                </div>
                <p>
                    {`${dataProduct.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`}
                </p>
            </div>
        </div>
    )
}