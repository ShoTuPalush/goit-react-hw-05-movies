import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
