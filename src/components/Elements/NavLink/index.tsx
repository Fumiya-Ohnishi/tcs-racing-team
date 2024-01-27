import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import { FC, useEffect } from 'react';

interface Props {
  to: string;
  children: React.ReactNode;
}

export const NavLink: FC<Props> = ({ to, children }) => {
  const location = useLocation();
  const isTopPage = location.pathname === '/';

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const hash = location.hash.replace('#', '');
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          const offsetTop =
            element.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return isTopPage ? (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      offset={-60}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </ScrollLink>
  ) : (
    <RouterLink to={'/#' + to}>{children}</RouterLink>
  );
};