import React from 'react';
import { render } from 'react-dom';

import PageConnexion from './app1/pageConnexion';
import PageChat from './app1/pageChat';

const styles = theme => ({
  root:
  { /* ... */ },
});

const App = () => (
  <div style={{ height: '90vh', border: '#2px solid #FFFF00' }}>
    <PageChat/>
  </div>
);

render(<App />, document.getElementById('root'));
