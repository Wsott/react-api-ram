import NavigationBar from './components/NavigationBar'
import LocationInfo from './components/LocationInfo'
import CharacterInfo from './components/CharacterInfo'
import CharacterCard from './components/CharacterCard'
import './styles/App.css'

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <LocationInfo 
        name={'Earth (C-137)'} 
        type={'Planet'} 
        dimension={'Dimension C-137'} 
        creationDate={'2017-11-10T12:42:04.162Z'}></LocationInfo>
      <CharacterInfo 
        id={32} 
        image={'https://rickandmortyapi.com/api/character/avatar/32.jpeg'} 
        name={'Bearded Lady'} 
        status={'Dead'} 
        species={'Alien'} 
        type={'Parasite'} 
        gender={'Female'} 
        origin={'unknown'}></CharacterInfo>
      <CharacterCard 
      image={'https://rickandmortyapi.com/api/character/avatar/11.jpeg'} 
      name={'Albert Einstein'} 
      species={'Human'}></CharacterCard>
    </>
  )
}

export default App
