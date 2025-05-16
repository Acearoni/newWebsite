import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Local from './views/Local'
import Personal from './views/Personal'
import Gaming from './views/Gaming'
import Social from './views/Social'
import Home from './views/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/local" element={<Local />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/socials" element={<Social />} />
      </Routes>
    </>
  );
}

export default App
