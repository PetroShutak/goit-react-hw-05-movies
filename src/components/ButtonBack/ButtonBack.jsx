import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BackButton } from './ButtonBack.styled';

const ButtonBack = ({ location }) => {
  const navigate = useNavigate();
  console.log(location);
  return (
    <BackButton type="button" onClick={() => navigate(location.state.from ?? '/')}>
      &larr; Go back
    </BackButton>
  );
};

ButtonBack.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};


export default ButtonBack;
