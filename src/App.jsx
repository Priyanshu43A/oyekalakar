import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

// ... import other pages if needed ...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
         
      </Routes>
    </Router>
  )
}

export default App;