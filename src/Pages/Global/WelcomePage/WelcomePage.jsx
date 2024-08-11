import './WelcomePage.scss';
import React from 'react'
import { Image } from 'antd';
import { connect } from 'react-redux';
import { WelcomeProduct, FollowMeBanner, ContactBar } from 'Components';
import { mapDispatchToProps, mapStateToProps } from './rdWelcomePage';
import { fakeWelcomeProduct, fakeCompany } from 'data';
import { CommonHeader, OnTopButton, UserFooter } from 'Components';
import { Footer } from 'antd/es/layout/layout';

const footerStyle = {
    textAlign: 'center',
    color: '#886060',
    fontWeight: 'bold',
    backgroundColor: '#ffffff',
    paddingLeft: 0,
    paddingRight: 0,
};

function WelcomePage(props) {
    return (
        <div className='WelcomePage container'>
            <div className='container-wrapper'>
                <ContactBar />
                <CommonHeader type="WP" />
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
                <div className='footer'>
                    <Footer style={footerStyle}>
                        <UserFooter />
                    </Footer>
                    <div className='copy-right'>
                        Copyright © 2023 . All Rights Reserved
                    </div>
                </div>
                <OnTopButton />
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage)
