import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './rutes/inicio';
import Notfound from './rutes/NoEncontrado';

import { Papelote } from './rutes/components/trabajosIndex/AELO_PAPELOTE.JSX';
import { Subebaja } from './rutes/components/trabajosIndex/SUBEyBAJA';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path="/home" element={<Inicio />} />7

        {/* Ruta para trabajos */}
        <Route path="/papelote" element={<Papelote />} />
        <Route path="/subeYbaja" element={<Subebaja />} />


        <Route path="*" element={<Notfound />} />          {/* Ruta por defecto */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

