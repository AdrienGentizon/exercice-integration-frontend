import React from 'react';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import HerroBanner from './Components/HeroBanner/HeroBanner';
import Partners from './Components/Partners/Partners';
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
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
