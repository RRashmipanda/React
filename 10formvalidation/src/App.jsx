 import { useState } from 'react'
import Forminput from './Components/Forminput'

const App = () => {

  const [values,setValues] = useState({
    username:"",
    email:"",
   birthday :"",
    password:"",
    confirmPassword:"",
  })
  

const inputs =[
  {
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    errorMessage:"username bet 3to16 character",
    label:"Username",
    pattern:"^[A-Za-z0-9]{3,16}$",
    required:true,
  },
  
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email",
    errorMessage:"it should be a valid email",
    label:"Email",
    required:true,
  }
,
  {
    id:3,
    name:"birthday",
    type:"date",
    placeholder:"Birthday",
    label:"Birthday"
  }
,
  {
    id:4,
    name:"password",
    type:"password",
    placeholder:"Password",
    errorMessage:"password should be 8-20 characters",
    label:"Password",
    required:true,
  },
  {
    id:5,
    name:"confirmPassword",
    type:"password",
    placeholder:"Confirm Password",
    errorMessage:"password dont match",
    label:"Confirm Password",
    pattern:values.password,
    required:true,
  }
]

const handleSubmit = (e) =>{
  e.preventDefault();
}

const onChange = (e)=>{
    setValues({...values,[e.target.name]: e.target.value})
}

console.log(values)
  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) =>(
<Forminput key=
 {input.id} {...input} 
 value={values[input.name]} 
 onChange={onChange}
 />
        ))}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
