import React from 'react'

export default function ProductItem(props) {
    const containerClass = `home__products-container home__products-container--${props.index}`;
    const photoClass = `home__products-photo home__products-photo--${props.index}`

    return (
        <div className={containerClass}>
            <div onClick={props.onModalToggle} className={photoClass} />
            <div className="home__products-name">{props.name}</div>
            <button onClick={props.onModalToggle} className="home__products-view">View</button>
        </div>
    )
}
