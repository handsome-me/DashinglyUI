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
}


const FormControlLabel = (props:Props) => {
    const {value,label,Element,type}=props;
   
    const _element=type=="RadioBox";

    return (
        <div className={wrapperStyle()}>
            {Element}
            <span style={{margin:'2vw'}}><Heading title={label} /></span>
        </div>
    );
};

export default FormControlLabel;