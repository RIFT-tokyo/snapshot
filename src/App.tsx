import * as React from 'react';
import { useNavigate, NavigateFunction, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Item from './components/Item';
import Search from './components/Search';
import PhotoContextProvider from "./context/PhotoContext";

const App: React.VoidFunctionComponent = (props) => {
  let navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent, navigate: NavigateFunction, searchInput: string) => {
    e.preventDefault();
    let url = `search/${searchInput}`
    navigate(url);
  }

  return (
    <div className="App">
      <PhotoContextProvider>
          <Header
              handleSubmit={handleSubmit}
              navigate={navigate}
          />
          <Routes>
            <Route path="/" element={ <Navigate to="mountain" />}/>
            <Route path="/mountain" element={ <Item searchTerm="mountain" />}/>
            <Route path="/beach" element={ <Item searchTerm="beach" />}/>
            <Route path="/bird" element={ <Item searchTerm="bird" />}/>
            <Route path="/food" element={ <Item searchTerm="food" />}/>
          <Route
            path="/search/:searchInput"
            element={<Search />
          } />
          </Routes>
      </PhotoContextProvider>
    </div>
  );
}

export default App;
