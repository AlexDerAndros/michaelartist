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
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore';
import {collection} from '@firebase/firestore';



//Login https://firebase.google.com/docs/auth/web/start?hl=de

const firebaseConfig = {
  apiKey: "AIzaSyDq_9NtGYng1Ra5PtKk_ifQoys6ZH-goMc",
  authDomain: "michael--artist.firebaseapp.com",
  databaseURL: "https://michael--artist-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "michael--artist",
  storageBucket: "michael--artist.appspot.com",
  messagingSenderId: "690442290094",
  appId: "1:690442290094:web:62e0a17e181182ce23fe3f",
  measurementId: "G-GGJ7KLTS88"
};
const app = initializeApp(firebaseConfig);



export default function App() {
  return (
    <main>
    <Header/>
    <Bottom/>
    </main>
  );
  // Aktualisierung einer React App: 1.npm run build 2.firebase deploy oder firebase deploy --only hosting:michael--artist
  // 3.Quellcodeverwaltung unten dann oben commit 4. Aktualisieren
  // Wichtig: immer alles auf der neusten Version und updaten ab und zu
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
const images =['./michaelBackground.png', './TraumfrauBlume.jpeg', './FrauGarage.jpeg', './mannBlitz.jpeg'
, './FrauSchläft.jpeg', './EngelTeufel.jpeg','./Maria.jpeg', './Teufel.jpeg', './Wikinger.jpeg', './BlumenFrau2.jpeg', 
'./Eiffelturm.jpeg', './KettenFrau.jpeg', './GefässelteFrau.jpeg', './KronenFrau.jpeg', './BaumFrau.jpeg', './Läspisch.jpeg',
'./WasserFrau.jpeg', './LampenFrau.jpeg', './GeEngel.jpeg', './SchiffE.jpeg', './BuntF.jpeg', './HolzSchiff.jpeg',
'./Eli.jpeg', './EngFrau.jpeg', './FrauS.jpeg' , './BetenF.jpeg', './BootFrau.jpeg', './ColleFRau.jpeg', './Athen.jpeg', './BluSchlafFrau.jpeg'
, './Indianer.jpeg', './Cello.jpeg', './Avatar.jpeg', './BRFrau.jpeg', './HaarMerer.jpeg', './SpiegelF.jpeg', './SchlafMF.jpeg',
'./LächelF.jpeg', './SchWeiF.jpeg', './Tanzen.jpeg', './Pferd.jpeg', './CringeF.jpeg', './TanzendeF.jpeg', './AlkoholF.jpeg',
 './Löwe.jpeg', './BulleF.jpeg', './FrauSch.jpeg', './BuntF2.jpeg', './KriegerGF.jpeg','./FischF.jpeg', './SchmetterlingF.jpeg', './StockF.jpeg',
'./FarbenF.jpeg', './Hochzeit.jpeg', './BootE.jpeg', './HausdGe.jpeg'];
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
   <div className='imageList'>
    <img className='imgI' src= {images[currentIndex]} onClick={BiggerPic}
       style={{
          cursor: 'pointer',
          transform: click ? 'scale(1.7)' : 'scale(1)',
          transition: ' 0.3s ease-in-out',
          width: '70%',
         height: '85%',
         borderRadius: '4%',
        margin: click ? '-3% 10% 1% 16%' : '4% 10% 1% 16%',
        position: 'sticky',
          zIndex: click ? '100' : '-100',
          maxWidth:'300px'
        }}
    />
    <div className='imgBtn'> 
    <button  onClick={prevImage} className='btn1'> 
      <FontAwesomeIcon icon={faArrowRight} size='1x' style={{color:'white', position:'fixed',transform:'rotate(-180deg)', margin: '0% 2.5%'}} />
    </button>
  <button className='btn1' onClick={nextImage}>
    <FontAwesomeIcon icon={faArrowRight} style={{color:  'white', position:'fixed', margin:'0% -5%'  }}/>
  </button>
    </div>
   </div>
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
 Thanks to you I became the artist I am today 
 and to reach the next level
I made this website for you.
</div>
<ImageList/>

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
  const [likeNumber, setLikeNumber] = useState(1002);

  const handleClick = () => {
    let newCount;
    if (like === 'red') {
      setLike('white');
      newCount = likeNumber - 1;
      setLikeNumber(newCount);
      
    } else {
      setLike('red');
      newCount = likeNumber + 1;
      setLikeNumber(newCount);
      
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
      <button className='logBtn'  >
      <p className="AniB" onClick={()=> {
        if (addUsername == addUsername && addPassword == addPassword){
          alert("Register successful");
        }
        else {
          alert("Register failed");
        }
      }}>
        Register
      </p>
      </button>
    </div>
  );

}
const Log = () => {
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswortChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    if (username === 'admin') {
      alert("Login successful");
    }
    else {
      alert("Login failed");
    } 
  }
 return (
  
    <div>
    <div className='head'>
      Login
    </div>
      <input id='us' type="text" placeholder="Username..." value={username} onChange={handleUsernameChange} />
      <br/>
      <input id='pa' type="password" placeholder="Password..." value={password} onChange={handlePasswortChange} />
      <br/>
      <br/>
      <br/>
      <button className='logBtn' onClick={handleLogin} >
      <p className="AniB" >
        Login
      </p>
      </button>
     
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
 './85210F06-83A1-4F7C-85C7-0C2475B1FE93.mp4'
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
  if (!click0 && !click1&& !click2&& !click3&& !click4 && !click5) {
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
      <img className='imgSh' src={ShopImages[0].src}/>
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
      <div className='elePic1' onClick={press3}>
       <img className='imgShA1' src={ShopImages[3].src} />
        <div className='pri'>
         Price: {ShopImages[3].price}€
       </div>
      </div> 
     <div className='elePic1' onClick={press4}>
      <img className='imgShA2' src={ShopImages[4].src}/>
      <div style={{fontFamily: 'Arial, Helvetica, sans-serif',
  margin:' 0% -25%'}}>
        Price: {ShopImages[4].price}€
      </div>
     </div> 
     <div className='elePic1' onClick={press5}>
      <img className='imgShA3' src={ShopImages[5].src}/>
      <div className='pri3'>
        Price: {ShopImages[5].price}€
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
     <FontAwesomeIcon icon={faArrowRight} size='2x' style={{color:'white',
     transform:'rotate(-180deg)', cursor:'pointer', margin:'-86% 0%', position:'absolute'
     }} />
     </button>
        <ShopImage0/>
       
      </div>
    )
  }
  else if (click1) {
    return(
      <div className='pictureShop'>
       <button onClick={press1}>
     <FontAwesomeIcon icon={faArrowRight} size='2x' style={{color:'white',
     transform:'rotate(-180deg)', cursor:'pointer', margin:'-86% 0%', position:'absolute'
     }} />
     </button>
        <ShopImage1/>
       
      </div>
    )
  }
  else if (click2) {
    return(
      <div className='pictureShop'>
       <button onClick={press2}>
     <FontAwesomeIcon icon={faArrowRight} size='2x' style={{color:'white',
     transform:'rotate(-180deg)', cursor:'pointer', margin:'-86% 0%', position:'absolute'
     }} />
     </button>
        <ShopImage2/>
       
      </div>
    )
  }
  else if (click3) {
    return(
      <div className='pictureShop'>
       <button onClick={press3}>
     <FontAwesomeIcon icon={faArrowRight} size='2x' style={{color:'white',
     transform:'rotate(-180deg)', cursor:'pointer', margin:'-86% 0%', position:'absolute'
     }} />
     </button>
        <ShopImage3/>
       
      </div>
    )
  }
  else if (click4) {
    return(
      <div className='pictureShop'>
       <button onClick={press4}>
     <FontAwesomeIcon icon={faArrowRight} size='2x' style={{color:'white',
     transform:'rotate(-180deg)', cursor:'pointer', margin:'-86% 0%', position:'absolute'
     }} />
     </button>
        <ShopImage4/>
       
      </div>
    )
  }
  else if (click5) {
    return(
      <div className='pictureShop'>
       <button onClick={press5}>
     <FontAwesomeIcon icon={faArrowRight} size='2x' style={{color:'white',
     transform:'rotate(-180deg)', cursor:'pointer', margin:'-86% 0%', position:'absolute'
     }} />
     </button>
        <ShopImage5/>
       
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

const ShopImages = [
{price:100, src:'./Avatar.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:150, src:'./BuntF.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:200, src:'./BaumFrau.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:250, src:'./FrauSchläft.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:300, src:'./CringeF.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:350, src:'./BuntF2.jpeg', format:'60cmx30cm', paintedT:'nothing'},


];


//About Us 
const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <div className='headAU'>
        About Us
      </div>
    </div>
  );
}