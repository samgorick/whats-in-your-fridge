import React from 'react';
import LogoComponent from './LogoComponent'
import Search from './Search'
import './App.css';
import { connect } from 'react-redux'

const handleSearch = values => {
  console.log(values);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoComponent />
        <Search handleSearch={handleSearch} />
      </header>
    </div>
  );
}

export default connect()(App);
