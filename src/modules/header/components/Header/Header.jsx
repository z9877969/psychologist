import { Container } from 'shared/components';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { useState } from 'react';
import Phone from '../Phone/Phone';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header>
      <Container>
        <div className={s.headerWrapper}>
          <BurgerMenu isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          <Link to={'/'}>
            <Logo />
          </Link>
          <Navigation />
          <Phone />
        </div>
      </Container>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
};

export default Header;
