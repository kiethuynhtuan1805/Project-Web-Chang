import './WelcomePage.scss';
import React from 'react'
import { Image } from 'antd';
import { connect } from 'react-redux';
import { WelcomeProduct, FollowMeBanner, ContactBar } from 'Components';
import { mapDispatchToProps, mapStateToProps } from './rdWelcomePage';
import { fakeWelcomeProduct, fakeCompany } from 'data';
import { OnTopButton } from 'Components';

function WelcomePage(props) {
    return (
        <div className='WelcomePage'>
            <ContactBar />
            <div className='hero'>
                <Image
                    width={'100%'}
                    height={'100%'}
                    preview={false}
                    src={''}
                    fallback={require('assets/images/hero.jpg')}
                />
            </div>
            <div className='slogan'>
                <p>"{fakeCompany.slogan}"</p>
                <p>--- {fakeCompany.name} ---</p>
            </div>
            <div className='content'>
                {
                    fakeWelcomeProduct.map((item, id) => {
                        return (
                            <WelcomeProduct data={item} key={'Welcome-product-wrapper-' + id} />
                        )
                    })
                }
            </div>
            <div className='banner'>
                <FollowMeBanner />
            </div>
            <OnTopButton />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage)
