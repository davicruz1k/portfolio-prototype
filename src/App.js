import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import AnimatedCursor from 'react-animated-cursor';
import Hero from './components/Hero';
import About from './components/AboutMe';
import Working from './components/Working';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    <Hero/>
    <About/>
    <Working/>
    </div>
  );
}

export default App;