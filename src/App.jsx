
import './App.css'
import { Navbar } from './components'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Footer from './components/layout/Footer'
import MobileNav from './components/layout/MobileNav'

function App() {

  return (
    <div >
      {/* Navbar for Large Screens */}
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className='md:hidden fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
        <MobileNav />
      </div>

      {/* Scrollable Main Content */}
      <main className='h-screen overflow-y-auto'>
        <section id="i1"><Home /></section>
        <section id="i2"><About /></section>
        <section id="i3"><Skills /></section>
        <section id="i4"><Projects /></section>
      </main>

      {/* Footer for Small Screens */}
      <div className="md:hidden">
        <Footer />
      </div>
    </div>
  )
}

export default App
