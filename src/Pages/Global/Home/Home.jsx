import './Home.scss';
import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from './rdHome'

function Home(props) {
    return (
        <div className='Home'>
            {JSON.stringify(props)}
            <button onClick={props.GetUser}>Click Me</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
