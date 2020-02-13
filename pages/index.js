import React from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'


const Home = ({ posts }) => (
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
    {posts.map(post => (
      <div className="blog">
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-content" >
          <ReactMarkdown source={post.details} />
        </div>
        <div className="blog-date" >{post.date}</div>
      </div>))};

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

Home.getInitialProps = async ctx => {
  const res = await fetch('http://localhost:3000/api/posts')
  const json = await res.json()
  return { posts: json.posts }
}

export default Home
