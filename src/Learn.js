import React from 'react'

export default function Learn(props) {
    const { close } = props

    return(
        <button onClick={close}>Close</button>
    );
}