import { fetchGetMovieReviewsById } from 'api';
import { ReviewsCard } from 'components/ReviewsCard/ReviewsCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetchGetMovieReviewsById(params.movieId);
      setReviews(response.results);
    };
    fetchMovie();
  }, [params.movieId]);
  return (
    <>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <ReviewsCard review={review} />
            </li>
          ))}
        </ul>
      )}
      <p>We don`t have any reviews for this movie.</p>
    </>
  );
};
