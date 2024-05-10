import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './components/Countries';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
      {/* <Header /> */}
        <Routes>
          <Route path="/Countries" element={<Countries />} />
          {/* Diğer rotaları buraya ekleyin */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
