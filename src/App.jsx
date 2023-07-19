
import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Scrollup from './components/Scrollup/Scrollup'
// import Service from './components/Services/Service'
import Skills from './components/Skills/Skills'
import Contact from './components/contact/Contact'

function App() {


  return (
    <>
     <Header></Header>
     <main className="main">
      <Home></Home>
      <About></About>
      <Skills></Skills>
      {/* <Service></Service> */}
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Scrollup></Scrollup>
      <Footer></Footer>
     </main>
    </>
  )
}

export default App
