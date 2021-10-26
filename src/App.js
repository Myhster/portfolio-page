import './App.scss';
import MainPage from './MainPage/MainPage';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import React, { useState } from 'react';
function App() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <Navbar active={active} setActive={setActive} />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
