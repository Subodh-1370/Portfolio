import React, { useEffect, useRef, useState } from 'react';

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkVanta = () => {
      if (window.VANTA && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xffffff,
          backgroundColor: 0x0d0d0d
        });
        setIsLoaded(true);
      }
    };

    // Check immediately
    checkVanta();

    // If not loaded, check again periodically
    const interval = setInterval(() => {
      if (!isLoaded) {
        checkVanta();
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [isLoaded]);

  return (
    <div 
      ref={vantaRef} 
      style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'relative',
        backgroundColor: '#0d0d0d',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  );
};

export default VantaBackground; 