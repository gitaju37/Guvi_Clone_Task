import propTypes from 'prop-types'
import Card from './Card'

const Fsd = ( { data } ) => {
    const fsdData =  data.filter( item => item.head === "Full Stack Developement" ) 
  return (
      <div className="fsd-container">
          {
              fsdData.map( ( cardData, index ) => {
                  return <Card key={index} cardData={cardData} />
              })
          }
      
    </div>
  )
}

Fsd.propTypes = {
    data: propTypes.array.isRequired
}
export default Fsd
