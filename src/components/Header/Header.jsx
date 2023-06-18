import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Movies Library</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="movies">Get to all movies</Link>
        </li>
        <li>
          <Link to="movies/:movieId">details</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Header;
