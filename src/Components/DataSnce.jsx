import propTypes from 'prop-types'
import Card from './Card'

const DataSnce = ( { data } ) => {
    const dsData = data.filter( item => item.head === "Data Science" )
  return (
      <div className='data-container'>
          {
              dsData.map( ( cardData, index ) => {
                  return <Card cardData={cardData} key={index} />
              }) 
          }
      
    </div>
  )
}

DataSnce.propTypes = {
    data: propTypes.array.isRequired
}
export default DataSnce
