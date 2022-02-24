import React from 'react';
import PropTypes from 'prop-types';
import { css, cx,CSSStyleSheet } from '@emotion/css'


const styledButton=()=>{

    return css({
       display:'inline-flex',
       padding:"10px",
       border:"none",
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
      outlineColor:'silver'
      }
    })

}


const Default_Style = css({
    color:"red",
   
  })
const Button = (props:any) => {
    return (
        <button className={styledButton()}>
            Meghraj_Deshmukh
        </button>
    );
};

Button.propTypes = {
    
};

export default Button;