import { fetchGetMovieDetailsById } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetchGetMovieDetailsById(params.movieId);
      setMovie(response);
    };
    fetchMovie();
  }, [params.movieId]);

  return (
    <>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
            width={240}
          />
          <h1>{movie.original_title}</h1>
          <p>User score: {Math.round(Number(movie.vote_average) * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {Object.values(movie.genres.map(genre => genre.name)).join(', ')}
          </p>
        </div>
      )}
    </>
  );
};
