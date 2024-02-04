import React from 'react'
import Heading from './Heading'
import Cards from './Cards'

const CardsSection = ({ tite, renderList = [], bookmark = false }) => {
  return (
    <>
      <section className='my-14'>
        <Heading text={tite} />
        <section className='cards-section'>
          {renderList?.map((item, index) => <Cards key={index} bookmark={bookmark} data={item} />)}
        </section>
      </section>
    </>
  )
}

export default CardsSection