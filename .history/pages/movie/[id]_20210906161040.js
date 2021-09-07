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

const request = await fetch( `
https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&append_to_response=videos`).then((response) => );
}
