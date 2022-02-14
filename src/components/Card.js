import React from "react";

const Card = (props) => {
    let badgeText = props.data.openSpots === 0 ? "SOLD OUT" : "ONLINE"
    return (
        <div className="card">
            {badgeText && <p className="card-badge">{badgeText}</p>}
            <img src={`images/${props.data.img}`} className="card-image" alt={props.data.title} />
            <div className="card-stats">
                <span><img src="images/star.png" className="card-star-image" alt="rating star" /></span>
                <span>{props.data.rating}</span>
                <span className="card-review-count">({props.data.reviewCount})</span>
                <span className="card-country">-{props.data.country}</span>
            </div>
            <p>{props.data.title}</p>
            <p><span className="bold-text">From ${props.data.price}</span> / person</p>
        </div>
    )
}

export default Card;