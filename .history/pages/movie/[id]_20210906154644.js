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

const request = await fetch();
}
