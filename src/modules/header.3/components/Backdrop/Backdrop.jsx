import PropTypes from 'prop-types';
import s from './Backdrop.module.scss';
import { useEffect } from 'react';

const Backdrop = ({ show, onClick }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  return show ? <div className={s.backdrop} onClick={onClick}></div> : null;
};

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
