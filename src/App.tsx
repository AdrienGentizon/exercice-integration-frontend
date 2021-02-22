import React from 'react';
import Features from './Components/Features/Features';
import HerroBanner from './Components/HeroBanner/HeroBanner';
import Presentation from './Components/Presentation/Presentation';
import Usage from './Components/Usage/Usage';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <HerroBanner />
      <Presentation />
      <Usage />
      <Features />
    </div>
  );
}

export default App;
