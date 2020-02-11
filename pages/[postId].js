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
   
    <style jsx>{`
      
    `}</style>
  </div >
)

export default Home
