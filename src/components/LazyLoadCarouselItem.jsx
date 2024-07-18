import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyLoadCarouselItem = ({ className, children, imageUrl }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [bgImage, setBgImage] = useState(null);

  if (inView && !bgImage) {
    setBgImage(imageUrl);
  }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <div ref={ref} className={`h-full bg-[#006e2f] ${className} ${inView ? 'loaded' : ''}`}>
      {children}
      {isLoading?  <>
  <div className="w-full bg-[#006e2f] h-[100vh]">
      
  <figure className="">
    <div className="dot white"></div>
    <div className="dot"></div>
   <div className="dot"></div>
    <div className="dot"></div>
     <div className="dot"></div>
 </figure>
     </div>
   </>:
      <style jsx>{`
        .${className}.loaded {
          background-image: url(${bgImage});
        }
      `}</style>}
    </div>
  );
};

export default LazyLoadCarouselItem;
