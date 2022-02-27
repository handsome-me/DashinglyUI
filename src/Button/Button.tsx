import React from 'react';
import PropTypes from 'prop-types';
import { css, cx,CSSStyleSheet, CSSInterpolation, CSSObject } from '@emotion/css'
import { JsxChild } from 'typescript';
import Theme,{Theme_SubType, Theme_Type} from '../Theme';

//try this color -its good
//color:rgb(108, 99, 255);

/**
 * Props type 
 * intent="errror"|"success"|"normal"|"primary"
 * size="large"|"small" | medium
 * childreen="react childreen"
 * disabled=""; 
 * 
 * Desribe color Schema
 * success or primary - 
 * {
 *   color:#00d09c,
 *    onHover#11a37e:,
 * onACtive:#19896c,
 * border:,
 * } 
 * error{
 *   color:'#D14343',
 *   onHover:'#bd3a3a',
 * onActive:'#b51717'
 * }
 * normal{
 * color:white
 * onHover:only border black
 * onActive:'smoke or dark white'
 * }
 * primary{
 *   color:'#3366ff',
 * onHover:#234cc7,
 * onActive:#082d9b,
 * //transition: box-shadow 80ms ease-in-out;
 * box shadow:0 0 0 2px #d6e0ff;
}
 * }
 */

/**We need to change the color combination - chek succcess color of salesforce component library */
   
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
 function getBorderRadius(size:string){
   
    const radius:any={
        "Large":"4px",
        "Small":"2px",
        "XLarge":"6px"
    }

    return radius[size]
 }

const StyleCssObj:CSSInterpolation={}
const styledButton=(size:sizes,variant:any,disabled:boolean,border?:string,textColor?:string,style?:CSSObject)=>{
    textColor=textColor || Theme['color'];
    
    return css({
        ...getButtonSize(size),
       display:'inline-flex',
       padding:"10px",
       border:border || "none",
       color:textColor,
       borderRadius:getBorderRadius(size),
       transition:'box-shadow 70ms ease-in-out;',
    /**position is set relate bcz if user want to make thier content absolute and align inside button */
       position:"relative",
       cursor:'pointer',
       backgroundColor:Theme[variant].normal,
       "&:hover":{
        backgroundColor:Theme[variant].light
       },
       "&:active":{
        boxShadow:'0 0 0 2px #d6e0ff',
      cursor:'pointer',
      backgroundColor:Theme[variant].dark, 
      },
      "&:focus":{
        boxShadow:'0 0 0 2px #d6e0ff'
      },
      ":disabled":{
        filter: "opacity(30%)",
        cursor: "not-allowed",
        PointerEvent: "none",
        backgroundColor:" #D6E0FF",
        borderColor: "#D6E0FF"
      }
      ,
    ...style   
    })

}

//filter: blur(5px);
//opacity(30%)
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
    children:any,
    variant:string,
    disabled?:boolean,
    border?:string,
    textColor?:string,
    icon?:any,
    iconOnLeft?:boolean,
    iconOnRight?:boolean
    style?:CSSObject,
    onClick?:React.EventHandler<any>
}

 

const imageStyle:React.CSSProperties={
     objectFit: "cover",
      width: "100%",
      height: "20px"
}

function stylesIconWrapper(size:sizes){
   
   return css({
       display:"inline-block",
       width:spacing[size],
      height:0,
      margin:'0 2px'

   })

}

/**We need to make the wrapper for the icon 
 * whose width and height will be dependent on the size of the button
 */
 const IconWrapper=(size:sizes,icon:any)=>{

   return( <div className={stylesIconWrapper(size)}>
   <img style={imageStyle} src={icon}/>
   </div>)

 }
 function defaultClick(){

 }
const Button = (props:props) => {
     
   const { disabled=false,border,textColor,iconOnLeft=true,iconOnRight,icon,onClick=defaultClick}=props;
   
    return (
        <button onClick={onClick} disabled={disabled} className={styledButton(props.size,props.variant,disabled,border,textColor,props.style)}>
            {
             icon?iconOnRight?(<>{props.children}<div />{IconWrapper(props.size,icon)}</>):(<>{IconWrapper(props.size,icon)}{props.children }</>):(props.children)
            }
            

        </button>
    );
};

Button.propTypes = {
    
};

export default Button;

 