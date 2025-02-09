import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './components/Login'
import Details from './components/Details'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/details' element={<Details/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
