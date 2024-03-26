import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function useMedia() {
  //   const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const media = useMemo(() => {
    return {
      isDesktop,
      isTablet: isTablet && !isDesktop,
      isMobile: !isTablet && !isDesktop,
    };
  }, [isTablet, isDesktop]);

  return media;
}
