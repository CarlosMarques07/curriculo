import { useState } from 'react'
import { About } from './pages/About'
import { useWindowWidth } from './hooks/windowWidth'
import { MobileMenu } from './components/MobileMenu'
import { Skills } from './pages/Skills'
import { Experience } from './pages/Experience'
import { Portfolio } from './pages/Portfolio'

function App() {
  
  const [activeScreen, setActiveScreen] = useState<string>('About')

  const windowWidth = useWindowWidth()

  const handleActiveScreen = (value: string) => {
    setActiveScreen(value)
  }

  return (
    <>
      {windowWidth <= 1160 &&
        <header>
          <MobileMenu
              activeScreen={activeScreen}
              handleActiveScreen={handleActiveScreen}
              windowWidth={windowWidth}
          />
        </header>
      }
      {activeScreen === 'About'
        ? <About 
            activeScreen={activeScreen}
            handleActiveScreen={handleActiveScreen}
            windowWidth={windowWidth}  
          />
        : activeScreen === 'Skills'
        ? <Skills
            activeScreen={activeScreen}
            handleActiveScreen={handleActiveScreen}
            windowWidth={windowWidth}  
          />
        : activeScreen === 'Experience'
        ? <Experience
            activeScreen={activeScreen}
            handleActiveScreen={handleActiveScreen}
            windowWidth={windowWidth}  
          />
        : <Portfolio 
            activeScreen={activeScreen}
            handleActiveScreen={handleActiveScreen}
            windowWidth={windowWidth}
          />
      }
    </>
  )
}

export default App
