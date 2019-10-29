import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/UI/Nav/Nav';
import ProjectScan from './pages/ProjectScan/ProjectScan';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Nav/>

      <main role="main">
        <Switch>
          <Route path="/" component={ProjectScan}/>
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
