import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Local from './views/Local';
import Personal from './views/Personal';
import Gaming from './views/Gaming';
import Social from './views/Social';
import './css/index.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/local" element={<Local />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/socials" element={<Social />} />
        </Routes>
      </div>
      <footer>
        © 2025 My Blog — Links coming soon
      </footer>
    </div>
  );
}

export default App;
