import { useState, useEffect } from 'react';
import './ProductCarousel.scss';
import { Product } from 'Components';
import { fakeListProduct } from 'data';
import { Icon } from '@iconify/react';

export default function ProductCarousel() {
    const [index, setIndex] = useState(0);
    const [productsPerSlide, setProductsPerSlide] = useState(4);

    const nextSlide = () => {
        const slides = document.querySelectorAll('.carousel-slide .product');
        const totalSlides = slides.length / 4;

        let currentIndex = (index + 1) % totalSlides;
        console.log(currentIndex)
        if (currentIndex === 0) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
        document.querySelector('.carousel-container').style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    const prevSlide = () => {
        const slides = document.querySelectorAll('.carousel-slide .product');
        const totalSlides = slides.length;

        let currentIndex = (index - 1 + totalSlides) % totalSlides;
        setIndex(index - 1);
        document.querySelector('.carousel-container').style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 2000) {
                setProductsPerSlide(5); // For large screens
            } else if (width >= 1200) {
                setProductsPerSlide(4);
            } else if (width >= 768) {
                setProductsPerSlide(3); // For tablets
            } else if (width >= 576) {
                setProductsPerSlide(2); // For small screens
            } else {
                setProductsPerSlide(1); // For mobile devices
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call initially to set correct products per slide
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="ProductCarousel">
            <div className="carousel-container">
                <div className="carousel-slide">
                    {
                        fakeListProduct.data.map((item, index) => {
                            return (
                                <div className='product' key={`product-cart-${index}`} style={{ flex: `0 0 ${100 / productsPerSlide}%` }}>
                                    <Product dataProduct={item} type={''} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {
                index !== 0 && (
                    <Icon icon="iconamoon:player-previous-fill" onClick={prevSlide} className='carousel-button left' width={32} height={32} />
                )
            }
            <Icon icon="iconamoon:player-next-fill" onClick={nextSlide} className='carousel-button right' width={32} height={32} />
        </div>
    )
};