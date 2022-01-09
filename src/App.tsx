import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//In this small application route-based code splitting it is not necessary.
//With more views, we would use code splitting with lazy and suspense to load pages dynamically.
//In this case, it might as well be in the main bundle.
import Home from './views/Home';
import User from './views/User';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/user/:id" element={<User />} />
            <Route path="/" element={<Home />} />
            <Route
              path="*"
              element={
                <h1>
                  404
                </h1>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
