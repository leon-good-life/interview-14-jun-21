import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SearchForm from './components/SearchForm';
import Movie from './components/Movie';
import MovieDetails from './components/MovieDetails';

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 1200px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 800px) {
    grid-template-columns: auto;
  }
  column-gap: 100px;
  row-gap: 100px;
  padding: 100px;
`;

function App() {
  const movies = useSelector((state) => state.movies);
  const movieDetails = useSelector((state) => state.movieDetails);

  if (movieDetails !== null) {
    return <MovieDetails {...{ movieDetails }} />;
  }
  return (
    <div>
      <SearchForm />
      <MoviesGrid>
        {movies.map((movie) => (
          <Movie
            key={movie.imdbID}
            name={movie.Title}
            imgUrl={movie.Poster}
            type={movie.Type}
            year={movie.Year}
            id={movie.imdbID}
          />
        ))}
      </MoviesGrid>
    </div>
  );
}

export default App;
