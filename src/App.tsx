import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProjectAnalysis from './pages/ProjectAnalysis/ProjectAnalysis';
import Nav from './components/UI/Nav/Nav';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Nav/>

      <main role="main">
        <Switch>
          <Route path="/project-analysis" component={ProjectAnalysis}/>
          <Route path="/" component={Home}/>
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
