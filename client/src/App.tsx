import React from 'react';
import Home from './pages/Home'
import Canvas from './canvas'
import Customizer from './pages/Customizer'
function App(): JSX.Element {


  return (
    <main className='app transition-all ease-in' >
     <Home/>
     <Canvas/>
     <Customizer/>
     
    </main>
  );
}

export default App;
