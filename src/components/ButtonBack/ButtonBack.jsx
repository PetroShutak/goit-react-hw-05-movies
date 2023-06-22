import { useNavigate } from 'react-router-dom';

const ButtonBack = ({ location }) => {
  const navigate = useNavigate();
  console.log(location);
  return (
    <button type="button" onClick={() => navigate(location.state.from ?? '/')}>
      &larr; Go back
    </button>
  );
};

export default ButtonBack;
