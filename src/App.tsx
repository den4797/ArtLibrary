import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Button onClick={() => alert('жмяк')}>жмяк</Button>
      </header>
    </div>
  );
}

export default App;
