import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import Brands from "../components/brand";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MoviesCollection from "../components/MoviesCollection";
import ShowsCollection from "../components/ShowsCollection";
import Slider from "../components/Slider";

export default function Home({Session}) {

const [session] = useSession();
return (
  <div>
    <Head>
      <title>Disney+</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    {!session ? (
      <Hero />
    ) : (
      <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
        <Slider />
        <Brands />
        <MoviesCollection/>
        <ShowsCollection/>
   
      </main>
    )}
  </div>
);
}

export async function getServerSideProps
(context) {
  const session = await getSession(context);

const[popularMoviesRes, popularShowsRes, top_ratedMoviesRes, top_ratedShowsRes] = await Promise.all([
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=<<api_key=${&language=en-US&page=1}>>&language=en-US&page=1`),
]);

  return{
    props: {
      session,
    },
  };
}
