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
        <div className='GlobalHome container'>
            {
                !isLoading && (
                    <>
                        <Hero />
                        <div className='container-wrapper'>
                            <div className='home-content'>
                                {
                                    fakeApiHome.map((data, id) => {
                                        return (
                                            <div key={`home-${data.name}-${id}`} className='home-data'>
                                                <p className='home-data-name'>{data.name}</p>
                                                <ListProduct data={data.data} type={'home'} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <FollowMeBanner />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHome)
