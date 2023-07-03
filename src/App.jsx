
import './App.css'
import Banner from './Components/Banner/Banner'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'

function App() {

  return (
    <div style={{ backgroundColor: "#000000" }} className='max-w-screen-xl mx-auto'>
      <NavBar />
      <Banner />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
