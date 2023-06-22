import { Outlet } from 'react-router-dom';
import { StyledList, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <div
    style={{
      padding: '20px',
    }}
    >
      <StyledList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="movies">Movies</StyledLink>
        </li>
      </StyledList>

      <Outlet />
    </div>
  );
};

export default Header;
