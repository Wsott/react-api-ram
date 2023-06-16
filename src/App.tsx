import NavigationSection from './components/NavigationSection'
import './styles/App.css'

function App() {
  return (
    <>
      <NavigationSection previous={false} currentIndex={1} next={true}></NavigationSection>
    </>
  )
}

export default App
