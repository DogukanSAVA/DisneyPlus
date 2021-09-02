import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

export default function Home({Session}) {

const [session] = useSession();

  return (
    <div className="">
      <Head>
        <title>Disney</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

   <Header/>
   {!Session? (
     <Hero/>
   ): (
         <main>
        <Slider></Slider>
          </main>

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