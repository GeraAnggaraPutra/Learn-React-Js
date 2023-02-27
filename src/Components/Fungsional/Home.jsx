import React from 'react'
import Blog from './Blog'

const Home = () => {
  return (
    <div>
        <Blog tanggal='12 Juni 2023' judul='Belajar React' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'/>
        <Blog tanggal='13 Juni 2023' judul='Belajar Laravel' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'/>
        <Blog tanggal='14 Juni 2023' judul='Belajar PHP' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'/>
        <Blog tanggal='15 Juni 2023' judul='Belajar Golang' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'/>
    </div>
  )
}

export default Home