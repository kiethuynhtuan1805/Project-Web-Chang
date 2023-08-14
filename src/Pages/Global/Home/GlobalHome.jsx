import './GlobalHome.scss';
import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from './rdGlobalHome'

function GlobalHome(props) {
    return (
        <div className='GlobalHome'>
            {JSON.stringify(props)}
            <button onClick={props.GetUser}>Click Me</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHome)
