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

const request = await fetch( `
`).then((response) => response.json());

return {
          props:{
                    result:request,
          },
};
}
