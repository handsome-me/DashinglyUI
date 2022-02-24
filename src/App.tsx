import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button/Button';
function App() {
  return (
    <div className="App">
      <br></br>
      <Button variant='success' size="Large" disabled={true}>
        Success
      </Button>
      <br></br>
      <br></br>
      <Button variant='primary' size="Large">
        Meghraj Primary
      </Button>
      <br></br>
      <br></br>
      <Button variant='error' size="Large">
        Meghraj Error
      </Button>
      <br></br>
      <br></br>
      <Button variant='normal' textColor='red' border='0.5px solid red' size="Large">
        Meghraj Error
      </Button>
    </div>
  );
}

export default App;
