import propTypes from 'prop-types'

const Card = ( { cardData } ) => {

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={cardData.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cardData.head}</h5>
                <p className="card-text">{cardData.content}</p>
                <span>{cardData.date} 2024</span>
            </div>
            <button type="button" className="btn btn-primary">READ MORE</button>
        </div>
    )
}

Card.propTypes = {
    cardData: propTypes.array.isRequired
}

export default Card
