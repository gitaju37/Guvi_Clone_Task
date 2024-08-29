import propTypes from 'prop-types'
import Card from './Card'

const BlkChain = ( { data } ) => {
    const blkChainData = data.filter( item => item.head === "BlockChain" )
  return (
    <div className='blkchain-container'>
          {
              blkChainData.map( ( cardData, index ) => {
                  return <Card cardData={cardData} key={index } />
              })
      }
    </div>
  )
}

BlkChain.propTypes = {
    data: propTypes.array.isRequired
}
export default BlkChain
