import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../Theme';
import { css } from '@emotion/css';

alert.propTypes = {
    
};
 
function styleAlert(){
   
    return css({
       display:"flex",
       flex:1,
       backgroundColor:Theme 
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
    action:()=>void,
    icon?:any,
    title?:string,
    
}
function alert(props:props) {
    return (
        <div>
            
        </div>
    );
}

export default alert;