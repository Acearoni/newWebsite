import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Local from './views/Local';
import Personal from './views/Personal';
import Gaming from './views/Gaming';
import Social from './views/Social';
import SinglePost from './views/SinglePost';
import CreatePost from './components/CreatePost';
import './css/index.css'
import Footer from './components/Footer';

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
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/createPost" element={<CreatePost/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
