import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { URLS } from './utils/consts';
import { Header } from './components/Header';

// Pages
import { GenshinMain } from './pages/GenshinMain';
import { GenshinCharacter } from './pages/GenshinCharacter';
import { Home } from './pages/Home';
import { RCT } from './pages/RCT';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={URLS.RANDOM_CLASS_THURSDAY} element={<RCT/>} />
          <Route path={URLS.GENSHIN_MAIN} element={<GenshinMain />} />
          <Route path={URLS.GENSHIN_MAIN + '/:character'} element={<GenshinCharacter />} />
          <Route path={URLS.HOME} element={<Home/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  );
}

export {
  App
}
  
