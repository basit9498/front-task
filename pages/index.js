import React from 'react'
import Layout from '@/components/Layout'
import Heading from '@/components/common/Heading'
import Cards from '@/components/common/Cards'
import CardsSection from '@/components/common/Cards-section'
import CardSlider from '@/components/CardSlider'

const Home = () => {
  const bookMark = [
    { name: 'Edit PDF', src: '/image/pdf.svg' },
    { name: 'Copy PDF', src: '/image/crop.svg' },
    { name: 'Replace TXT', src: '/image/replace.svg' },
    { name: 'Rotate PDF', src: '/image/rotate.svg' },
  ]
  const covert_from_pdf = [
    { name: 'PDF to word', src: '/image/word.svg' },
    { name: 'PDF to PPT', src: '/image/ppt.svg' },
    { name: 'PDF to Excel', src: '/image/excel.svg' },
    { name: 'PDF to JPG', src: '/image/jpg.svg' },
    { name: 'PDF to TXT', src: '/image/txt.svg' },
  ]
  return (
    <>
      <Layout>
        <main className='custom-container mx-auto '>
          <CardsSection tite={'Your bookmark'} renderList={bookMark} />
          <CardSlider renderList={[...covert_from_pdf, ...covert_from_pdf]} />
          <CardsSection tite={'Covert from PDF'} renderList={covert_from_pdf} />
          <CardsSection tite={'Covert to PDF'}
            bookmark={true}
            renderList={covert_from_pdf} />
        </main>
      </Layout>
    </>
  )
}

export default Home