import s from './Logo.module.scss';
import LogoImg from 'shared/components/LogoImg/LogoImg';
const Logo = () => {
  return <LogoImg className={s.logo} />;
};

export default Logo;
