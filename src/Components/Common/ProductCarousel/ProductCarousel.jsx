import { useState } from 'react';
import './ProductCarousel.scss';
import { Product } from 'Components';
import { fakeListProduct } from 'data';
import { Icon } from '@iconify/react';

export default function ProductCarousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        const slides = document.querySelectorAll('.carousel-slide .product');
        const totalSlides = slides.length;

        let currentIndex = (index + 1) % totalSlides;
        console.log(currentIndex)
        setIndex(index + 1);
        document.querySelector('.carousel-container').style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    const prevSlide = () => {
        const slides = document.querySelectorAll('.carousel-slide .product');
        const totalSlides = slides.length;

        let currentIndex = (index - 1 + totalSlides) % totalSlides;
        setIndex(index - 1);
        document.querySelector('.carousel-container').style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    return (
        <div className="ProductCarousel">
            <div className="carousel-container">
                <div className="carousel-slide">
                    {
                        fakeListProduct.data.map((item, index) => {
                            return (
                                <div className='product' key={`product-cart-${index}`}>
                                    <Product dataProduct={item} type={''} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Icon icon="iconamoon:player-previous-fill" onClick={prevSlide} className='carousel-button left' width={32} height={32} />
            <Icon icon="iconamoon:player-next-fill" onClick={nextSlide} className='carousel-button right' width={32} height={32} />
        </div>
    )
};