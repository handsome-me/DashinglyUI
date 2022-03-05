import { CSSObject } from '@emotion/react';
import { OneKPlusOutlined } from '@mui/icons-material';
import React, {useState, memo } from 'react';
 
import { FieldErrors } from 'react-hook-form/dist/types/errors';

/**
 * id="firstName"
        type="text"
        name="firstName"
        label="First Name"
        placeholder="First Name"
        className="mb-2"
        register={register}
        rules={{ required: 'You must enter your first name.' }}
        errors={errors}
 */

  interface Props{
 
           type:"text" | "password",
           name:string,
           label:string,
           placeHolder:string,
           style?:React.CSSProperties,
           error?:any,
           rules?:any,
           errors?:any
           required?:boolean
           register?:any
        }

const InputField :React.FC<Props>= memo((Props) => {
    const {type,name,label, placeHolder,style,rules,errors,required=false,register}=Props;

     console.log('Errors',errors);
      
    const handleInputOnChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const {value}=event.target;
        const _value=value?.length==0?"":value;
        console.log("ccdcdvalue",_value);
          setValue(_value);
    }
    const [_value,setValue]=useState("");

    console.log("value",_value);
    return (
        <input name={name} 
        value={_value}
        type={type} 
        {...register(name,{minLength: 4,required:true})}
        onChange={handleInputOnChange}
        placeholder={placeHolder} style={style}></input>
    );
});

export default InputField;