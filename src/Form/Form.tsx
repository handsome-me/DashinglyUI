import React, { memo } from 'react';

interface Props{
  


}

const Form :React.FC<Props>=memo((Props) => {
     console.log("  -childreen-  ",Props.children);
    return (
        <div>
            
        </div>
    );
});

export default Form;



const InputGroup=function(){

}