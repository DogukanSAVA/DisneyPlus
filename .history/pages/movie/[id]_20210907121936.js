import Head from "next/dist/shared/lib/head";

function Movie({ result }) {
          return (
                    <div>
                              <Head>
        <title>{result.title || result.or}   </title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
                    </div>
          )
}

export default Movie

export async function getServerSideProps(context) {
const { id } = context.query;

const request = await fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`).then((response) => response.json());

return {
          props:{
                    result:request,
          },
};
}
