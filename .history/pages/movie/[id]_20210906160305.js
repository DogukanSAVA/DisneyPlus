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
https://api.themoviedb.org/3/movie/${}?api_key=${process.env.API_KEY}&language=en-US`);
}
