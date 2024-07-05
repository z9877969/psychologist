import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'shared/components';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import Phone from '../Phone/Phone';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import Backdrop from '../Backdrop/Backdrop';
import { useMedia, useMainPage } from 'hooks';
import s from './Header.module.scss';

const HeaderSection = () => {
  const media = useMedia();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const page = useMainPage();

  const { headerSection } = page || {};

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

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
      <Container className={s.container}>
        <div
          className={`${s.headerWrapper} ${isScrolled ? s.headerSrolled : ''}`}
        >
          <BurgerMenu isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          <Link to={'/'} onClick={scrollToTop}>
            <Logo />
          </Link>
          <Navigation />
          <Phone
            factPhone={headerSection?.factPhone ?? ''}
            displayingPhone={headerSection?.displayingPhone ?? ''}
          />
        </div>
        {!media.isDesktop && (
          <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
        )}
      </Container>

      <Backdrop show={isMobileMenuOpen} onClick={closeMobileMenu} />
    </header>
  );
};

export default HeaderSection;
