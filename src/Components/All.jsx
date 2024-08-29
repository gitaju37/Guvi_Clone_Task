import Card from "./Card"
import propTypes from 'prop-types'


const All = ( { data } ) => {
  return (
      <div className="all-container">
        
          {
              data.map( ( cardData, index ) => {
                  return <Card cardData={cardData} key={index} />
              } )
          }
      </div>
  )
}




All.propTypes = {
    data: propTypes.array.isRequired
}
export default All
