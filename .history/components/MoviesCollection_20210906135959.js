import MovieThumbnail from "./MovieThumbnail";

function MoviesCollection({ results , title}) {
  console.log(results);
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold">{title}</h2>
      <div>
        
      </div>
      { results.map((result) => (
        <MovieThumbnail key={results.id} result={result}/>
      ))}
    </div>
  )
}

export default MoviesCollection

