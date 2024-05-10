import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './components/Countries';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div>
      {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Countries" element={<Countries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
