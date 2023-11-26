import { fetchSerchMovies } from 'api';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const [params] = useSearchParams();
  const query = params.get('query') ?? '';

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await fetchSerchMovies(query);
      setMovies(movies.results);
    };
    fetchMovies();
  }, [query]);

  return (
    <>
      <SearchMovie />
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.key}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
