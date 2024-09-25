import './GlobalHome.scss';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from './rdGlobalHome'
import { Hero, ListProduct, FollowMeBanner } from 'Components';
import { fakeApiHome } from 'data';


function GlobalHome(props) {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        return () => {
        };
    }, []);

    return (
        <div className='GlobalHome'>
            {
                !isLoading && (
                    <>
                        <Hero />
                        <div className='home-content'>
                            {
                                fakeApiHome.map((data, id) => {
                                    return (
                                        <div key={`home-${id}`} className='home-data'>
                                            <p className='home-data-name'>{data.name}</p>
                                            <ListProduct data={data.data} type={'home'} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <FollowMeBanner />
                    </>
                )
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHome)
