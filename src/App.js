import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { React, useEffect } from 'react';
import { fetchData, fetchContinents } from './redux/home/home';
import Home from './pages/home';
import Details from './pages/details';
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
          <Route exact path="/continent/:continent/:code" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
