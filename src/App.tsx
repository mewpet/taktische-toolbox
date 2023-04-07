import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// Pages
import Home from './pages/Home';
import RCT from './pages/RCT';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/random-class-thursday" element={<RCT/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
