import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // console.log(pathname);
    /* settimeout make sure this run after components have rendered. This will help fixing bug for some views where scroll to top not working perfectly */
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;

// import { useState, useEffect } from 'react';
// import { Button } from './ScrollToTop.styled';

// const ScrollToTop = () => {
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowButton(window.pageYOffset > 200);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleClick = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return <>{showButton && <Button onClick={handleClick}>Top</Button>}</>;
// };

// export default ScrollToTop;
