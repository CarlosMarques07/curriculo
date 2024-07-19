import { useState } from 'react'
import { About } from './pages/About'
import { useWindowWidth } from './hooks/windowWidth'
import { MobileMenu } from './components/MobileMenu'
import { Skills } from './pages/Skills'

function App() {
  
  const [activeScreen, setActiveScreen] = useState<string>('About')

  const windowWidth = useWindowWidth()

  const handleActiveScreen = (value: string) => {
    setActiveScreen(value)
  }

  return (
    <>
      {windowWidth <= 768 &&
        <header>
          <MobileMenu
              activeScreen={activeScreen}
              handleActiveScreen={handleActiveScreen}
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
        : ''
      }
    </>
  )
}

export default App
