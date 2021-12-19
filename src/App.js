import React from 'react';
import Routess from './config/route';
import ContextProvider from './context/context';
function App() {
  return (
    <ContextProvider>
       <Routess />
    </ContextProvider>
  );
}

export default App;
