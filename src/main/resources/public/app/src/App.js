import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './components/Countries';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AddCountry from './components/AddCountry';
import EditCountry from './components/EditCountry';

function App() {
  return (
    <Router>
      <div>
      {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/add-country" element={<AddCountry />} />
          <Route path="/edit-country/:id" element={<EditCountry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
