import { ErrorSharp } from '@mui/icons-material';
import React, { memo } from 'react';
import {useForm} from 'react-hook-form';
import Heading from '../Heading/heading';
interface Props{
  


}

const Form :React.FC<Props>=memo((Props) => {
     console.log("  -childreen-  ",Props.children);
     const {children}=Props;
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<any>();


      const onSubmit =(data:any) => {
        console.log('submitting...',data);
      };

      console.log("errors lenth",Object.keys(errors))

     return (
        <form onSubmit={handleSubmit(onSubmit)}>      
         {Object.keys(errors).length&&<Heading style={{color:'red'}} title="Required Field"></Heading> }
        {
            React.Children.map(children,(child:any)=>{                 
               return child.props.type=="text"||child.props.type=="password"?(
                   React.cloneElement(child,{register:register,handleSubmit:handleSubmit,errors:errors})
               ):(React.cloneElement(child,{register:register,errors:errors}))
            })

          
        }    
       
        </form>
    );
});

export default Form;



const InputGroup=function(){

}