import { useState, useEffect } from 'react';
import './App.css';
import Resume from './components/resume';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    const onTouchStartSupported = 'ontouchstart' in document.documentElement;
    setIsTouchDevice(onTouchStartSupported);
  }, []);

  return (
    <>
      {!isTouchDevice && (
        <AnimatedCursor
          innerSize={6}
          outerSize={30}
          innerScale={1}
          outerScale={4}
          outerAlpha={0.2}
          outerStyle={{
            background: '#d7d7d7',
            mixBlendMode: 'exclusion',
          }}
          innerStyle={{
            backgroundColor: darkMode ? '#353839' : '#f3f5f3',
          }}
          clickables={['.target']}
        />
      )}
      
      <Resume 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </>
  );
}

export default App;
