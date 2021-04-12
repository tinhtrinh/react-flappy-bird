import React from 'react';
import {connect} from 'react-redux'

const Counter = ({x, pipes}) => {
    const passedPipes = pipes.filter( ({topHeight}, i) => x + i*200 < 120 )

    console.log(passedPipes)

    return <div style={{
        position: 'absolute',
        color: 'white',
        fontSize: 30,
        fontFamily: 'Roboto',
        zIndex: 100
    }}
    >{passedPipes.length}</div>;
}

const mapStateToProps = ({pipe}) => ({x: pipe.x ,pipes: pipe.pipes})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);