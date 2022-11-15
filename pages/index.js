import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        background-image: url('/Banner.jpg');
      </Head>

      <main>
        <Header title="crave the cave" />
      </main>
    </div>
  )
}
