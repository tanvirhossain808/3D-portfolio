
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Home, About, Projects, Contact } from "./Pages"

function App() {

  return (
    <>

      <main className='bg-slate-300/20 h-full'>

        <Router>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />



          </Routes>


        </Router>

      </main>
      {/* <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1> */}
    </>
  )
}

export default App
