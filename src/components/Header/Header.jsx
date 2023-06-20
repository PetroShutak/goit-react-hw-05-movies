import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          gap: 20,
          alignItems: 'center',
          padding: 20,
          listStyle: 'none',
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
          borderBottom: '1px solid black',
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="movies">Movies</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Header;
