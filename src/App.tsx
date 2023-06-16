import NavigationBar from './components/NavigationBar'
import LocationInfo from './components/LocationInfo'
import CharacterInfo from './components/CharacterInfo'
import CharacterCard from './components/CharacterCard'
import NavigationSection from './components/NavigationSection'
import './styles/App.css'
import CharacterSection from './components/CharacterSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/characters' element={<CharacterSection/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
