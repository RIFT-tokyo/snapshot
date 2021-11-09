import * as React from 'react';
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
        <Header handleSubmit={handleSubmit} />
        <Item searchTerm="cat" />
      </PhotoContextProvider>
    </div>
  );
}

export default App;
