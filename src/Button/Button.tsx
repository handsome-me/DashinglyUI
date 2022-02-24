import React from 'react';
import PropTypes from 'prop-types';
import { css, cx,CSSStyleSheet } from '@emotion/css'


const Default_Style = css({
    color:"red",
    
  })
const Button = (props:any) => {
    return (
        <div className={Default_Style}>
            Meghraj_Deshmukh
        </div>
    );
};

Button.propTypes = {
    
};

export default Button;