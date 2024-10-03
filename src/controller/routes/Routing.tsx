import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Informations } from '../../pages/Informations';
import { Downloads } from '../../pages/Downloads';
import { Register } from '../../pages/Register';
import { Donate } from '../../pages/Donate';

export function Routings() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages/Informations" element={<Informations />} />
      <Route path="/pages/Downloads" element={<Downloads />} />
      <Route path="/pages/Register" element={<Register />} />
      <Route path="/pages/Donate" element={<Donate />} />
    </Routes>
  );
}
