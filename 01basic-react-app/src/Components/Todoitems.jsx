import './CSS/Todoitems.css'
import checked from './Assets/checked.png'
import unchecked from './Assets/unchecked.png'
import icon from './Assets/icon.png'

const Todoitems = ({no,display,text,setTodos}) => {


  const deletetodo=(no) =>{
    let data=JSON.parse(localStorage.getItem("todos"));
    data=data.filter((todo)=>todo.no!==no);
    setTodos(data);
  }

  const toggle=(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"));
for(let i=0;i<data.length;i++){
      
  if(data[i].no===no){
    if(data[i].display===""){
      data[i].display="line-through"
    }
    else{
      data[i].display="";
    }
    break;
  }
}
setTodos(data);


  }




  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
      {display===""?<img src={unchecked} alt=''/>:
      <img src={checked} alt=''/>}  
        
        <div className='todoitems-text'>{text}</div>
      </div>
      <img className="icon-todo" onClick={()=>{deletetodo(no)}}  src={icon} alt=''/>
    </div>
  )
}

export default Todoitems
