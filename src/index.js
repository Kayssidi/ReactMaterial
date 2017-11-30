import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import FlatButtons from './FlatButtons';
import SimpleCard from './SimpleCard';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <FlatButtons/>
    <SimpleCard/> 
  </div>
);

render(<App />, document.getElementById('root'));
