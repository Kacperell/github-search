import React from 'react';


//In this small application route-based code splitting it is not necessary.
//With more views, we would use code splitting with lazy and suspense to load pages dynamically.
//In this case, it might as well be in the main bundle.
import Home from './views/Home';
import User from './views/User';

function App() {
  return (
    <>
      🚀
    </>
  );
}

export default App;
