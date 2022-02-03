import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { React, useEffect } from 'react';
import { fetchData, randOpacity } from './redux/home/home';
import Header from './components/header';
import Home from './pages/home';
import Continent from './pages/continent';
import Details from './pages/details';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home randOpacity={randOpacity} />} />
          <Route
            exact
            path="/continent/:continent/:code"
            element={<Continent />}
          />
          <Route
            exact
            path="/continent/:continent/:code/:country/:countryCode"
            element={<Details />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
