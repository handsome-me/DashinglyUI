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
        borderRadius:'50%',
        color:'rgba(0, 0, 0, 0.6);',
        justifyContent:'center',
        padding:'8px',
        alignItems:'center',
        ':hover':{
            backgroundColor:'rgba(25, 118, 210, 0.04)'
        }

    })
}
const svgWrapperStyle=function():string{
    return css({
        position:'relative',
        display:'flex',
        color:'rgba(0, 0, 0, 0.6);',
        alignItems:'center'
    })
}
const inputStyle=function():string{
    return css({
        position:'absolute',
        opacity:0,
        zIndex:1,
        cursor:'pointer',
        top:0,
        bottom:0,
        width:'100%',
        height:'100%',
        border:0,
        padding:0,
        
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