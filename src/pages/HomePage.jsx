import { fetchTrendMovies } from 'api';
import { useEffect, useState } from 'react';
import { TrendList } from 'components/TrendList/TrendList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const FetchMovies = async () => {
      try {
        const response = await fetchTrendMovies();
        setMovies(response.results ?? []);
      } catch (error) {}
    };
    FetchMovies();
  }, []);

  return (
    <>
      {movies.length > 0 ? <h1>Trending Today</h1> : <p>ERROR</p>}
      {movies.length > 0 && <TrendList movies={movies} />}
    </>
  );
}
