import React from 'react'

const ChildComponent = (props) => {
    return (
        <button onClick={() => props.greetHandler('Sodhi Singh Jr.')}>Greet parent</button>
    )
}

export default ChildComponent