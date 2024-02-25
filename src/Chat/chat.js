import { useState , useReducer} from "react";
import "./chat.css";
import 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FaPaperPlane } from "react-icons/fa";

 
function TaskList({
    tasks,
    onChangeTask,
    onDeleteTask  }) {
    const [task, setTask] = useState([]);
    const [click,setClick] = useState(false);
    const [text, setText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    const press = () => {
      setClick(!click);
    };
    return (
    
      <ul className='list'>
      {tasks.map(task => (
        <li className='message'>
        <span  className='textChat' key={task.id}></span>
        <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask}/>
          </li>
        
      ))}
      
     </ul>
  
    );
  }
  
  function Task({ task, onChange, onDelete }) {
    const [click,setClick] = useState(false);
    
    const press = () => {
      setClick(!click);
    };
    let taskContent;
    
    const [isEditing, setIsEditing] = useState(false);
    if (isEditing) {
      taskContent = (
      <>
       <Save task={task} setIsEditing={setIsEditing} onChange={onChange}/>
        </>
  
      );
    } else {
      taskContent = (
      <>
        
        <Edit setIsEditing={setIsEditing} task={task}/>
      </>
      );
    }
  return (
  <>
  <Delete task={task} onDelete={onDelete} taskContent={taskContent}/>
  
  </> 
  ); 
  
  }
  // <Delete task={task} onDelete={oneDlete} taskContent={taskContent}/>
  const Edit = ({task, setIsEditing}) => {
  return (
  <>
  {task.text}
   <br/>
  <button onClick={() => setIsEditing(true)} className='btnE'>
  <FontAwesomeIcon icon={faEdit} size='1.5x'/>
  
   </button>
   </>       
  );
  }
  const Delete = ({task, onDelete, taskContent}) => {
  return (
  <label>
  {taskContent}
  <br/>
      <button onClick={() => onDelete(task.id)} className='btnD'>
      <FontAwesomeIcon icon={faTrash} size='1.5x'/>
      
    </button>
  </label>    
  );
  }
  const Save = ({task, setIsEditing,  onChange}) => {
  return (
  <>
        <input
        value={task.text}
        className='inputCH1'
        onChange={e => {
          onChange({
            ...task,
            text: e.target.value
          });
        }}
      /><br/>
         <button onClick={() => setIsEditing(false)} className='btnS'>
        <FontAwesomeIcon icon={faCheck} size='1.5x'/>
      </button>
        </>
  
  );
  }
  const Message = ({task}) => {
  return (
  <div>
  {task.text}
  </div>
  );
  }
         
           
  //Main
 export default function Chat1() {
  const [tasks, dispatch] = useReducer(
  tasksReducer,
  initialTasks
  );
  
  function handleAddTask(text) {
  dispatch({
    type: 'added',
    id: nextId++,
    text: text,
  });
  }
  
  function handleChangeTask(task) {
  dispatch({
    type: 'changed',
    task: task
  });
  }
  
  function handleDeleteTask(taskId) {
  dispatch({
    type: 'deleted',
    id: taskId
  });
  }
  
  return (
  <div className='chat'>
   
    <TaskList
      tasks={tasks}
      onChangeTask={handleChangeTask}
      onDeleteTask={handleDeleteTask}
      
    />
    <AddTask
      onAddTask={handleAddTask}
    />
  </div>
  );
  }
  
  function tasksReducer(tasks, action) {
  switch (action.type) {
  case 'added': {
    return [...tasks, {
      id: action.id,
      text: action.text,
      done: false
    }];
  }
  case 'changed': {
    return tasks.map(t => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  }
  case 'deleted': {
    return tasks.filter(t => t.id !== action.id);
  }
  default: {
    throw Error('Unknown action: ' + action.type);
  }
  }
  }
  
  let nextId = 0;
  const initialTasks = [];
  
  
  function AddTask({ onAddTask }) {
  const[inputValue, setInputValue] = useState('');
  const [text, setText] = useState('');
  const CheckInput = (e) => {
  setInputValue(e.target.value);
  }
  const TextCheck = (e) => {
  setText(e.target.value);
  }
  const handleCombinedChange = (g) => {
    this.CheckInput(g);
    this.TextCheck(g);
  }
  return (
  <div className='chatIn'>
    <input
      placeholder="Write a message..."
      value={text}
      onChange={e => setText(e.target.value)}
      className='inputCH'
      type='text'
    />
    <button onClick={() => {
      setText('');
      onAddTask(text);
    }}>
     <FaPaperPlane size={25} className='send2'/>
    </button>
  </div>
  );
  }
  