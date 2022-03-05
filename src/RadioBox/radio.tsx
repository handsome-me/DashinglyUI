import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
interface Props{

}
let   STYLE_TYPE:"WrapperStyle" | "svgWrapperStyle" | "inputStyle";

 
const wrapperStyle=function():string{
    return css({
        position:"relative",
        display:'inline-flex',
        border:"1px solid ",
        borderRadius:'50%',
        color:'pink'
    })
}
const svgWrapperStyle=function():string{
    return css({
        position:'relative',
        display:'flex',
        color:'pink'
    })
}
const inputStyle=function():string{
    return css({
        position:'absolute',
        opacity:0,
        zIndex:1,
        top:0,
        bottom:0,
        width:'100%',
        height:'100%',
        
    })
}
const styleRadio=(type:typeof STYLE_TYPE)=>{
     
     
    switch(type){

        case "WrapperStyle":{
            return wrapperStyle();
        }
        case "inputStyle":{
            return inputStyle();
        }
        case "svgWrapperStyle":{
            return svgWrapperStyle();
        }
      
        
    }
    
}

const radio = () => {
    return (
        <span className={styleRadio("WrapperStyle")}>
         <input className={styleRadio('inputStyle')}>
         </input>
         <span className={styleRadio("svgWrapperStyle")}>
             <RadioButtonUncheckedIcon ></RadioButtonUncheckedIcon>
         </span>
        </span>
    );
};

radio.propTypes = {
    
};

export default radio;