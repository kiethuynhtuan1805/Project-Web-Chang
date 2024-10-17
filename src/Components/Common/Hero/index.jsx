import './Hero.scss';
import { Carousel } from 'antd';
import { fakeHero } from 'data';
import { useEffect } from 'react';

const contentStyle = {
    height: '420px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
};

export default function Hero() {
    const apiHero = fakeHero.split('\n');

    useEffect(() => {
        return () => {
        };
    }, []);

    return (
        <div className='Hero'>
            <div className='hero-main'>
                <Carousel autoplay effect="fade">
                    {
                        apiHero.map((data, id) => {
                            return (
                                <div key={`hero-${id}`}>
                                    <div style={{
                                        ...contentStyle, background: `url(${data}) center center/cover`
                                    }}></div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
            <div className='hero-sub'>
                <div id='hero-sub-1'>

                </div>
                <div id='hero-sub-2'>

                </div>
            </div>
        </div >
    )
}