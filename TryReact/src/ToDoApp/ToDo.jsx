import { useState } from 'react'
import style from './ToDo.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
const ToDo = () => {

    const [MyToDo, setMyToDo] = useState([]);
    const [insertValue, setInsertValue] = useState('');
    const addItems = () => {
        if (insertValue.trim() !== '') {
            setMyToDo([...MyToDo, insertValue]);
             setInsertValue('');
           console.log(MyToDo);
        }
    };
    
    const CallForDelete = (index) => {
        console.log(index);
        const newMyToDo = MyToDo.filter((LetsDelete, i ) => i !== index);
        setMyToDo(newMyToDo);
        console.log(newMyToDo);
    }
    const DeleteAll = () => {
        setMyToDo([]);
    }

        const [isVisible, setIsVisible] = useState(false);
        const handleToggle = () => {
            setIsVisible(!isVisible); // Toggle the visibility state
          };
        
  
    return (
        <>
        <div className={style.TodoList} >
            <header className={style.header}> <span> {<ArrowBackIcon />}</span> <h3> To Do </h3> {<ArrowForwardIcon />}</header>
      
        


            <div id={style.forms} style={{ display: isVisible ? 'none' : 'block' }}>
                <input type="text" value={insertValue} onChange={(e) => setInsertValue(e.target.value)} />
                <h5 className={style.add} onClick={addItems}>Add to list</h5>
            </div>
            <ul>
            {MyToDo.map((item, index)=> {
                return(
                <li key={index}>{item}  <div> <span className={style.spans}>{<ArrowBackIcon />}</span> <span onClick={ () => CallForDelete(index)}>{<CloseIcon/>}</span> <span>{<ArrowForwardIcon />}</span> </div> </li>
                )
            })}
            </ul>
          
        {MyToDo.length > 1 &&(
                <button onClick={DeleteAll}> Delete All </button>
            )} 
             <span className={style.AddNew} onClick={handleToggle} ><p> {<ControlPointIcon/>} Add new</p></span>
        </div>
       

        </>
    )
}
export default ToDo;