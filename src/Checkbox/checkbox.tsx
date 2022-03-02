import { css } from '@emotion/css';
import React from 'react';


type props={

    disabled?:boolean,
    color?:string,
    label?:string,
    onChange?:()=>any
    defaultCheck?:boolean

}

const styleInput=()=>{
    return css({
       border:"2px solid black",
       ":active":{
           backgroundColor:'pink'
       },
     
       
       "input":{
        border:"2px solid black",
       }
    })
}
<FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
const styleDiv=()=>{
   return css({
     "::before":{
        
        fontFamily: "Font Awesome 5 Free",
        content:`"."`,
        fontWeight: "900",
        color:'red',
        border:"0.5px solid wheat",
        width:'4px'

         
     }
   })
}
function Checkbox({

    defaultCheck=false,
    onChange,
    color="primary",
    disabled,
    label

}:props){
   
    const isDisabled=disabled?true:false;


    return (
        <div className={styleDiv()}>
            <input className={styleInput()} type={"checkbox"} disabled={isDisabled}></input> 
        </div>
    );
}

export default Checkbox
;