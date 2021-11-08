import React from 'react';
import PhotoContextProvider from "./context/PhotoContext"

const App: React.VoidFunctionComponent = () => {
  return (
    <div className="App">
      <PhotoContextProvider>
      </PhotoContextProvider>
    </div>
  );
}

export default App;
