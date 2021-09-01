import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Disney</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

   <Header></Header>
    </div>
  )
}
