import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'

const Home = () => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="favicon/ico"></link>
    </Head>
    <div className="main">
      <h2 className="main-title">Volkan Altuğ</h2>
      <div className="main-social-links">
        <Link href="https://www.twitter.com/wolkan777"><a className="social-link">Twitter</a></Link>
        <Link href="https://www.instagram.com/wolkan777"><a className="social-link">Instagram</a></Link>
      </div>
    </div>
    <div className="blog">
      <h2 className="blog-title">
        <Link href="/volkan">
          <a className="blog-title-link">Lorem Ipsum Nedir?</a>
        </Link>
      </h2>
      <div className="blog-content" >
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak
        üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı
        sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış,
        aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
        sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        </div>
      <div className="blog-date" >11.02.2020</div>
    </div>
    <div className="blog">
      <h2 className="blog-title">
        <Link href="/volkan">
          <a className="blog-title-link">Lorem Ipsum Nedir?</a>
        </Link>
      </h2>
      <div className="blog-content" >
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak
        üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı
        sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış,
        aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
        sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        </div>
      <div className="blog-date" >11.02.2020</div>
    </div>
    <div className="blog">
      <h2 className="blog-title">
        <Link href="/volkan">
          <a className="blog-title-link">Lorem Ipsum Nedir?</a>
        </Link>
      </h2>
      <div className="blog-content" >
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak
        üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı
        sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış,
        aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
        sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        </div>
      <div className="blog-date" >11.02.2020</div>
    </div>

  <style jsx>{`
    
    .container{
      max-width:650px;
      width:100%;
      margin:0 auto;
    }
    .main{
      text-align:center;
      margin: 96px 0;
    }
    .main-title{
      font-size:50px;
    }
    .social-link{
      margin-right:10px;
    }
    .blog-date{
      color:red;
      text-align:right;
      margin:12px 0 48px 0;
    }
    a{
      text-decoration:none;
    }
    
    
      
    `}</style>
  </div >
)

export default Home
