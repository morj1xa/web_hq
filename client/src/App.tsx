import './App.css';
import Navbar from './pages/TablePage/ui/navbar/Navbar';
import TableHeader from './pages/TablePage/ui/tableHeader/TableHeader';
import Table from './pages/TablePage/ui/table/Table';
import ButtonsComponent from './pages/TablePage/ui/buttons/ButtonsComponent';
import TableMobile from './pages/TablePage/ui/tableMobile/tableMobile';
import TablePageComponent from './pages/TablePage/TablePageComponent';

import { Routes,Route } from 'react-router-dom';
import FlagPageComponent from './pages/FlagPage/FlagPageComponent';

import "./fonts/Monocraft.ttf"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/"element={ <TablePageComponent />} />
          <Route path="/flag" element={ <FlagPageComponent />} />
        </Routes>
    </div>
  );
}

export default App;
