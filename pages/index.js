import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="favicon/ico"></link>
    </Head>
    <div className="main">
      <h2>volkan Altuğ</h2>
      <div>
        <Link href="https://www.twitter.com/wolkan777"><a>Twitter</a></Link><br></br>
        <Link href="https://www.instagram.com/wolkan777"><a>Instagram</a></Link>
      </div>
    </div>
    <div className="blog">
      <h2>
        <Link href="/volkan">
          <a>Lorem Ipsum Nedir?</a>
        </Link>
      </h2>
      <div>
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak
        üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı
        sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış,
        aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
        sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        </div>
      <div>11.02.2020</div>
    </div>
    <div className="blog">
      <h2>
        <Link href="#">
          <a>Lorem Ipsum Nedir?</a>
        </Link>
      </h2>
      <div>
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak
        üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı
        sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış,
        aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
        sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        </div>
      <div>11.02.2020</div>
    </div>
    <div className="blog">
      <h2>
        <Link href="#">
          <a>Lorem Ipsum Nedir?</a>
        </Link>
      </h2>
      <div>
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak
        üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı
        sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış,
        aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
        sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        </div>
      <div>11.02.2020</div>
    </div>
    <style jsx>{`
      
    `}</style>
  </div >
)

export default Home
