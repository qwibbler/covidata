import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { React, useEffect } from 'react';
import { fetchData, fetchContinents } from './redux/home/home';
import Home from './pages/home';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchContinents());
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/details" element={<p>Deets</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
