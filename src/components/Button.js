import React from 'react'

export default function Button(props) {
    return (
        <button className={`button button__${props.size}`}>
            {props.arrow ? <span>&larr; {props.text}</span> : props.text}
        </button>
    )
}
