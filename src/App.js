import {
  HashRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { React, useEffect } from 'react';
import { fetchData } from './redux/home/home';
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
        <Link to="/"><h1>Home</h1></Link>
        <Routes>
          <Route exact path="/" element={<Home />} />
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
