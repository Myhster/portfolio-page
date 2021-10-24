import './App.scss';
import MainPage from './MainPage/MainPage';
import Navbar from './Navbar/Navbar';
import React, { useState } from 'react';
function App() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <Navbar active={active} setActive={setActive} />
      <MainPage />
    </div>
  );
}

export default App;
