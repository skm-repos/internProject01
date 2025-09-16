import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Publish from './pages/Publish'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publish" element={<Publish />} />
        {/* Add more routes as you create more pages */}
      </Routes>
    </Router>
  )
}

export default App
