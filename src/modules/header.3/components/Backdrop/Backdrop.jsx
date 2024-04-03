import PropTypes from 'prop-types';
import s from './Backdrop.module.scss';

const Backdrop = ({ show, onClick }) =>
  show ? <div className={s.backdrop} onClick={onClick}></div> : null;

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
