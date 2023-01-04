import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useStateValue } from './StateProvider'
import { auth } from './firebase';
import { useEffect } from 'react';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // User is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return ()=> {
      unsubscribe();
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
