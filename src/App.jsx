

import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Background from './components/Background';
import Foreground from './components/Foreground';

function App() {
  return (
    <ThemeProvider>
      <div id="root" className="App">
        <Background />
        <Foreground />
      </div>
    </ThemeProvider>
  );
}

export default App;
