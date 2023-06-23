import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledList, StyledLink } from './Header.styled';
import Loader from 'components/Loader/Loader';


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
    <Suspense fallback={<div><Loader/></div>}>
      <Outlet />

    </Suspense>
    </div>
  );
};

export default Header;
