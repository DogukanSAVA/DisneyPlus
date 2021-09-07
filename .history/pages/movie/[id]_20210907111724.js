function Movie(result) {
          console.log(result);
          return (
                    <div>
                    </div>
          )
}

export default Movie

export async function getServerSideProps(context) {
const { id } = context.query;

const request = await fetch( `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${&language=en-US`).then((response) => response.json());

return {
          props:{
                    result:request,
          },
};
}
