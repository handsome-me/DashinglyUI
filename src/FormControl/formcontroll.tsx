import React from 'react';

import { css, CSSInterpolation, CSSObject } from '@emotion/css';
import Heading from '../Heading/heading';
import { type } from '@testing-library/user-event/dist/type';

const wrapperStyle=():string=>{

    return css({
      display:'inline-flex'
    })
}




interface Props{
    value:string;
    Element:React.ReactElement;
    label:string;
    type:"RadioBox" | "CheckBox";
    name?:string;
    onChange?:any,
    checked?:boolean,
    register?:any,
    errors?:any
}


const FormControlLabel = (props:Props) => {
    const {value,label,Element,type,name,onChange,checked,register,errors}=props;
    
    const _element=type=="RadioBox";
     console.log("erros in formconrol",errors);
    return (
        <div className={wrapperStyle()}>
            {React.cloneElement(Element,{register:register,name:name,onChange:onChange,checked:checked,value:value,errors:errors})}
            <span style={{margin:'2vw'}}><Heading title={label} /></span>
        </div>
    );
};

export default FormControlLabel;