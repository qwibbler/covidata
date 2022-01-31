import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
