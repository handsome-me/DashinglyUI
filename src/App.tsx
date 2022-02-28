import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button/Button';
import  icon from './downloadicon.png';
import Alert from './Alert/alert';
import Checkbox from './Checkbox/checkbox';
import {AiFillExclamationCircle,AiFillCheckCircle} from 'react-icons/ai'
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
      <Button icon={icon} onClick={(e:React.SyntheticEvent)=>{
        console.log("event",e);
      }} iconOnLeft={true} variant='primary' size="Large">
        Success
      </Button>
      <br></br>
      <br></br>
      <Button variant='error' icon={icon} iconOnRight={true} size="Small">
        Meghraj Error
      </Button>
      <br></br>
      <br></br>
      <Button variant='normal' textColor='red' border='0.5px solid red' size="Large">
        Meghraj Error
      </Button>

     <div style={{margin:'10px'}}>
     <Alert   action={
      
     < AiFillCheckCircle color='pink' size="20px"></AiFillCheckCircle>
     
    
    } variant="filled" serverity="success" >
       Meghraj
       
     </Alert>
     </div>

     <Checkbox onChange={()=>{
       
     }} ></Checkbox>
    </div>
  );
}

export default App;
