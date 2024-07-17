import { useState } from 'react'
import { LandingPage } from './components/LandingPage'

function App() {
  
  const [activeScreen, setActiveScreen] = useState<string>('LandingPage')

  const handleActiveScreen = (value: string) => {
    setActiveScreen(value)
  }
  return (
    <>
      {activeScreen === 'LandingPage'
        ? <LandingPage handleActiveScreen={handleActiveScreen} />
        : ''
      }
    </>
  )
}

export default App
