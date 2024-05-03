import { createPortal } from 'react-dom';
import { ThreeDots } from 'react-loader-spinner';

const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <div
      style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 150,
      }}
    >
      <ThreeDots
        color="#1E5B2A"
        // width={LOADER_SIZE[currentMedia]}
        width={'10vh'}
        // wrapperClass={s.loaderWrapper}
        ariaLabel="three-dots-loading"
      />
    </div>,
    loaderRoot
  );
};

export default Loader;
