import LocationInfo from './components/LocationInfo'
import CharacterInfo from './components/Characters/CharacterInfo'
import './styles/App.css'
import Landing from './components/Landing'
import CharacterSection from './components/Characters/CharacterSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LocationSection from './components/LocationSection'
import EpisodeSection from './components/EpisodeSection'
import EpisodeInfo from './components/EpisodeInfo'
import InvalidURL from './components/404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />

        <Route path='/characters/' element={<CharacterSection/>} />
        <Route path='/characters/:id?' element={<CharacterInfo/>} />

        <Route path='/locations/:index?' element={<LocationSection/>}/>
        <Route path='/location/:id' element={<LocationInfo/>}/>

        <Route path="/episodes/:index?" element={<EpisodeSection/>}/>
        <Route path="/episode/:id" element={<EpisodeInfo/>}/>

        <Route path='*' element={<InvalidURL/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
