import React from 'react';
import { render } from 'react-dom';

import PageConnexion from './app1/pageConnexion';
import PageChat from './app1/pageChat';
import PageApiTest from './app1/pageApiTest';
import PagePeri from './app1/pagePeri';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const styles = theme => ({
  root:
  { /* ... */ },
});

const App = () => (
  
    <BrowserRouter>
      <div style={{ height: '90vh', border: '#2px solid #FFFF00' }}>
        <Switch>
          <Route exact path="/" component={PageConnexion} />
          <Route path="/pseudo/:pseudo" render={(props) => <PageChat pseudo={props.match.params.pseudo}/>} />
          <Route path="/apitest" component={PageApiTest} />
          <Route path="/peri" component={PagePeri} />
        </Switch>
      </div>
    </BrowserRouter>
  
);

render(<App />, document.getElementById('root'));
