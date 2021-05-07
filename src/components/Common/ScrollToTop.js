import { useState, useEffect, useCallback } from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import '../../index.css';


export default function ScrollToTop() {

  // Track whether the scroll arrow is needed.
  const [showScroll, setShowScroll] = useState(null);
  // Check the scroll state, re-memoize when scroll state changes.
  const checkScrollTop = useCallback(
    () => {
      const headerHeight = 400;

      if (!showScroll && window.pageYOffset > headerHeight) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= headerHeight) {
        setShowScroll(false);
      }
    },
    [showScroll],
  );
  // Add/remove the event listener when the component is unmounted or the scroll state has changed.
  useEffect(
    () => {
      window.addEventListener('scroll', checkScrollTop);
      return () => window.removeEventListener('scroll', checkScrollTop);
    },
    [checkScrollTop],
  );

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    return (
      
             <FaArrowCircleUp className="scrollTop" onClick={scrollTop} 

             style={
                 {height: 40, 
                 display: showScroll ? 'flex' : 'none'}}
                 
            />
    )
                 }
