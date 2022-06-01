import Header from './components/common/Header/Header';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Footer from './components/common/footer/Footer';
import Culture from './components/culture/Culture';
import Singlepages from './components/singlePages/Singlepages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/singlepage/:id" element={<Singlepages />} />
          <Route path="/culture" element={<Culture />} />

        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
