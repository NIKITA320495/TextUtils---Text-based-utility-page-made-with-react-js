import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [theme, setTheme] = useState('red');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    document.body.style.backgroundColor = mode === 'light' ? 'hsl(218, 22%, 14%)' : 'white';
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} changeTheme={changeTheme} theme={theme} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse" mode={mode} theme={theme} />
        <About/>
      </div>
    </>
  );
}

export default App;
