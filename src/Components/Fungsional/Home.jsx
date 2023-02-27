import React from 'react'
import Produk from '../Class/Produk'
import Blog from './Blog'

const Home = () => {
  return (
    <div>
        <Produk nama='ZX25R' stock='10' harga='120.000.000'/>
        <Produk nama='CBR250' stock='12' harga='77.000.000'/>
        <Produk nama='Benelli Motobi 152' stock='5' harga='28.000.000'/>
        <Produk nama='Ninja 250fi' stock='15' harga='70.000.000'/>
        <Produk nama='Sepatu' stock='20' harga='1.000.000'/>
        <Produk nama='Laptop' stock='3' harga='2.000.000'/>
        {/* <Blog tanggal='12 Juni 2023' judul='Belajar React' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'/>
        <Blog tanggal='13 Juni 2023' judul='Belajar Laravel' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'/>
        <Blog tanggal='14 Juni 2023' judul='Belajar PHP' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'/>
        <Blog tanggal='15 Juni 2023' judul='Belajar Golang' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'/> */}
    </div>
  )
}

export default Home