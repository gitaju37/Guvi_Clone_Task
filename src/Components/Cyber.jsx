import propTypes from 'prop-types'
import Card from './Card'

const Cyber = ( { data } ) => {
    const cyberData = data.filter( item => item.head === "Cyber Security" )
  return (
    <div className='cyber-container'>
          {
              cyberData.map( ( cardData, index ) => {
                return <Card cardData={cardData} key={index}  />
            })  
      }
    </div>
  )
}

Cyber.propTypes = {
    data: propTypes.array.isRequired
}
export default Cyber
