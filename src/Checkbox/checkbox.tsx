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

function Checkbox({

    defaultCheck=false,
    onChange,
    color="primary",
    disabled,
    label

}:props){
   
    const isDisabled=disabled?true:false;


    return (
        <div>
            <input className={styleInput()} type={"checkbox"} disabled={isDisabled}></input> 
        </div>
    );
}

export default Checkbox
;