import React from 'react';
import PropTypes from 'prop-types';
import { css, cx,CSSStyleSheet } from '@emotion/css'
import { JsxChild } from 'typescript';



/**
 * Props type 
 * intent="errror"|"success"|"normal"|"primary"
 * size="large"|"small" | medium
 * childreen="react childreen"
 * disabled=""; 
 */

 enum sizes{
     Large="Large",
     Small="Small",
     XLarge="XLarge",
    }
 function getButtonSize(size:sizes){

    const sizesObj={
      "Large":{
       fontSize:fontSizes[size],
       padding:spacing[size]
      },
      "Small":{

    },
    "XLarge":{

    },
    }
    return sizesObj[size];

 }

const styledButton=(size:sizes)=>{

    return css({
        ...getButtonSize(size),
       display:'inline-flex',
       padding:"10px",
       border:"none",
    /**position is set relate bcz if user want to make thier content absolute and align inside button */
       position:"relative",
       cursor:'pointer',
       backgroundColor:"#5eba5e",
       "&:hover":{
        backgroundColor:'#359b35'
       },
       "&:active":{
      cursor:'pointer',
      backgroundColor:'green',
      outline:'2px solid ',
      outlineStyle:"dotted",
      outlineColor:'silver',
     
      }
       
    })

}
export const spacing = {
    none: 0,
    xxsmall: '4px',
    xsmall: '8px',
    Small: '12px',
    medium: '20px',
    gutter: '24px',
    Large: '32px',
    XLarge: '48px',
    xxlarge: '96px',
  };
  
  export const fontSizes = {
    xsmall: '0.79rem',
    Small: '0.889rem',
    medium: '1rem',
    Large: '1.125rem',
    XLarge: '1.266rem',
    xxlarge: '1.424rem',
  };

const Default_Style = css({
    color:"red",
   
  })
//   ,{size,childreen}:{size:any,childreen?:any}
interface props{
    size:any,
    children:any
}
const Button = (props:props) => {
    return (
        <button className={styledButton(props.size)}>
            {props.children}
        </button>
    );
};

Button.propTypes = {
    
};

export default Button;