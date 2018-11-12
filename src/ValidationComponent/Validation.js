
import React from 'react'

const validation = (props) => {
    let text = 'Text long enough'

    if (props.length <= 5) {
        text = 'text too short'
    }

    return (
        <div>
            {text}
        </div>
    )
}

export default validation;
