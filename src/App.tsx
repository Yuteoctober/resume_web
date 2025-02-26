import { useState } from 'react'
import './App.css'
import Resume from './components/resume'
import AnimatedCursor from 'react-animated-cursor';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <AnimatedCursor
      innerSize={6}
      outerSize={30}
      innerScale={1}
      outerScale={4.5}
      outerAlpha={0.2}
      outerStyle={{
        mixBlendMode: 'exclusion',
        backgroundColor: '#d7d7d7',
        border: '2px solid white'
      }}
      innerStyle={{
        backgroundColor: '#f3f5f3',
      }}
      clickables={['.target']}
    />
      <Resume 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </>
  )
}

export default App
