import { fetchGetMovieCreditsById } from 'api';
import { ActorCard } from 'components/ActorCard/ActorCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieCast = () => {
  const [actors, setActors] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetchGetMovieCreditsById(params.movieId);
      setActors(response.cast);
    };
    fetchMovie();
  }, [params.movieId]);

  return (
    <>
      {actors.length > 0 && (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <ActorCard actor={actor} />
            </li>
          ))}
        </ul>
      )}
      <p>cast</p>
    </>
  );
};
