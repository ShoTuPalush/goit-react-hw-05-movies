import { Link } from 'react-router-dom';

export default function NotFoundPages() {
  return (
    <>
      <b>
        pages not found, back <Link to={'/'}>link</Link> to Home
      </b>
    </>
  );
}
