import './GlobalHome.scss';
import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from './rdGlobalHome'
import { Hero, ListProduct, FollowMeBanner } from 'Components';
import { fakeApiHome } from 'data';


function GlobalHome(props) {
    return (
        <div className='GlobalHome'>
            <Hero />
            <div className='container'>
                <div className='home-content'>
                    {
                        fakeApiHome.map((data, id) => {
                            return (
                                <div key={`home-${data.name}-${id}`} className='home-data'>
                                    <p className='home-data-name'>{data.name}</p>
                                    <ListProduct data={data.data} />
                                </div>
                            )
                        })
                    }
                </div>
                <FollowMeBanner />
            </div>
            {/* {JSON.stringify(props)}
            <button onClick={props.GetUser}>Click Me</button> */}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHome)
