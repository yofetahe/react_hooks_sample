import React from 'react';
import ClassBasePage from './Components/ClassBasePage';
import './App.css';
import HooksBasedPage from './Components/HooksBasePage';

function App() {
  return (
    <div className="App">
      <h1>Class Demo</h1>
      <ClassBasePage />
      <HooksBasedPage />      
    </div>
  );
}

export default App;
