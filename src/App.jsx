import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PokemonPage } from './pages/PokemonPage';


export default function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/pokemon/:id" element={<PokemonPage/>}/>
          <Route path="*" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}