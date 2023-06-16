import LocationInfo from './components/LocationInfo'
import './styles/App.css'

function App() {
  return (
    <>
      <LocationInfo 
        name={'Earth (C-137)'} 
        type={'Planet'} 
        dimension={'Dimension C-137'} 
        creationDate={'2017-11-10T12:42:04.162Z'}></LocationInfo>
    </>
  )
}

export default App
