import './GlobalHome.scss';
import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from './rdGlobalHome'
import { Hero, ListProduct, FollowMeBanner } from 'Components';


function GlobalHome(props) {
    return (
        <div className='GlobalHome'>
            <Hero />
            <div className='container'>
                <div className='home-content'>
                    <div>
                        SẢN PHẨM MỚI
                        <ListProduct />
                    </div>
                    <div>
                        SẢN PHẨM MỚI
                        <ListProduct />
                    </div>
                    <div>
                        SẢN PHẨM MỚI
                        <ListProduct />
                    </div>
                </div>
                <FollowMeBanner />
            </div>
            {/* {JSON.stringify(props)}
            <button onClick={props.GetUser}>Click Me</button> */}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHome)
