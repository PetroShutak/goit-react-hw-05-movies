import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }
  `;

  return (
    <div>
      <ul
        style={{
          display: 'flex',
          gap: 20,
          alignItems: 'center',
          padding: 20,
          listStyle: 'none',
          boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.75)',
          borderBottom: '1px solid black',
        }}
      >
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="movies">Movies</StyledLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Header;
