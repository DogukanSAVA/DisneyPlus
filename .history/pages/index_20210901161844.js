import { useSession } from 'next-auth/client';
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {

const [session] = useSession

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


export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}