import './CommonHeader.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Col, Row, Tooltip, Image, Button } from 'antd';
import { Icon } from '@iconify/react';
import SearchBar from 'Components/Common/SearchBar/SearchBar';
import { fakeUser } from 'data';

function CommonHeader(props) {
    const navigate = useNavigate();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='CommonHeader container'>
            <Row align="middle" className={props.type === 'WP' ? `header ${isScrolled ? 'scrolled' : ''}` : `header`}>
                <Col span={3} className='logo' onClick={() => {
                    return navigate('/home');
                }}>
                    {
                        !isScrolled ? (
                            <Image
                                width={'160px'}
                                height={'100%'}
                                preview={false}
                                src={''}
                                fallback={require('../../../assets/images/logo1.jpg')}
                            />
                        ) : (
                            <a href='/home' style={{ margin: 0 }}>CHANG HOUSE</a>
                        )
                    }
                </Col>
                <Col span={3}></Col>
                <Col span={8} className='search-container'>
                    <SearchBar />
                </Col>
                {
                    props.type === 'WP' ? (
                        <Col span={10} className='header-content'>
                            <a href="/login">ĐĂNG NHẬP</a>
                            <a href="/signup">ĐĂNG KÝ</a>
                            <a href="/about-us">VỀ CHÚNG TÔI</a>
                            <a href="/privacy">CHÍNH SÁCH</a>
                        </Col>
                    ) : (
                        <Col span={10} className='header-content'>
                            <a href="/login">ĐĂNG NHẬP</a>
                            <a href="/signup">ĐĂNG KÝ</a>
                            <div className='icon-cart'>
                                <div className='cart-wrapper'>
                                    {
                                        fakeUser ? (
                                            fakeUser.cart.data.length === 0 ? (
                                                <Tooltip placement='bottom' title={'Bạn chưa thêm sản phẩm nào vào giỏ hàng!'}>
                                                    <Icon icon="solar:bag-heart-bold" color="pink" width={32} height={32} />
                                                    <input defaultValue={0} className='number-cart' disabled />
                                                </Tooltip>
                                            ) : (
                                                <>
                                                    <Icon icon="solar:bag-heart-bold" color="pink" width={32} height={32} />
                                                    <input defaultValue={fakeUser.cart.data.length} className='number-cart' disabled />
                                                </>
                                            )
                                        ) : (
                                            <Tooltip placement='bottom' title={'Bạn chưa thêm sản phẩm nào vào giỏ hàng!'}>
                                                <Icon icon="solar:bag-heart-bold" color="pink" width={32} height={32} />
                                                <input defaultValue={0} className='number-cart' disabled />
                                            </Tooltip>
                                        )
                                    }
                                    <div className='cart-dropdown'>
                                        <ul>
                                            {fakeUser.cart.data.map((item, id) => {
                                                return (
                                                    <li className='cart-item' key={`cart-item-${item}-${id}`}>
                                                        <Row style={{ height: '100%' }}>
                                                            <Col span={7} style={{ display: 'flex', alignItems: 'center' }}>
                                                                <Image
                                                                    width={'90px'}
                                                                    height={'90px'}
                                                                    preview={false}
                                                                    src={item.product.picSrc[0].src}
                                                                    fallback={require('../../../assets/images/logo1.jpg')}
                                                                />
                                                            </Col>
                                                            <Col span={15} style={{ display: 'flex', alignItems: 'center' }}>
                                                                <div className='cart-item-content'>
                                                                    <a className='title' href='/home/products/1'>
                                                                        {item.product.name}
                                                                    </a>
                                                                    <p className='price'>
                                                                        Đơn giá: {`${item.product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`}
                                                                    </p>
                                                                </div>
                                                            </Col>
                                                            <Col span={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                                                <div className='cart-item-action'>
                                                                    <p className='quantity'>
                                                                        x{item.quantity}
                                                                    </p>
                                                                    <div className='btn-delete'>
                                                                        <Icon icon="material-symbols:delete" width={20} height={20} />
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        <div className='cart-bottom'>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>Thành tiền</p>
                                                <p style={{ color: '#e53935' }}>{`${fakeUser.cart.totalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).split('VND')[0]}đ`}</p>
                                            </div>
                                            <Button size={'large'} className='btn-view-cart' onClick={() => {
                                                return navigate('/user/cart');
                                            }}>
                                                Xem giỏ hàng
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </div>
    )
}

export default CommonHeader;