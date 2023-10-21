import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// Pages
import Home from './pages/Home';
import RCT from './pages/RCT';
import { URLS } from './utils/consts';
import { GenshinMain } from './pages/GenshinMain';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={URLS.RANDOM_CLASS_THURSDAY} element={<RCT/>} />
          <Route path={URLS.GENSHIN_MAIN} element={<GenshinMain />} />
          <Route path={URLS.HOME} element={<Home/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
