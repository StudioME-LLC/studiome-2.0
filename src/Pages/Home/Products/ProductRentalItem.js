import React from 'react'

export default function ProductItem(props) {
    const containerClass = `home__products-rentals home__products-rentals--${props.index}`;
    const photoClass = `home__products-photo home__products-photo--${props.index}`

    return (
        <div onClick={props.impression} className={containerClass}>
            <div onClick={props.onModalToggle} className={photoClass} />
            <p className="home__products-name p-l">{props.name}</p>
            <button onClick={props.onModalToggle} className="home__products-view">View</button>
        </div>
    )
}
