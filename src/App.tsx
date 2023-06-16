import NavigationBar from './components/NavigationBar'
import LocationInfo from './components/LocationInfo'
import CharacterInfo from './components/CharacterInfo'
import CharacterCard from './components/CharacterCard'
import NavigationSection from './components/NavigationSection'
import './styles/App.css'
import LoadingSection from './components/LoadingSection'
import Landing from './components/Landing'

function App() {
  return (
    <>
      <LoadingSection></LoadingSection>
      <Landing></Landing>
    </>
  )
}

export default App
