import CharacterCard from './components/CharacterCard'
import './styles/App.css'

function App() {
  return (
    <>
      <CharacterCard 
      image={'https://rickandmortyapi.com/api/character/avatar/11.jpeg'} 
      name={'Albert Einstein'} 
      species={'Human'}></CharacterCard>
    </>
  )
}

export default App
