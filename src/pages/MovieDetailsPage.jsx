import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLocation = useRef(location);
  return (
    <div>
      <button>
        <Link to={backLocation.current.state?.from ?? '/movies'}>Go back</Link>
      </button>
      <MovieDetails />
      <p>Additional information</p>
      <Link to={'cast'}>Cast </Link>
      <Link to={'reviews'}>Reviews</Link>
      <Outlet />
    </div>
  );
}
