import NavigationBar from './components/NavigationBar'
import LocationInfo from './components/LocationInfo'
import CharacterInfo from './components/CharacterInfo'
import CharacterCard from './components/CharacterCard'
import NavigationSection from './components/NavigationSection'
import './styles/App.css'
import LoadingSection from './components/LoadingSection'
import Landing from './components/Landing'
import CharacterSection from './components/CharacterSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LocationSection from './components/LocationSection'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/characters/:index?' element={<CharacterSection/>} />
        <Route path='/character/:id' element={<CharacterInfo/>} />
        <Route path='/' element={<Landing/>} />
        <Route path='/location/:id' element={<LocationInfo/>}/>
        <Route path='/locations/:index?' element={<LocationSection/>}/>
      </Routes>
    </BrowserRouter>
    // <>
    //   <LoadingSection></LoadingSection>
    //   <Landing></Landing>
    // </>
  )
}

export default App
