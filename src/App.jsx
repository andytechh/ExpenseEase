import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mainlayout from './layout/Mainlayout'
import Home from './pages/Home'
import Expenses from './pages/Expenses'
import Approvals from './pages/Approvals'
import Settings from './pages/Settings'
import Trips from './pages/Trips'
const App = () => {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<Mainlayout  name={"Andy Lazarte"}/>}>
          <Route index element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/trips" element={<Trips />} />
          <Route path='/approvals' element={<Approvals />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
