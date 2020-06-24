import React from 'react';
import Header from "./Components/Header/Header";
import {Switch,Route} from 'react-router-dom';
import Main from './Containers/Main/Main';
import Add from './Containers/AddNewProducts/Add';
import './App.css';


function App() {
  return (
    <div className="App">
        <Header/>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/add" component={Add}/>
      </Switch>
    </div>
  );
}

export default App;
