import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import GlobalStyle from './styles/Global';
import Header from './components/Header';
import { SearchContext } from './contexts/SearchContext';

//In this small application route-based code splitting it is not necessary.
//With more views, we would use code splitting with lazy and suspense to load pages dynamically.
//In this case, it might as well be in the main bundle.
import Home from './views/Home';
import User from './views/User';



const App: React.FC = () => {

  const [searchText, setSearchText] = useState<string | null>(null);
  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <main className='container'>
          <Routes>
            <Route path="/user/:login" element={<User />} />
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
    </SearchContext.Provider>
  );
}

export default App;
