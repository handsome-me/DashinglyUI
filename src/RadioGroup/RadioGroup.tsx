import React, { memo, useState } from 'react';
import { StringDecoder } from 'string_decoder';
import Heading from '../Heading/heading';


interface Props{
  name:string,
  title:string
}
const RadioGroup:React.FC<Props> = memo(({title,children,name}) => {
    const [checkedValue,setCheckedValue]=useState("");

     console.log("childreen ",children)
     const onChange=(value:string)=>{
       console.log("onChange of radioButton",value);
       setCheckedValue(value);
     }
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
         <Heading title={title}/> 
         <div>
            {
            React.Children.map(children,(Child:any,index:number)=>{
console.log('Child',Child.props);
            const isChecked=Child.props.value==checkedValue
              return  React.cloneElement(Child,{name:name,onChange:onChange,checked:isChecked}) 
            })
            
            }
         </div>
        </div>
    );
});

export default RadioGroup;