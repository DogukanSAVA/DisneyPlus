function Movie() {
          return (
                    <div>
                           Movie   
                    </div>
          )
}

export default Movie

export async function getServerSideProps(context) {
const { id } = context.query;

const request = await fetch( `https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US`);
}
