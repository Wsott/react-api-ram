import LocationInfo from './components/Locations/LocationInfo'
import CharacterInfo from './components/Characters/CharacterInfo'
import './styles/App.css'
import Landing from './components/Landing'
import CharacterSection from './components/Characters/CharacterSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LocationSection from './components/Locations/LocationSection'
import EpisodeSection from './components/Episodes/EpisodeSection'
import EpisodeInfo from './components/Episodes/EpisodeInfo'
import InvalidURL from './components/404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />

        <Route path='/characters/' element={<CharacterSection/>} />
        <Route path='/characters/:id' element={<CharacterInfo/>} />

        <Route path='/locations/' element={<LocationSection/>}/>
        <Route path='/locations/:id' element={<LocationInfo/>}/>

        <Route path="/episodes/" element={<EpisodeSection/>}/>
        <Route path="/episodes/:id" element={<EpisodeInfo/>}/>

        <Route path='*' element={<InvalidURL/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
