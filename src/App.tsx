import CharacterInfo from './components/CharacterInfo'
import './styles/App.css'

function App() {
  return (
    <>
      <CharacterInfo 
        id={32} 
        image={'https://rickandmortyapi.com/api/character/avatar/32.jpeg'} 
        name={'Bearded Lady'} 
        status={'Dead'} 
        species={'Alien'} 
        type={'Parasite'} 
        gender={'Female'} 
        origin={'unknown'}></CharacterInfo>
    </>
  )
}

export default App
