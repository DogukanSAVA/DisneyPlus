import { useSession } from 'next-auth/client';
import Head from 'next/head'
import Header from '../components/Header'

export default function Home({session}) {

const [session] = useSession();

  return (
    <div className="">
      <Head>
        <title>Disney</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

   <Header/>
   {!session? (
     <Hero/>
   ): (

<main>APP</main>

   )}
    </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}