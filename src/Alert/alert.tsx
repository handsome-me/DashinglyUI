import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../Theme';
import { css } from '@emotion/css';
import {AiFillExclamationCircle,AiFillCheckCircle} from 'react-icons/ai'
import Heading from '../Heading/heading';
// alert.propTypes = {
    
// };
/**
 * 
 * @param serverity 
 * @returns 
 * 
 * CheckList
 * 1-make the title working with props.childreen (div on other line causing issue)
 * 2-typescript is not written propery
 * 
 */
 
function styleAlert(serverity:serverity_type,variant:variant_type){
   
    return css({
       display:"flex",
       flex:1,
       backgroundColor:variant?variant==="filled"?Theme[serverity].dark:Theme[serverity].deepLight:Theme[serverity].deepLight,
       border:'1px transparent',
       borderRadius:'5px',
       padding:'3px'
       
    })

}



type serverity_type="error"| "success" | "info" |"warning"
type variant_type="filled";
interface props{
    serverity:serverity_type,
    variant:variant_type,
    action?:JSX.Element | any,
    icon?:any,
    title?:string,
    children?:any,  
}

function renderIcon(expression:string){
    switch(expression) {
        case "error":
          // code block
          return <AiFillExclamationCircle size="25px"  color='red'/>
          
        case "success":
          // code block
          return <AiFillCheckCircle size="25px"  color={'#4caf50'}/>
         
          case "primary":
            // code block
            break;
        default:
          // code block
          return <AiFillExclamationCircle size="25px"  color='red'/>
      }

}
function Alert(props:props) {
    return (
        
        <div className={styleAlert(props.serverity,props.variant)}>     
        
       <div style={{display:'inline-flex',margin:"0 5px"}}>
         {renderIcon(props.serverity)}
        </div>
        {
          props.title&& typeof(props.title)==="string"?(<Heading title={props.title} style={{color:props.variant==="filled"?"white":""}}/>):(props.title)
        }
        
        {!props.title&&
            <div>
            {props.children}
        </div>
         }
        
        {props.action&&

        <div style={{display:'inline-block',margin:"5px"}}>
            {props.action}
        </div>
          }

        </div>
 
    );
}

export default Alert;