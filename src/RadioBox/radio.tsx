import React, { SyntheticEvent, useState } from 'react';
import PropTypes from 'prop-types';
import { css, CSSInterpolation, CSSObject } from '@emotion/css';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';


interface PROPS{

    checked?:boolean,
    onChange?:(value:string)=>undefined,
    value?:string,
    name?:string,
    color?:string,
    onHoverbgColor?:string
    
}

let   STYLE_TYPE:"WrapperStyle" | "svgWrapperStyle" | "inputStyle";

const colorStyle={
    defaultBackground:'rgba(25, 118, 210, 0.04)',
    defaultColorUnCheck:'rgba(0, 0, 0, 0.6)',
    defaultColorChecked:'#1976d2'

 };
const wrapperStyle=function(bgColor?:string):string{
    
      return css({
        position:"relative",
        display:'inline-flex',
        borderRadius:'50%',
        color:'rgba(0, 0, 0, 0.6);',
        justifyContent:'center',
        padding:'8px',
        alignItems:'center',
        ':hover':{
            backgroundColor:bgColor||colorStyle.defaultBackground
        }
    })
    
    

    
}
const svgWrapperStyle=function(defaultProperty?:CSSObject):string{
    return css({
        position:'relative',
        display:'flex',
        alignItems:'center',
        ...defaultProperty

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
const styleRadio=(type:typeof STYLE_TYPE,props:PROPS)=>{
      
    const {checked,color,onHoverbgColor}=props;
   const  defaultRadioProperty:CSSObject={
       color:checked?color || colorStyle.defaultColorChecked:colorStyle.defaultColorUnCheck
   }
    switch(type){

        case "WrapperStyle":{
            return wrapperStyle();
        }
        case "inputStyle":{
            return inputStyle();
        }
        case "svgWrapperStyle":{
            return svgWrapperStyle(defaultRadioProperty);
        }
      
        
    }
    
}



const radio = (props:PROPS)=> {
    //NO need to mangage the state , parent will control
    //const [_value,setValue]=useState(value);
   const  {
        checked,
        onChange,
        value,
        name,
        color,
        onHoverbgColor
    
    }=props;

    const handleInputOnChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
       const {value="a"}= event.target;
       event.preventDefault();
       /*confuse here between (will onChange trigger event propogation, need to finf(i think NO))*/
       //event.stopPropagation();
       onChange&&onChange(value);
      
    }

    const icon=checked?<RadioButtonCheckedIcon/>:<RadioButtonUncheckedIcon/>;
   
    return (
        <span className={styleRadio("WrapperStyle",props)}>
         <input value={value} checked={checked} type="radio" onChange={handleInputOnChange} className={styleRadio('inputStyle',props)}>
         </input>
         <span className={styleRadio("svgWrapperStyle",props)}>
            {icon}
         </span>
        </span>
    );


     
};

radio.propTypes = {
    
};

export default radio;