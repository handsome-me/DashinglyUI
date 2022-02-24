import React from 'react';
import PropTypes from 'prop-types';
import { css, cx,CSSStyleSheet } from '@emotion/css'


const styledButton=()=>{

    return css({
       display:'inline-flex',
       padding:"20px",
       backgroundColor:"green"
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