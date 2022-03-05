import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button/Button';
import  icon from './downloadicon.png';
import Alert from './Alert/alert';
import Checkbox from './Checkbox/checkbox';
import {AiFillExclamationCircle,AiFillCheckCircle} from 'react-icons/ai'
import Radio from './RadioBox/radio';
import RadioGroup from './RadioGroup/RadioGroup';
import FormControlLabel from './FormControl/formcontroll'
import Form from './Form/Form';
import InputField from './InputField/InputField';
function App() {
  const [selectedValue,setSelectedValue]=useState("a");
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

     {/* <Radio 
      
     onChange={(value:string)=>{
        setSelectedValue(value);
        return undefined;
     }} value="a" checked={selectedValue=="a"}></Radio>
      <Radio 
      
      onChange={(value:string)=>{
        console.log('onChagne',value);
         setSelectedValue(value);
        return undefined;
     }} value="b" checked={selectedValue=="b"}></Radio>

      <RadioGroup name="fav-language" title="fav-language">

      <FormControlLabel
      value="java"
      Element={<Radio ></Radio>}
      label="java"
      type="RadioBox"
      />
        <FormControlLabel
      value="javascript"
      Element={<Radio ></Radio>}
      label="javascript"
      type="RadioBox"
      />
        

      </RadioGroup> */}
      

      <Form>

      {/* <Radio 
      
      onChange={(value:string)=>{
         setSelectedValue(value);
         return undefined;
      }} value="a" checked={selectedValue=="a"}></Radio>
       <Radio 
       
       onChange={(value:string)=>{
         console.log('onChagne',value);
          setSelectedValue(value);
         return undefined;
      }} value="b" checked={selectedValue=="b"}></Radio>
  */}
       <RadioGroup name="fav-language" title="fav-language">
 
       <FormControlLabel
       value="java"
       Element={<Radio ></Radio>}
       label="java"
       type="RadioBox"
       />
         <FormControlLabel
       value="javascript"
       Element={<Radio ></Radio>}
       label="javascript"
       type="RadioBox"
       />
         
 
       </RadioGroup>

       <InputField   
        type="text"
        name="firstName"
        label="First Name"
        placeHolder="First Name"
        rules={{ required: 'You must enter your first name.' }}
        
       ></InputField>
      </Form>

    </div>
  );
}

export default App;
