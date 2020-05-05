import React from 'react'

export default function ProductItem(props) {
    return (
        <div onClick={props.impression} className={`rentals__card rentals__card--${props.index}`}>
            <div onClick={props.onModalToggle} className={`rentals__photo rentals__photo--${props.index}`} />
            <p className="rentals__name p-l">{props.name}</p>
            <button onClick={props.onModalToggle} className="rentals__button button button--s">View</button>
        </div>
    )
}
