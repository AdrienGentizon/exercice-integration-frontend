import React from 'react';
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
    </div>
  );
}

export default App;
