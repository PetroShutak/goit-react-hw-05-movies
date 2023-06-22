import { ProgressBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
    style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}
    >
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#f44336"
      />
    </div>
  );
};

export default Loader;


