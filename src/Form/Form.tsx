import React, { memo } from 'react';
import {useForm} from 'react-hook-form';
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


      const onSubmit = handleSubmit((data) => {
        console.log('submitting...',data);
      });

     return (
        <form onSubmit={onSubmit}>       
        {
            React.Children.map(children,(child:any)=>{
            
                console.log("-------_-_----------",child);
                 
               return child.props.type=="text"||child.props.type=="password"?(
                   React.cloneElement(child,{register:register,handleSubmit:handleSubmit,errors:errors})
               ):(React.cloneElement(child,{register:register}))
            })
        }    
        </form>
    );
});

export default Form;



const InputGroup=function(){

}