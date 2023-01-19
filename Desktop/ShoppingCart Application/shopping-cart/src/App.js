import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import {Header} from './components/Header';
import Section from './components/Section'
import { DataProvider } from './components/Context';
import Products from './components/section/Products';
class App extends React.Component {
  render(){
  return (
    <DataProvider>
    <div className="App">
      <Router>
     <Header/>
     <Section/>
     <Products/>
     </Router>
    </div>
    </DataProvider>
  );
}
}

export default App;
