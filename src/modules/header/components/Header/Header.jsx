import { Container } from 'shared/components';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { useState, useEffect } from 'react';
import Phone from '../Phone/Phone';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <header>
      <Container>
        <div
          className={`${s.headerWrapper} ${isScrolled ? s.headerSrolled : ''}`}
        >
          <BurgerMenu isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          <Link to={'/'} onClick={scrollToTop}>
            <Logo />
          </Link>
          <Navigation />
          <Phone />
        </div>
      </Container>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};

export default Header;
