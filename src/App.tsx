import * as React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Item from './components/Item';
import PhotoContextProvider from "./context/PhotoContext";

const App: React.VoidFunctionComponent = (props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <PhotoContextProvider>
        <BrowserRouter>
          {/* <Route
            element={<Header
              handleSubmit={handleSubmit}
            />}
          /> */}
          <Header
              handleSubmit={handleSubmit}
          />
          <Routes>
            <Route path="/" element={ <Navigate to="mountain" />}/>
              <Route path="/mountain" element={ <Item searchTerm="mountain" />}/>
              <Route path="/beach" element={ <Item searchTerm="beach" />}/>
              <Route path="/bird" element={ <Item searchTerm="bird" />}/>
              <Route path="/food" element={ <Item searchTerm="food" />}/>
          </Routes>
        </BrowserRouter>
      </PhotoContextProvider>
    </div>
  );
}

export default App;
