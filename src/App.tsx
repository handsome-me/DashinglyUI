import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button/Button';
import  icon from './downloadicon.png';
function App() {
  console.log("icon",icon);
  return (
    <div className="App">
      <br></br>
      <Button variant='success'   size="Large" disabled={true}>
        Success
      </Button>
      <br></br>
      <br></br>
      <Button icon={icon} iconOnLeft={true} variant='primary' size="Large">
        Success
      </Button>
      <br></br>
      <br></br>
      <Button variant='error' icon={icon} iconOnRight={true} size="Large">
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
