import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components'
import { AnimeDetail, HomePage, NotFound } from './pages'

function App() {
  return (
    <div className="App">
      <Header  />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/animeDetail/:animeId" element={<AnimeDetail />}  />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
