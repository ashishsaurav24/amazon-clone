import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path='/checkout' element="checkout" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
