import { getSession, session, useSession } from "next-auth/client";
import Head from "next/dist/shared/lib/head";     
import Header from "../../components/Header";

function Movie({ result }) {

         // const[session] = useSession();
          return (
                    <div>
          <Head>
        <title>{result.title || result.original_name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Header/>
   {!session ? }

export default Movie

export async function getServerSideProps(context) {

const session = await getSession(context);
          const { id } = context.query;

          const request = await fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`).then((response) => response.json());

return {
          props:{
                    session,
                    result:request,
          },
};
}
