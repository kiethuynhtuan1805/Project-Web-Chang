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
                <div className='product-action'>
                    <div className='favorite-action'></div>
                    <Icon icon="pepicons-pop:line-y" width={32} height={32} />
                    <div className='cart-action' onClick={showModal}></div>
                </div>
                <Modal open={isModalOpen} onCancel={handleCancel} width={800} footer={null} style={{ top: '30px' }} className='modal-add-cart'>
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
                                    <div style={{ display: 'flex' }}>
                                        {
                                            dataProduct.color.map(color => (
                                                <Tooltip title={color.name} color={color.type} key={'product-color-' + color.type}>
                                                    <div className='color'>
                                                        <Icon icon="fluent:color-16-filled" color={color.type} width={40} height={40} className='color-option selected' />
                                                    </div>
                                                </Tooltip>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='type-picked'>
                                    <p>Kích thước/kiểu:</p>
                                    <div className='type-wrapper'>
                                        <div style={{ display: 'flex' }}>
                                            {
                                                dataProduct.classify.map(classify => (
                                                    <Tooltip title={classify} >
                                                        <div className='type'>
                                                            {classify}
                                                        </div>
                                                    </Tooltip>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='quantity'>
                                    <p>Số lượng</p>
                                    <InputNumber min={1} max={dataProduct.inventory} defaultValue={1} style={{ width: '180px', height: '40px', display: 'flex', alignItems: 'center', fontSize: '1rem' }} />
                                    <Button size={'large'} className='btn-cart'>
                                        Thêm vào giỏ hàng
                                    </Button>
                                    <Button size={'large'} className='btn-view'>
                                        Xem chi tiết
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