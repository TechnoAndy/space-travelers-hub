import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Mission from './components/Mission';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Rockets />} />
          <Route path="/missions" element={<Mission />} />
          <Route path="/my_profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
