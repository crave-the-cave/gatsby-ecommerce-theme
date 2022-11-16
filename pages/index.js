import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
         <title>crave the cave</title>
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <img src="/logo.svg" alt="crave the cave logo" height="400px" classname="logoo"/>
      </main>
    </div>
  )
}
