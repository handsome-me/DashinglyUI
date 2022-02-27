import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../Theme';
import { css } from '@emotion/css';
import {AiFillExclamationCircle} from 'react-icons/ai'
alert.propTypes = {
    
};
 
function styleAlert(){
   
    return css({
       display:"flex",
       flex:1,
       backgroundColor:Theme["error"].light,
       border:'1px transparent',
       borderRadius:'5px'

    })

}



enum serverity_type{
    "error"="error",
     "success"="success",
     "info"="info",
     "warning"="warning"
}
enum variant_type{
    "filled"="filled"
}
interface props{
    serverity:serverity_type,
    variant:variant_type,
    action:JSX.Element,
    icon?:any,
    title?:string,
    children:JSX.Element,  
}
function alert(props:props) {
    return (
        <>
        <div style={{display:'inline-flex',}}>
         <AiFillExclamationCircle color='red'/>
        </div>
        <div className={styleAlert()}>
            {props.children}
        </div>
        <div style={{display:'inline-block',margin:"5px"}}>
            {props.action}
        </div>
        </>
    );
}

export default alert;