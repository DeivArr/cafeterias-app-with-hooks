import React from 'react'

const ComponentTest = (props) => {
    return (
        <div>   
            {
                <p> { props.list } </p>
            }
        </div>
    )
}

export default ComponentTest;