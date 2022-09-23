import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllGun from './components/AllGun/AllGun';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  const countIncrease = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <AllGun countIncrease={countIncrease}></AllGun>
      <Footer></Footer>
    </div>
  );
}

export default App;
