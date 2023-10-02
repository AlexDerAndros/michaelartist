import {useState} from 'react';
import { useReducer, useContext , useEffect, useRef } from 'react';
import Search from './Search/Search';
import './App.css';
import ReactGA from 'react-ga';
import { FaImages } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaPaperPlane } from "react-icons/fa";
import { FaSignInAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { counter, text } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import fire from './config/firebase';
import { Component } from 'react';
//Login https://firebase.google.com/docs/auth/web/start?hl=de



class app extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({user})
      }
      else {
        this.setState({user: null})
      }
    })
  }
render() {
  return <App/>
}
 

  
}


  export default function App() {
    return (
     <main>
     <Header/>
    <Bottom/>
      </main>
    );
//    Aktualisierung einer React App: 1.npm run build 2.firebase deploy oder firebase deploy --only hosting:michael--artist
//   3.Quellcodeverwaltung unten dann oben commit 4. Aktualisieren
//   Wichtig: immer alles auf der neusten Version und updaten ab und zu
 }
function Header() {
  return (
   <div className='header'>
   
      <div className='title' > 
      Artist Michael Ntrikos
      </div>
      <div className='foto1'>
        <a href='https://www.tiktok.com/@meineartmichael?_t=8bx04ojY9ME&_r=1'>
          <img className='img1' src='./tiktok.jpeg'/>
        </a>
      </div>
      <div className='foto2'>
        <a href='https://www.instagram.com/michael.n.artist/?igshid=YmMyMTA2M2Y%3D'>
         <img className='img2' src='./instagram.jpeg'/>
        </a>
      </div>

    </div>
  );
}
function Hamburger() {
  const [click,setClick] = useState(false);
  
  const press = () => {
    setClick(!click);
  };
  return (
  
 <div className='ham'>
   <div onClick={press} className='click'>
    <div className='linie1'></div>
    <div className='linie2'></div>
    <div className='linie3'></div>
   </div>
 { click && (
  <div className='content'>
  <div className='textCo'>
  <ul>
    <li>
      <span className='element'>
        Hallo
      </span>
    </li>
  </ul>
  </div>
  </div>
 )}
 </div>
  );
}
const images =['./michaelBackground.png', './TraumfrauBlume.jpeg', './FrauGarage.jpeg', './mannBlitz2.jpeg'
, './FrauSchläft.jpeg', './EngelTeufel.jpeg','./Maria2.jpeg', './Teufel2.jpeg', './Wikinger.jpeg', './BlumenFrau2.jpeg', 
'./Eiffelturm.jpeg', './KettenFrau2.jpeg', './KronenFrau.jpeg', './BaumFrau.jpeg', './Läspisch2.jpeg',
'./WasserFrau.jpeg', './LampenFrau.jpeg', './GeEngel.jpeg', './SchiffE2.jpeg', './BuntF.jpeg', './HolzSchiff.jpeg',
'./Eli2.jpeg', './EngFrau2.jpeg', './FrauS.jpeg' , './BetenF.jpeg', './BootFrau.jpeg', './ColleFRau2.jpeg', './Athen.jpeg', './BluSchlafFrau.jpeg'
, './Indianer.jpeg', './Cello2.jpeg', './Avatar2.jpeg', './BRFrau.jpeg', './HaarMerer.jpeg', './SpiegelF.jpeg', './SchlafMF.jpeg',
'./LächelF.jpeg', './SchWeiF.jpeg', './Tanzen2.jpeg', './Pferd2.jpeg', './CringeF.jpeg', './TanzendeF.jpeg', './AlkoholF2.jpeg',
 './Löwe.jpeg', './BulleF.jpeg', './FrauSch.jpeg', './BuntF2.jpeg', './KriegerGF.jpeg','./FischF.jpeg', './SchmetterlingF.jpeg', './StockF.jpeg',
'./FarbenF.jpeg', './Hochzeit.jpeg', './BootE.jpeg', './HausdGe.jpeg', './Brüste.jpeg', './FBJZ.jpeg', './SchiffAE2.jpeg',
'./FrauSilber.jpeg', './MickeyMouse.jpeg', './Statur.jpeg'];
function ImageList (){
  const [currentIndex, setCurrentIndex]= useState(0);
  const[click,setClick] = useState(false);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const toggleImageSize = () => {
    setIsImageExpanded(!isImageExpanded);
    setZoomLevel(1); // Beim Zurücksetzen auf Standardgröße auch den Zoom auf 1 setzen
  };

  
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
    prevIndex === images.length - 1 ? 0 : prevIndex + 1
  );
  }
  function prevImage() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }
  const BiggerPic = () => {
    setClick(!click);
  }
  
  return (
   <div  style={{
    width:  '71%',
    height: '74%',
    background:click ? 'none' : 'rgba(0, 0, 0, 0.639)',
    display: 'flex',
    flexDirection: 'column',
    borderRadius:' 4%', 
    position: 'sticky',
    margin: '2% 13%'}}>
    <img className='imgI' src= {images[currentIndex]} onClick={BiggerPic}
       style={{
          cursor: 'pointer',
          transform: click ? 'scale(1.7)' : 'scale(1)',
          transition: ' 0.3s ease-in-out',
          width: click ? '80%' :'70%',
         height: '85%',
         borderRadius: '4%',
         margin: click ? '0% 0% 1% 10%' : '2% 10% 1% 16%',
          zIndex: click ? '100' : '-100',
          maxWidth:'600px',
          maxHeight:'500px'
          
        }}
    />
    <div className='imgBtn'> 
    <button  onClick={prevImage} className='btn1'> 
      <FontAwesomeIcon icon={faArrowRight} size='1x' style={{color:  click ? 'transparent' : 'white',transform:'rotate(-180deg)', position:'absolute'}} />
    </button>
  <button className='btn1' onClick={nextImage}>
    <FontAwesomeIcon icon={faArrowRight} style={{color:  click ? 'transparent' : 'white',  position:'absolute',  margin:'0% -35%'}}/>
  </button>
    </div>
   </div>
  );
}
const Info = () => {
  return (
    <div className='Imp'>
      <br/>
      <br/>
      <br/>
      <br/>
      <ul className='infoUN'>
        <li className='fontIn textIF'>
          Impressum
        </li>
        <li className='DatER textIF'>
          Privacy policy
        </li>
        <li className='NutzBe textIF'>          Terms of use
        </li>
      </ul>
    </div>
  );
}
const Impressum = () => {
  return(
    <>

    </>
  );
}
const Datenschutzerklärung = () => {
  return(
    <>
    </>
  );
}
const Nutzungsbedingungen = () => {
  return(
    <>
    </>
  );
}
function Home() {
  ReactGA.initialize('YOUR_TRACKING_ID');
  ReactGA.pageview(window.location.pathname);
  

 return (
<div className='Mitte'>
 <div className='info1'> 
  Welcome to my website!
</div>
<div className='info'>
"If you feel it, you can paint it.
When you paint, you feel it."  By Michael Ntrikos
</div>
<ImageList/>
<br/>
  </div>
 );
}
function Bottom() {
return (
<Router>
 <div className='unten'>
   <div>
   <Link to="/">
    <div style={{ color: 'white'}} className='po'>
      <FaHome size={40} />
    </div>
    </Link>
   </div>
   <div>
   <Link to= "/Search">
   <div style={{ color: 'white'  }} className='po2'>
      <FaSearch size={38} />
    </div>
    </Link>
   </div>
   <Link to="/bildgalerie" className='po3'>
   <div style={{ color: 'white'}}>
      <FaImages size={40} />
    </div>
  </Link>
  <Link to= "/chat">
    <div style={{ color: 'white'}} className='po1'>
      <FaComment size={35} />
    </div>
  </Link>
  <Link to= "/login">
    <div style={{ color: 'white'}} className='po4'>
      <FaSignInAlt size={35} />
    </div>
  </Link>
  <Link to='/Videogalerie'>
   <div className='shPi'>
    <FontAwesomeIcon icon={faVideo} style={{color:'white'}} size='2x' />
   </div>
  </Link>
  <Link to='/PictureShop'>
   <div className='shPi'>
    <FontAwesomeIcon icon={faShoppingCart} style={{color:'white'}} size='2x' />
    </div>
  </Link>
    <Routes>
    <Route path="/" element={<Home/>}/>
   <Route path="/bildgalerie" element={<Bildgalerie/>}/>
   <Route path="/Search" element={<SEARCH/>}/>
   <Route path="/chat" element={<Chat/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path='/PictureShop' element={<PictureShop/>}/>
   <Route path='/Videogalerie' element={<Videogalerie/>}/>
  </Routes>
 </div>
 </Router>
);
}


//Chat


 
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
          <li key={task.id}   onClick={press} className='message'>
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
         <Save task={task} setIsEditing={setIsEditing} text={text} onChange={onChange}/>
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
    Edit
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
        Delete
      </button>
    </label>    
  );
}
const Save = ({task, setIsEditing, text, onChange}) => {
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
        />
           <button onClick={() => setIsEditing(false)} className='btnS'>
          Save
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
function Chat() {
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
  let summ = inputValue + text ;
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
//Bildgalerie
function Bildgalerie() {
  return (
      <div className='bildgalerie'>
          <div className='grid'>
            <img src={images[0]} className='imgG'/>
            <InfoB/>
            <img src={images[1]} className='imgG'/>
            <InfoB/>
            <img src={images[2]} className='imgG'/>
            <InfoB/>
            <img src={images[3]} className='imgG'/>
            <InfoB/>
            <img src={images[4]} className='imgG'/>
            <InfoB/>
            <img src={images[5]} className='imgG'/>
            <InfoB/>
            <img src={images[6]} className='imgG'/>
            <InfoB/>
            <img src={images[7]} className='imgG'/>
            <InfoB/>
            <img src={images[8]} className='imgG'/>
            <InfoB/>
            <img src={images[9]} className='imgG'/>
            <InfoB/>
            <img src={images[10]} className='imgG'/>
            <InfoB/>
            <img src={images[11]} className='imgG'/>
            <InfoB/>
            <img src={images[12]} className='imgG'/>
            <InfoB/>
            <img src={images[13]} className='imgG'/>
            <InfoB/>
            <img src={images[14]} className='imgG'/>
            <InfoB/>
            <img src={images[15]} className='imgG'/>
            <InfoB/>
            <img src={images[16]} className='imgG'/>
            <InfoB/>
            <img src={images[17]} className='imgG'/>
            <InfoB/>
            <img src={images[18]} className='imgG'/>
            <InfoB/>
            <img src={images[19]} className='imgG'/>
            <InfoB/>
            <img src={images[20]} className='imgG'/>
            <InfoB/>
            <img src={images[21]} className='imgG'/>
            <InfoB/>
            <img src={images[22]} className='imgG'/>
            <InfoB/>
            <img src={images[23]} className='imgG'/>
            <InfoB/>
            <img src={images[24]} className='imgG'/>
            <InfoB/>
            <img src={images[25]} className='imgG'/>
            <InfoB/>
            <img src={images[26]} className='imgG'/>
            <InfoB/>
            <img src={images[27]} className='imgG'/>
            <InfoB/>
            <img src={images[28]} className='imgG'/>
            <InfoB/>
            <img src={images[29]} className='imgG'/>
            <InfoB/>
            <img src={images[30]} className='imgG'/>
            <InfoB/>
            <img src={images[31]} className='imgG'/> 
             <InfoB/>
            <img src={images[32]} className='imgG'/>
            <InfoB/>
            <img src={images[33]} className='imgG'/>
            <InfoB/>
            <img src={images[34]} className='imgG'/>
            <InfoB/>
            <img src={images[35]} className='imgG'/>
            <InfoB/>
            <img src={images[36]} className='imgG'/>
            <InfoB/>
            <img src={images[37]} className='imgG'/>
            <InfoB/>
            <img src={images[38]} className='imgG'/>
            <InfoB/>
            <img src={images[39]} className='imgG'/>
            <InfoB/>
            <img src={images[40]} className='imgG'/>
            <InfoB/>
            <img src={images[41]} className='imgG'/>
            <InfoB/>
            <img src={images[42]} className='imgG'/>
            <InfoB/>
            <img src={images[43]} className='imgG'/>
            <InfoB/>
            <img src={images[44]} className='imgG'/>
            <InfoB/>
            <img src={images[45]} className='imgG'/>
            <InfoB/>
            <img src={images[46]} className='imgG'/>
            <InfoB/>
            <img src={images[47]} className='imgG'/>
            <InfoB/>
            <img src={images[48]} className='imgG'/>
            <InfoB/>
            <img src={images[49]} className='imgG'/>
            <InfoB/>
            <img src={images[50]} className='imgG'/>
            <InfoB/>
            <img src={images[51]} className='imgG'/>
            <InfoB/>
            <img src={images[52]} className='imgG'/>
            <InfoB/>
            <img src={images[53]} className='imgG'/>
            <InfoB/>
            <img src={images[54]} className='imgG'/>
            <InfoB/>
            <img src={images[55]} className='imgG'/>
            <InfoB/>
            <img src={images[56]} className='imgG'/>
            <InfoB/>
            <img src={images[57]} className='imgG'/>
            <InfoB/>
            <img src={images[58]} className='imgG'/>
            <InfoB/>
            <img src={images[59]} className='imgG'/>
            <InfoB/>
            <img src={images[60]} className='imgG'/>
            <InfoB/>
          </div>
      </div>
  );
}
function InfoB() {
  return ( 
    <div className='icons1'>
      <div className='like1'>
        <Likes/>
      </div>
      
    </div>
  );
}

function Comments() {
  const [click, setClick] = useState(false);
  const [com, setCom] = useState('');
  const [comList, setComList] = useState([]);
  let nextId = 0;

  const press = () => {
    setClick(!click);
  };

  return (
    <div className='comments'>
      <FaComment className='ani' onClick={press} size={45} style={{color:'white'}}/>

      {click && (
        <div className='commentOpen'>
          <input
            type='text'
            value={com}
            onChange={(e) => setCom(e.target.value)}
            placeholder='Write a comment'
            className='input1'
          />
          <button
            onClick={() => {
              setComList([...comList, { id: nextId++, com: com }]);
              setCom('');
            }}
          >
           <FaPaperPlane size={30} className='send1'/>
          </button>
          <ul>
            {comList.map(co => (
              <li key={co.id}>
                <div className='newCo'>{co.com}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Likes() {
  const [like, setLike] = useState('white');
  const [click, setClick] = useState(false);
  
  
    const randomNumber = Math.floor(Math.random() * 5000); // Hier wird eine zufällige Zahl von 0 bis 99 generiert
  const [likeNumber, setLikeNumber] = useState(randomNumber);
 
  const handleClick = () => {
    let newCount;
    if (like === 'red') {
      setLike('white');
      newCount = likeNumber - 1;
      setLikeNumber(newCount);
      setClick(click);
      
    } else {
      setLike('red');
      newCount = likeNumber + 1;
      setLikeNumber(newCount);
      setClick(!click);
      
    }
   
    
  };
 
  
  


  

  return (
    <div className='likes'>
      <button onClick={handleClick}>
        <FaHeart className='ani' size={45} style={{ color: like }} />
      </button>
      <div className='likeNumber'>
        {likeNumber}
      </div>
    </div>
  );
}



//Search
function SEARCH() {
  return ( 
  <Search/>
  );
}
//Login und Sigup

function Login() {
  const [click,setClick]= useState(false);
  
  const press = () => {
    setClick(!click);
  }
  if (!click) {
    
    return (
      <div className='login'>
      <Log/>
      <br/>
      <br/>
      <br/>
      <br/>
       <div className='importantI'>
       If your are not yet logged in
       <span className='sg' onClick={press}> please register!  </span>
         </div>
         </div>
     );
   }
 else {
  return (
    <div className='login'>
    <button onClick={press}>
     <FontAwesomeIcon icon={faArrowRight} size='2x' style={{color:'white',
     transform:'rotate(-180deg)', position:'absolute', cursor:'pointer'
     }} />
     </button>
    <Signup/>
  </div>
  );
}
}

function Signup() {
  const [addUsername, setAddUsername]= useState('');
  const [addPassword, setAddPassword]= useState('');
  return (
    <div className='signUP'>
     <div className='headR'>
      Register
     </div>
     <br/>
    <div className='REG'>
     <input id='email' className='child'  type='email' placeholder="Enter an email adress..." />
     <input id='us1'  className='child' type="text" placeholder="Create an username..." />
      <input id='pa1'  className='child' type="password" placeholder="Create a password..."  />
      <input id='pa1'   className='child' type="password" placeholder="Repeat your password..."  />
     </div>
     <br/>
     <br/>
      <button style={{fontSize:'1.5vh'}}>
      {/* <p className="AniB" onClick={()=> {
        if (addUsername == addUsername && addPassword == addPassword){
          alert("Register successful");
        }
        else {
          alert("Register failed");
        }
      }> */}
      <p className="AniB">
        Register
      </p>
      </button>
    </div>
  );

}
const Log = () => {
  // const [username, setUsername]= useState('');
  // const [password, setPassword]= useState('');
  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };
  // const handlePasswortChange = (e) => {
  //   setPassword(e.target.value);
  // };
  // const handleLogin = () => {
  //   if (username === 'admin') {
  //     alert("Login successful");
  //   }
  //   else {
  //     alert("Login failed");
  //   } 
  // }
 return (
  
    <div>
    <div className='head'>
      Login
    </div>
    <form>
      <input id='us' type="text" placeholder="Username..." />
      <br/>
      <input id='pa' type="password" placeholder="Password..."   />
      <br/>
      <br/>
      <br/>
      <button className='logBtn' type='submit' >
      <p className="AniB" style={{fontSize:'2.5vh'}}>
        Login
      </p>
      </button>
      </form>
     
    </div>   
    );
 }

//Videogalerie
function Likes1() {
  const [like,setLike] = useState('white');
  const [likeNumber, setLikeNumber] = useState(1999);
  const handleClick = () => {
    if (like === 'red') {
      setLike('white');
      setLikeNumber((prevScore) => prevScore - 1);
    }
    else {
      setLike('red');
      setLikeNumber((prevScore) => prevScore + 1)
    }
  }
   return (
     <div className='likes'>
     <button  onClick={handleClick}>
        <FaHeart className='ani1' size={45} style= {{ color: like}} />
     </button>
       <div className='likeNumber1'>
        {likeNumber}
       </div>
      </div> 
   );
   }
const videos = [
  './C4EF135C-1DD4-469C-81D3-448FBB715860.mp4','./A0F18F97-7A34-4312-9BFD-0B3B363503A1.mp4',
  './64E90D9B-1865-4A24-9EB7-9C398D11FC50.mp4','./31C18F11-3C66-4BC9-9B48-C02A3127BD89.mp4',
  './3494B8E0-9DBB-4BCF-9D3B-120BC9676661.mp4','./FFFEDECD-A80B-4AF7-B3AC-9E3CDBFB2E69.mp4',
 './85210F06-83A1-4F7C-85C7-0C2475B1FE93.mp4','./B4B3E89B-E02F-4735-97EC-D467C10D7874.mp4',
'./4F2D5055-EED0-498C-BDCD-FD2F4DC7D910.mp4', './C30BCC52-6700-4FCF-9B90-167169F37065.mp4',
'./copy_B0D61099-C60A-4D60-9B07-08C4248CD82B.mp4','./B385F5F1-CA88-490F-9CA3-61E6C5B166EC.mp4',
'./A02876CC-9293-48F9-9B32-127EDD12F151.mp4','./export_1683919611553.mp4',
'./41999F3E-67B9-4AD4-BCF4-90C304F84E04.mp4', "./D9EFDC13-AA25-4747-AA3C-587C5C6461A9.mp4",
'./C62DBA36-81A8-4664-8E29-9FCF91248950.mp4', './2E7ED2C4-EB5C-469A-9AEA-07824BD0194C.mp4',
'./521B77C0-DD4C-417E-A842-B9DF6DF343D0.mp4','./3DE96816-A4FF-466B-94BB-2BE1F8604E5B.mp4',
'./8C8364AC-72DD-46D1-9254-1DBD2668A3AA.mp4',
];
const Videogalerie = () => {
 
 const [currentIndex, setCurrentIndex]= useState(0);
 const nextImage = () => {
  setCurrentIndex((currentIndex + 1) % videos.length);
}
function prevImage() {
  setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? videos.length - 1 : prevIndex - 1
  );
}
  return (
    <div className='videogalerie'>
       <video controls autoPlay className='video' key={videos[currentIndex]}>
        <source src={videos[currentIndex]} type="video/mp4"/>
        Your browser does not support the video tag.
       </video>
       <div className='imgBtn'>
    <button  onClick={prevImage} className='btn1'> 
      <FontAwesomeIcon icon={faArrowRight} size='1x' style={{color:'white', position:'absolute',transform:'rotate(-180deg)', margin: '0% 57%'}} />
    </button>
    <button className='btn1' onClick={nextImage}>
    <FontAwesomeIcon icon={faArrowRight} style={{color:  'white', position:'absolute', margin:'0% -62%'  }}/>
  </button>
    </div>
    </div>
  );
}

//Picture shop

const PictureShop = () => {
  const [click, setClick] = useState(false);
 
  const press = () => {
    setClick(!click);
  }
  const pressDif= () => {
    setClick(click);
  }
  const[click0,setClick0] = useState(false);
  const press0 = () => {
    setClick0(!click0);
  }
  const[click1,setClick1] = useState(false);
  const press1 = () => {
    setClick1(!click1);
  }
  const[click2,setClick2] = useState(false);
  const press2 = () => {
    setClick2(!click2);
  }
  const[click3,setClick3] = useState(false);
  const press3 = () => {
    setClick3(!click3);
  }
  const[click4,setClick4] = useState(false);
  const press4 = () => {
    setClick4(!click4);
  }
  const[click5,setClick5] = useState(false);
  const press5 = () => {
    setClick5(!click5);
  }
  const[click6,setClick6] = useState(false);
  const press6 = () => {
    setClick6(!click6);
  }
  const[click7,setClick7] = useState(false);
  const press7 = () => {
    setClick7(!click7);
  }
  const[click8,setClick8] = useState(false);
  const press8 = () => {
    setClick8(!click8);
  }
  const[click9,setClick9] = useState(false);
  const press9 = () => {
    setClick9(!click9);
  }
  const[click10,setClick10] = useState(false);
  const press10 = () => {
    setClick10(!click10);
  }
  const[click11,setClick11] = useState(false);
  const press11 = () => {
    setClick11(!click11);
  }
  const[click12,setClick12] = useState(false);
  const press12 = () => {
    setClick12(!click12);
  }
  const[click13,setClick13] = useState(false);
  const press13 = () => {
    setClick13(!click13);
  }
  const[click14,setClick14] = useState(false);
  const press14 = () => {
    setClick14(!click14);
  }
  const[click15,setClick15] = useState(false);
  const press15 = () => {
    setClick15(!click15);
  }
  const[click16,setClick16] = useState(false);
  const press16 = () => {
    setClick16(!click16);
  }
  const[click17,setClick17] = useState(false);
  const press17 = () => {
    setClick17(!click17);
  }
  const[click18,setClick18] = useState(false);
  const press18 = () => {
    setClick18(!click18);
  }
  const[click19,setClick19] = useState(false);
  const press19  = () => {
    setClick19(!click19);
  }
  const[click20,setClick20] = useState(false);
  const press20 = () => {
    setClick20(!click20);
  }
  const[click21,setClick21] = useState(false);
  const press21 = () => {
    setClick21(!click21);
  }
  const[click22,setClick22] = useState(false);
  const press22 = () => {
    setClick22(!click22);
  }
  const[click23,setClick23] = useState(false);
  const press23 = () => {
    setClick23(!click23);
  }
  if (!click0 && !click1&& !click2&& !click3&& !click4 && !click5&& !click6 && !click7 && !click8 && !click9 && !click10 && !click11 && !click12&& !click13&& !click14&& !click15&& !click16&& !click17&& !click18&& !click19&& !click20&& !click21&& !click22&& !click23) {
    return (
   <div className='pictureShop'>   
   <div>
       <div className='head'>
        Picture shop
     </div>
      <br/>
     <div className='fil' onClick={press}> 
      <div className='filter'>
       FILTER
      </div>
     <div> 
      <div className='PicHam' ></div> 
      <div className='PicHam1' ></div> 
      <div className='PicHam2' ></div> 
     </div>
      {click && (
        <div className='resHam'>
     <ul>
        <li>
           <input type='text' id='under100' className='checkIn'/>
        </li>
      </ul>
      <br/>
      <br/>
        </div>
      )}   
     </div> 
     {click && (
      <div>
        <br/>
        <br/>
      </div>
     )}
     </div>
      <div className='shopGR'>
     <div className='elePic' onClick={press0}>
      <img className='imgSh' src={ShopImages[0].src} />
      <div className='pri'>
        Price: {ShopImages[0].price}€
      </div>
     </div>
     <div className='elePic' onClick={press1}>
      <img className='imgSh' src={ShopImages[1].src}/>
      <div className='pri'>
        Price: {ShopImages[1].price}€
      </div>
     </div>
     <div className='elePic' onClick={press2}>
      <img className='imgSh' src={ShopImages[2].src}/>
      <div className='pri'>
        Price: {ShopImages[2].price}€
      </div>
     </div>
     </div> 
     <div className='shopGR1'> 
      <div className='elePic' onClick={press3}>
       <img className='imgSh' src={ShopImages[3].src} />
        <div className='pri'>
         Price: {ShopImages[3].price}€
       </div>
      </div> 
     <div className='elePic' onClick={press4}>
      <img className='imgSh' src={ShopImages[4].src}/>
      <div style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>
        Price: {ShopImages[4].price}€
      </div>
     </div> 
     <div className='elePic' onClick={press5}>
      <img className='imgSh' src={ShopImages[5].src}/>
      <div className='pri3'>
        Price: {ShopImages[5].price}€
      </div>
     </div>

     </div> 

      <div className='shopGR2'>
       <div className='elePic' onClick={press6}>
        <img className='imgSh' src={ShopImages[6].src}/>
          <div className='pri'>
            Price: {ShopImages[6].price}€
          </div>
       </div>
     <div className='elePic' onClick={press7}>
        <img className='imgSh' src={ShopImages[7].src}/>
       <div className='pri'>
         Price: {ShopImages[7].price}€
       </div>
      </div>
     <div className='elePic' onClick={press8}>
       <img className='imgSh' src={ShopImages[8].src}/>
       <div className='pri'>
        Price: {ShopImages[8].price}€
       </div>
      </div>
      </div> 
     <div className='shopGR3'>
     <div className='elePic' onClick={press9}>
       <img className='imgSh' src={ShopImages[9].src}/>
       <div className='pri'>
        Price: {ShopImages[9].price}€
       </div>
      </div>
      <div className='elePic' onClick={press10}>
       <img className='imgSh' src={ShopImages[10].src}/>
       <div className='pri'>
        Price: {ShopImages[10].price}€
       </div>
      </div>
      <div className='elePic' onClick={press11}>
       <img className='imgSh' src={ShopImages[11].src}/>
       <div className='pri'>
        Price: {ShopImages[11].price}€
       </div>
      </div>
      </div>

     <div className="shopGR4">
     <div className='elePic' onClick={press12}>
       <img className='imgSh' src={ShopImages[12].src}/>
       <div className='pri'>
        Price: {ShopImages[12].price}€
       </div>
      </div>
      <div className='elePic' onClick={press13}>
       <img className='imgSh' src={ShopImages[13].src}/>
       <div className='pri'>
        Price: {ShopImages[13].price}€
       </div>
      </div>
      <div className='elePic' onClick={press14}>
       <img className='imgSh' src={ShopImages[14].src}/>
       <div className='pri'>
        Price: {ShopImages[14].price}€
       </div>
      </div>
     </div>
    
    <div className='shopGR5'>
    <div className='elePic' onClick={press15}>
       <img className='imgSh' src={ShopImages[15].src}/>
       <div className='pri'>
        Price: {ShopImages[15].price}€
       </div>
      </div>
      <div className='elePic' onClick={press16}>
       <img className='imgSh' src={ShopImages[16].src}/>
       <div className='pri'>
        Price: {ShopImages[16].price}€
       </div>
      </div>
      <div className='elePic' onClick={press17}>
       <img className='imgSh' src={ShopImages[17].src}/>
       <div className='pri'>
        Price: {ShopImages[17].price}€
       </div>
      </div>
    </div>

    <div className='shopGR6'>
    <div className='elePic' onClick={press18}>
       <img className='imgSh' src={ShopImages[18].src}/>
       <div className='pri'>
        Price: {ShopImages[18].price}€
       </div>
      </div>
      <div className='elePic' onClick={press19}>
       <img className='imgSh' src={ShopImages[19].src}/>
       <div className='pri'>
        Price: {ShopImages[19].price}€
       </div>
      </div>
      <div className='elePic' onClick={press20}>
       <img className='imgSh' src={ShopImages[20].src}/>
       <div className='pri'>
        Price: {ShopImages[20].price}€
       </div>
      </div>

  </div>

     <div className='shopGR7'>
    <div className='elePic' onClick={press21}>
       <img className='imgSh' src={ShopImages[21].src}/>
       <div className='pri'>
        Price: {ShopImages[21].price}€
       </div>
      </div>
      <div className='elePic' onClick={press21}>
       <img className='imgSh' src={ShopImages[21].src}/>
       <div className='pri'>
        Price: {ShopImages[21].price}€
       </div>
      </div>
      <div className='elePic' onClick={press21}>
       <img className='imgSh' src={ShopImages[21].src}/>
       <div className='pri'>
        Price: {ShopImages[21].price}€
       </div>
      </div>
  </div>
   
      
    </div> 
    );
  }
  else if (click0) {
    return(
      <div className='pictureShop'>
       <button onClick={press0}>
     <BackSymbol/>
     </button>
        <ShopImage0/>
       
      </div>
    )
  }
  else if (click1) {
    return(
      <div className='pictureShop'>
       <button onClick={press1}>
     <BackSymbol/>
     </button>
        <ShopImage1/>
       
      </div>
    )
  }
  else if (click2) {
    return(
      <div className='pictureShop'>
       <button onClick={press2}>
     <BackSymbol/>
     </button>
        <ShopImage2/>
       
      </div>
    )
  }
  else if (click3) {
    return(
      <div className='pictureShop'>
       <button onClick={press3}>
     <BackSymbol/>
     </button>
        <ShopImage3/>
       
      </div>
    )
  }
  else if (click4) {
    return(
      <div className='pictureShop'>
       <button onClick={press4}>
     <BackSymbol/>
     </button>
        <ShopImage4/>
       
      </div>
    )
  }
  else if (click5) {
    return(
      <div className='pictureShop'>
       <button onClick={press5}>
        <BackSymbol/>    
     </button>
        <ShopImage5/>
       
      </div>
    )
  }
  else if (click6) {
    return(
      <div className='pictureShop'>
       <button onClick={press6}>
        <BackSymbol/>    
     </button>
        <ShopImage6/>
       
      </div>
    )
  }
  else if (click7) {
    return(
      <div className='pictureShop'>
       <button onClick={press7}>
        <BackSymbol/>    
     </button>
        <ShopImage7/>
       
      </div>
    )
  }
  else if (click8) {
    return(
      <div className='pictureShop'>
       <button onClick={press8}>
        <BackSymbol/>    
     </button>
        <ShopImage8/>
       
      </div>
    )
  }
  else if (click9) {
    return(
      <div className='pictureShop'>
       <button onClick={press9}>
        <BackSymbol/>    
     </button>
        <ShopImage9/>
       
      </div>
    )
  }
  else if (click10) {
    return(
      <div className='pictureShop'>
       <button onClick={press10}>
        <BackSymbol/>    
     </button>
        <ShopImage10/>
       
      </div>
    )
  }
  else if (click11) {
    return(
      <div className='pictureShop'>
       <button onClick={press11}>
        <BackSymbol/>    
     </button>
        <ShopImage11/>
       
      </div>
    )
  }
  else if (click12) {
    return(
      <div className='pictureShop'>
       <button onClick={press12}>
        <BackSymbol/>    
     </button>
        <ShopImage12/>
       
      </div>
    )
  }
  else if (click13) {
    return(
      <div className='pictureShop'>
       <button onClick={press13}>
        <BackSymbol/>    
     </button>
        <ShopImage13/>
       
      </div>
    )
  }
  else if (click14) {
    return(
      <div className='pictureShop'>
       <button onClick={press14}>
        <BackSymbol/>    
     </button>
        <ShopImage14/>
       
      </div>
    )
  }
  else if (click15) {
    return(
      <div className='pictureShop'>
       <button onClick={press15}>
        <BackSymbol/>    
     </button>
        <ShopImage15/>
       
      </div>
    )
  }
  else if (click16) {
    return(
      <div className='pictureShop'>
       <button onClick={press16}>
        <BackSymbol/>    
     </button>
        <ShopImage16/>
       
      </div>
    )
  }
  else if (click17) {
    return(
      <div className='pictureShop'>
       <button onClick={press17}>
        <BackSymbol/>    
     </button>
        <ShopImage17/>
       
      </div>
    )
  }
  else if (click18) {
    return(
      <div className='pictureShop'>
       <button onClick={press18}>
        <BackSymbol/>    
     </button>
        <ShopImage18/>
       
      </div>
    )
  }
  else if (click19) {
    return(
      <div className='pictureShop'>
       <button onClick={press19}>
        <BackSymbol/>    
     </button>
        <ShopImage19/>
       
      </div>
    )
  }
  else if (click20) {
    return(
      <div className='pictureShop'>
       <button onClick={press20}>
        <BackSymbol/>    
     </button>
        <ShopImage20/>
       
      </div>
    )
  }
  else if (click21) {
    return(
      <div className='pictureShop'>
       <button onClick={press21}>
        <BackSymbol/>    
     </button>
        <ShopImage21/>
       
      </div>
    )
  }
  else if (click22) {
    return(
      <div className='pictureShop'>
       <button onClick={press22}>
        <BackSymbol/>    
     </button>
        <ShopImage22/>
       
      </div>
    )
  }
  
 
}



const ShopImage0 = () => {
  return (
    <>
    <img className='imgSHI' src={ShopImages[0].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[0].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[0].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[0].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
    </>
    );
}
const ShopImage1 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[1].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[1].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[1].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[1].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
    
  </>
  );
}
const ShopImage2 = () => {
  return (
  <>
   <img className='imgSHI' src={ShopImages[2].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[2].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[2].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[2].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage3 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[3].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[3].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[3].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[3].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage4 = () => {
  return (
  <>
   <img className='imgSHI' src={ShopImages[4].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[4].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[4].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[4].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage5 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[5].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[5].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[5].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[5].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage6 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[6].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[6].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[6].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[6].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage7 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[7].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[7].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[7].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[7].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage8 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[8].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[8].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[8].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[8].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage9 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[9].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[9].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[9].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[9].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage10 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[10].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[10].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[10].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[10].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage11 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[11].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[11].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[11].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[11].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage12 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[12].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[12].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[12].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[12].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage13 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[13].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[13].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[13].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[13].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage14 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[14].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[14].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[14].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[14].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage15 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[15].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[15].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[15].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[15].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage16 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[16].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[16].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[16].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[16].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage17 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[17].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[17].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[17].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[17].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage18 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[18].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[18].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[18].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[18].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage19 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[19].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[19].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[19].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[19].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage20 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[20].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[20].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[20].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[20].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage21 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[21].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[21].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[21].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[21].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage22 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[22].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[22].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[22].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[22].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const BackSymbol = () => {
  return (
    <FontAwesomeIcon icon={faArrowRight} size='2x' style={{color:'white',
    transform:'rotate(180deg)', cursor:'pointer', top:'5%', position:'absolute'
    }} />
  );
}

const ShopImages = [
{price:'/', src:'./FrauB2.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./mannBlitz2.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./KettenFrau2.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./FrauSilber.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./FBJZ.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./Sänger.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./ColleFRau2.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./Statur.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./BlumenFrau21.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./KüssFrau.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./EngMann.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./EngFrau2.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./Brüste.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./AlkoholF2.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./Avatar2.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./Cello2.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./Pferd2.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./Läspisch2.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./Tanzen2.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./Maria2.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./Teufel2.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./MickeyMouse.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./BlumenFrau2.jpeg', format:'60cmx30cm', paintedT:'nothing'},
];

 
