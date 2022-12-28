import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<h2>Checkout page</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
