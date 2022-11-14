import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="crave the cave" />
        <p className="description">
          "At crave the cave we are always on a crave to find a great cave!"
        </p>
      </main>

      <Footer />
    </div>
  )
}
