import React, { memo } from 'react';
import { StringDecoder } from 'string_decoder';
import Heading from '../Heading/heading';


interface Props{
  name:string,
  title:string
}
const RadioGroup:React.FC<Props> = memo(({title,children,name}) => {
     console.log("childreen ",children)
     const onChange=()=>{
       console.log("onChange of radioButton");
     }
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
         <Heading title={title}/> 
         <div>
            {
            React.Children.map(children,(Child:any)=>{
              return  React.cloneElement(Child,{name:name,onChange:onChange}) 
            })
            
            }
         </div>
        </div>
    );
});

export default RadioGroup;