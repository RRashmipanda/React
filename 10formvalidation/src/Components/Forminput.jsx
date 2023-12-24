import { useState } from "react";
import "./Form.css"

const Forminput = (props) => {
  const {label,errorMessage, onChange, id, ...inputProps} =props;

  const[focused, setFocuesed] =useState(false);
  const handleFocus=(e) =>{
    setFocuesed(true);
  }
  return (
    <div className='formInput'>
      <label>{label}</label>
      <input {...inputProps} 
      onChange={onChange} 
      onBlur={handleFocus} 
      onFocus={inputProps.name==="confirmPassword" && setFocuesed(true)}
      focused={focused.toString()}/>
      <span>{errorMessage}</span>
    </div>
  )
}

export default Forminput
