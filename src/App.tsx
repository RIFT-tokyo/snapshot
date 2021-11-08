import React from 'react';
import Header from './components/Header';
import PhotoContextProvider from "./context/PhotoContext";

const App: React.VoidFunctionComponent = (props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <PhotoContextProvider>
        <Header handleSubmit={handleSubmit} />
      </PhotoContextProvider>
    </div>
  );
}

export default App;
