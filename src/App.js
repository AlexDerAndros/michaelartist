import {useState} from 'react';
import { useReducer, useContext , useEffect, useRef, createContext } from 'react';
import './App.css';
import ReactGA, { set } from 'react-ga';
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
import { faGripVertical, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { counter, text } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import { Component } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { getAuth, signOut , GoogleAuthProvider , signInWithPopup,  getAdditionalUserInfo, signInWithRedirect } from "firebase/auth";



  export default function App() {
    return (
     <main>
     <HeaderBo/>
   
      </main>
    );
//    Aktualisierung einer React App: 1.npm run build 2.firebase deploy oder firebase deploy --only hosting:michael--artist
//   3.Quellcodeverwaltung unten dann oben commit 4. Aktualisieren
//   Wichtig: immer alles auf der neusten Version und updaten ab und zu
 }
 
function HeaderBo() {
 
  return (
   <Router>
   <div>
   <div className='header'>
   
      <div className='title' > 
      <Link to= '/'>
        Artist Michael Ntrikos
      </Link>
      </div>
     <Link to="/AboutUs">
      <div className='about'>
        About Us
      </div>
      </Link>  
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
      <div className='foto3'>
        <a href='https://www.youtube.com/@michaelntrikos6696'>
         <FontAwesomeIcon icon={faYoutube} className='icYou'/>
        </a>
      </div>
    </div>
  
    <div className='unten'>
   <div>
   <Link to="/">
     <div className='po'> 
      <FaHome size={40} className='ic'/> <span className='he'> Home</span>
    </div>
    </Link>
   </div>
   <div>
   <Link to= "/Search">
   <div className='po2'>
      <FaSearch size={38} className='ic'/> <span className='he'> Search</span>
    </div>
    </Link>
   </div>
   <Link to="/bildgalerie" className='po3'>
   <div>
      <FaImages size={40} className='ic' /> <span className='he'> Picture gallery</span>
    </div>
  </Link>
  <Link to= "/chat">
    <div className='po1'>
      <FaComment size={35}  className='ic'/> <span className='he'> Chat</span>
    </div>
  </Link>
  <Link to= "/login">
    <div className='po4'>
      <FaSignInAlt size={35}  className='ic'/> <span className='he'> Login and Signup</span>
    </div>
  </Link>
  <Link to='/Videogalerie'>
   <div>
    <FontAwesomeIcon icon={faVideo}  size='2x' className='ic' />
    <span className='he'> Video gallery</span>
   </div>
  </Link>
  <Link to='/PictureShop'>
   <div>
    <FontAwesomeIcon icon={faShoppingCart}  size='2x'  className='ic'/>
    <span className='he'> Picture shop</span>
    </div>
  </Link>
    <Routes>
    <Route path="/" element={<Home/>}/>
   <Route path="/bildgalerie" element={<Bildgalerie/>}/>
   <Route path="/Search" element={<SEARCH/>}/>
   <Route path="/chat" element={<Chat/>}/>
   <Route path="/login" element={<Log/>}/>
   <Route path='/PictureShop' element={<PictureShop/>}/>
   <Route path='/Videogalerie' element={<Videogalerie/>}/>
   <Route path='/AboutUs' element={<AboutUs/>}/>

  </Routes>
 </div>
</div>
</Router> 
  );
}

 
const images =[
'./michaelBackground.png',
'./IMG_1268.JPEG',
'./GroßeBrüsteF.JPEG',
'./IMG_0493.JPEG',
'./Joker.jpeg',
'./BootSonne.jpeg',
'./Lecken.jpeg',
'./Medusa.jpeg',
'./MickeyMouse.jpeg', 
'./FrauSilber.jpeg',
'./FrauMeer.jpeg',
'./TraumfrauBlume.jpeg',
 './Jessia1.jpeg',
 './Motorrad.jpeg','./FrauGarage.jpeg', './mannBlitz2.jpeg', './FrauSchläft.jpeg', './EngelTeufel.jpeg','./Maria2.jpeg', './Teufel2.jpeg', 
 './Wikinger.jpeg', './BlumenFrau2.jpeg', './Eiffelturm.jpeg', './KettenFrau2.jpeg', './KronenFrau.jpeg', './BaumFrau.jpeg', './Läspisch2.jpeg', './Jessia2.jpeg',
'./WasserFrau.jpeg', './LampenFrau.jpeg', './GeEngel.jpeg', './SchiffE2.jpeg', './BuntF.jpeg', './HolzSchiff.jpeg',
'./Eli2.jpeg', './EngFrau2.jpeg', './FrauS.jpeg' , './BetenF.jpeg', './BootFrau.jpeg', './ColleFRau2.jpeg', './Athen.jpeg', './BluSchlafFrau.jpeg'
, './Indianer.jpeg', './Cello2.jpeg', './Avatar2.jpeg', './BRFrau.jpeg', './HaarMerer.jpeg', './SpiegelF.jpeg', './SchlafMF.jpeg',
'./LächelF.jpeg', './SchWeiF.jpeg','./BuntMusterFrau.jpeg', './Tanzen2.jpeg', './Pferd2.jpeg', './CringeF.jpeg', './TanzendeF.jpeg', './AlkoholF2.jpeg',
 './Löwe.jpeg', './BulleF.jpeg', './FrauSch.jpeg', './BuntF2.jpeg', './KriegerGF.jpeg','./FischF.jpeg', './SchmetterlingF.jpeg', './StockF.jpeg',
'./FarbenF.jpeg', './Hochzeit.jpeg', './BootE.jpeg', './HausdGe.jpeg', './Brüste.jpeg', './FBJZ.jpeg', './SchiffAE2.jpeg',
 './Statur.jpeg','./7.jpeg','./GelbeFrau.jpeg', './Ritterin.jpeg', './Boxerin.jpeg'];
function ImageList (){
  const [currentIndex, setCurrentIndex]= useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const[click,setClick] = useState(false);
  
  const BiggerPic= () => {
    setClick(!click);
  }
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
  
  
  return (
   <div className='imageList' style={{
    background:click ? 'none' : 'rgba(0, 0, 0, 0.639)',
    margin: '2% 13%'}}>
    <img  onClick={BiggerPic} className='imgI' src= {images[currentIndex]} 
       style= {{
          transform: click ? 'scale(1.6)' : 'scale(1)',
          zIndex: click ? '100' : '-1',
          
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

function AboutUs() {
  const [english, setEnglish] = useState(true);
  const[german, setGerman] = useState(false);
 
  const pressG = () => {
    setGerman(true);
     setEnglish(false);
  }
  const pressE = () => {
    setEnglish(true);
      setGerman(false);
  }
 
  return(
    <>
    <div className='translation'>
    <div className='ge' onClick={pressG}
    style={{backgroundImage: german ? 'none' : 'linear-gradient(to right, rgb(96, 251, 181), #a31cd8)',  borderTop: german ? 'blue 0.3vh solid' : 'none',
  backgroundClip: 'text',
  color: german ? 'blue' : 'transparent'}}>
      { german ? (
       <span>
        Deutsch
       </span>
      ): english ? (
        <span>
          German
        </span>
      ): (
        <span>
          Error
        </span>
      )}
    </div>
    <div className='en' onClick={pressE}
    style={{backgroundImage: english ? 'none' : 'linear-gradient(to right, rgb(96, 251, 181), #a31cd8)',  borderTop: english ? 'blue 0.3vh solid' : 'none',
  webkitBackgroundClip: 'text',
  color: english ? 'blue' : 'transparent'}}>

    { german ? (
       <span>
        Englisch
       </span>
      ): english ?  (
        <span>
          English
        </span>
      ): (
        <span>
          Error
        </span>
      )}
    </div>
   </div>
    <div className='aboutUs'>
      <div className='headAb'>
      { german ? (
     <span>
      Über uns
     </span>
    ): english ? (
      <span>
        About Us
      </span>
    ): (
      <span>
        Error
      </span>
    )}
      </div>
      <div className='imp'>
       <details>
         <summary>  Impressum  </summary>
          <div> 
          <span className='theAb'> 
           { german ? (
     <span>
    Datenschutzerklärung
     </span>
    ): english ? (
      <span>
      Data protection
      </span>
    ): (
      <span>
        Error
      </span>
    )}</span>
          <br/>
          { german ? (
     <span>
     Die Daten werden dafür verwendet, damit die Nutzer unter einem
      Namen ein Account haben, wodurch sie die Videos schon vor Veröffentlichung 
      sehen auf Instagram und TikTok können, es zugeordnet werden kann welcher 
      Nutzer ein Bild kauft und damit der Chat mit Michael Ntrikos auch wirklich 
     nur unter dem eingelochtem Nutzer und Michael Ntrikos bleiben. 
     </span>
    ): english ? (
      <span>
      The data is used so that the users have an account under one name, so that they can see the videos on Instagram and TikTok before they are
         published, it can be assigned
        which user buys a picture and so that the chat
        with Michael Ntrikos really only remains under the 
         user and Michael Ntrikos. 
      </span>
    ): (
      <span>
        Error
      </span>
    )}
           <br/>
           <br/>
        <span className='theAb'>
        { german ? (
     <span>
     Widerrufsrecht 
     </span>
    ): english ? (
      <span>
      Right of withdrawal
      </span>
    ): (
      <span>
        Error
      </span>
    )} </span>
    { german ? (
     <span>
     <br/>
     Bürgerliches Gesetzbuch kurz BGB  § 312g Widerrufsrecht
<br/>
Das Widerrufsrecht besteht, soweit die Parteien nichts anderes vereinbart haben, nicht bei folgenden Verträgen:
<br/>
1.
Verträge zur Lieferung von Waren, die nicht vorgefertigt sind und für 
deren Herstellung eine individuelle Auswahl oder Bestimmung durch den 
Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse
 des Verbrauchers zugeschnitten sind <br/>
2.
Verträge zur Lieferung von Waren, die schnell verderben können oder deren
 Verfallsdatum schnell überschritten würde
 <br/>
3.
Verträge zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes
 oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung 
 nach der Lieferung entfernt wurde
<br/>
11.
Verträge, bei denen der Verbraucher den Unternehmer ausdrücklich aufgefordert hat, 
ihn aufzusuchen, um dringende Reparatur- oder Instandhaltungsarbeiten vorzunehmen; 
dies gilt nicht hinsichtlich weiterer bei dem Besuch erbrachter Dienstleistungen, 
die der Verbraucher nicht ausdrücklich verlangt hat,
 oder hinsichtlich solcher bei dem Besuch gelieferter Waren,
  die bei der Instandhaltung oder Reparatur nicht unbedingt als
   Ersatzteile benötigt werden
   <br/>
     </span>
    ): english ? (
      <span>
      <br/>
        
        German Civil Code (BGB) § 312g Right of revocation

          Unless the parties have agreed otherwise, the right of revocation does not apply to the following contracts:
          <br/>
          1. contracts for the supply of goods that are not prefabricated and 
          for the production of which an individual choice or determination 
         by the consumer is 
        decisive or which are clearly tailored to the personal 
         needs of the consumer.
          <br/>
         2. contracts for the supply of goods that are likely
          to deteriorate quickly or whose expiration date 
          would be quickly exceeded.
          <br/>
         3. contracts for the supply of sealed goods 
          that are not suitable for return for reasons 
         of health protection or hygiene if their seal has been
         removed after delivery.
         <br/>
            4. contracts where the consumer has expressly requested the trader 
             to visit him in order to carry out urgent repair
             or maintenance work; this does not apply to other 
             services provided during the visit that the consumer has not
            expressly requested, or to those goods delivered during the
             visit that are not necessarily required as spare parts
             for maintenance or repair.
      </span>
    ): (
      <span>
        Error
      </span>
    )} 
    
        
          </div>
        </details>
        <br/>
        <details>
          <summary>
          { german ? (
     <span>
      Verkauf der Bilder
     </span>
    ): english ? (
      <span>
        Selling the pictures 
      </span>
    ): (
      <span>
        Error
      </span>
    )}
          </summary>
          <div>
          { german ? (
     <span>
          Sobald der Nutzer ein Bild ausgewählt und es bezahlt hat, 
          wird er nähere Informationen darüber erhalten und anschließend wird
           es ihm zugesendet. Ab dem Zeitpunkt, wo es angekommen ist, 
           ohne Beschädigungen vom Versandt, haften wir nicht mehr für
            die Beschädigung am Bild. Der Nutzer wird das Bild in einem
             Zeitraum von 3-5 Werktagen erhalten.
     </span>
    ): english ? (
      <span>
      Once the user has selected an image and paid for it, they will receive further information about it
       and it will then be sent to them.
      Once it has arrived without any damage from shipping, we are no longer liable for any damage to the image.
      The user will receive the image in a period of 3-5 working days.
      </span>
    ): (
      <span>
        Error
      </span>
    )}
        

     
          </div>
        </details>
        <br/>
        <details>
          <summary>
          { german ? (
     <span>
     Kontaktinformationen
     </span>
    ): english ? (
      <span>
    Contact informations
      </span>
    ): (
      <span>
        Error
      </span>
    )}
          </summary>
          <div>
          { german ? (
     <span>
     Die Nutzer der Website können uns über E-Mail beispielsweise kontaktieren unter 
          michaelntrikosartist@gmail.com  oder auch über bald kommende Chat-Funktion 
          auf der Website, wo man uns direkt kontaktieren kann.
          
     </span>
    ): english ? (
      <span>
      Users of the website can contact us via email,
           for example at michaelntrikosartist@gmail.com,
            or via the upcoming chat function on the website, 
          where you can contact us directly.
      </span>
    ): (
      <span>
        Error
      </span>
    )}
    </div>
        </details>
        <br/>
        <br/>
        { german ? (
     <span>
     Die Website wurde von Alexandros Ntrikos erstellt.
     Sie können mich auf <span className='ig'> Instagram  <img src='./instagram.jpeg' className='igimg2'/> </span>
    <br/> oder auf <a href='https://www.tiktok.com/@alexandros20092'> <span className='tt'>TikTok <img src='./tiktok.jpeg' className='ttimg2'/></span></a>
     kontaktieren.
     </span>
    ): english ? (
      <span>
    The website was created by Alexandros Ntrikos.
    You can contact me on  <a href='https://www.instagram.com/alexandros_ntrikos/'><span className='ig'> Instagram  <img src='./instagram.jpeg' className='igimg2'/></span></a>
    <br/> or on <a href='https://www.tiktok.com/@alexandros20092'> <span className='tt'>TikTok <img src='./tiktok.jpeg' className='ttimg2'/></span></a>.

      </span>
    ): (
      <span>
        Error
      </span>
    )}
      </div>
      
       
    </div>
   </> 
  );
}
function Home() {
  ReactGA.initialize('YOUR_TRACKING_ID');
  ReactGA.pageview(window.location.pathname);
  const[click,setClick] = useState(false);
  let adminUS = "AdminMichaelNtrikos";
  let adminPA = "U27sapyycbzf";
   const[german,setGerman] = useState(false);
  const[english,setEnglish] = useState(true);
  const[pa,setPa] = useState('');
  const[us,setUs] = useState('');
 

 return (
  <>
<div className='Mitte'>
 <div className='info1'> 
  Welcome to my website
</div>
<div className='info'>
      "If you feel it, you can paint it.
        When you paint, you feel it."  By Michael Ntrikos 
</div>
<ImageList/>
<br/>
  </div>
  <div style={{display:"none"}}>
  <LoginInputName german={german} english={english} click={click} pa={pa} setPa={setPa} us={us} setUs={setUs}/>
  </div>
  </>
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
const Save = ({task, setIsEditing,text,  onChange}) => {
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
           {images.map((item)=>(
            <>
             <img src={item} className='imgG'/>
             <InfoB/>
            </>
           ))}
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
        <FaHeart className='ani' size={50} style={{ color: like }} />
      </button>
      <div className='likeNumber'>
        {likeNumber}
      </div>
    </div>
  );
}



//Search



const SEARCH = () => {
  const PHome = () => {
    return (
    <div>
    <FontAwesomeIcon  onClick={pressHome} icon={faArrowRight} size='2x' className='backIconS' />
     <Home/>
    </div>
  );
  }
  const PPictureGallery = () => {
    return (
   <div>
    <FontAwesomeIcon  onClick={pressPicturegallery} icon={faArrowRight} size='2x' className='backIconS' />
     <Bildgalerie/>
    </div>
  );
  }
  const PChat = () => {
    return (
    <div>
    <FontAwesomeIcon  onClick={pressChat} icon={faArrowRight} size='2x' className='backIconS'/>
     <Chat/>
    </div>
  );
  };
  const PLogin = () => {
    return (
    <div>
    <FontAwesomeIcon  onClick={pressLogin} icon={faArrowRight} size='2x' className='backIconS'/>
     <Log/>
    </div>
    );
  };
  const PVideoGallery = () => {
    return (
      <div>
    <FontAwesomeIcon  onClick={pressVideogallery} icon={faArrowRight} size='2x' className='backIconS'/>
     <Videogalerie/>
    </div>
    );
  };
  const PAboutUs = () => {
    return (
      <div>
    <FontAwesomeIcon  onClick={pressAboutUs} icon={faArrowRight} size='2x' className='backIconS'/>
     <AboutUs/>
    </div>
    );
  };
  const PPictureShop = () => {
    return (
      <div>
    <FontAwesomeIcon  onClick={pressPictureShop} icon={faArrowRight} size='2x' className='backIconS'/>
     <PictureShop/>
    </div>
    );
  };
  const [home,setHome]= useState(false);
  const [pictureGallery,setPictureGallery] = useState(false);
  const [chat, setChat] = useState(false);
  const[login,setLogin] = useState(false);
  const[videogallery,setVideogallery] = useState(false);
  const[pictureShop,setPictureShop] = useState(false);
  const[aboutUs, setAboutUs] = useState(false);
  const pressHome = () => {
    setHome(!home);
  }
  
  const pressPicturegallery = () => {
    setPictureGallery(!pictureGallery);
  }
  const pressChat = () => {
    setChat(!chat);
  }
  const pressLogin = () => {
    setLogin(!login);
  }
  const pressVideogallery = () => {
    setVideogallery(!videogallery);
  }
  const pressPictureShop = () => {
    setPictureShop(!pictureShop);
  }
  const pressAboutUs = () => {
    setAboutUs(!aboutUs);
  }
  const [searchItems, setSearchItems] = useState([
    { id: 1, term: 'Home', className: 'searchItem', icon:  <FaHome size={25} style={{color:"rgb(96, 251, 181)", margin:"-1% 0%"}}/>, press: pressHome},
    { id: 2, term: 'Picture gallery', className: 'searchItem', icon: <FaImages size={25} style={{color:"rgb(96, 251, 181)", margin:"-1% 0%"}}/>, press: pressPicturegallery},
    { id: 3, term: 'Chat', className: 'searchItem', icon: <FaComment size={25} style={{color:"rgb(96, 251, 181)", margin:"-1% 0%"}}/>, press: pressChat},
    { id: 4, term: 'Login', className: 'searchItem', icon: <FaSignInAlt size={25} style={{color:"rgb(96, 251, 181)", margin:"-1% 0%"}}/>, press: pressLogin},
    { id: 5, term: 'Video gallery', className: 'searchItem', icon:<FontAwesomeIcon icon={faVideo} size={25} style={{color:"rgb(96, 251, 181)", margin:"-1% 0%"}}/>, press: pressVideogallery},
    { id: 6, term: 'Picture shop', className: 'searchItem', icon: <FontAwesomeIcon icon={faShoppingCart} size={25} style={{color:"rgb(96, 251, 181)", margin:"-1% 0%"}}/> , press: pressPictureShop},
    { id: 7, term: 'About Us', className: 'searchItem', icon:  <FontAwesomeIcon icon={faInfoCircle}  style={{color:"rgb(96, 251, 181)", margin:"-1% 0%"}} />, press:pressAboutUs},
    
  ]);

  const [filteredSearchItems, setFilteredSearchItems] = useState([...searchItems]);
  const handleFilter = (filterTerm) => {
    const filteredItems = searchItems.filter(item =>
      item.term.toLowerCase().includes(filterTerm.toLowerCase())
    );
    setFilteredSearchItems(filteredItems);
  };
 
  return (
    <div>
      { home ? (
        <PHome/>
      ) :  pictureGallery ?(
        <div>
        <PPictureGallery/>
      </div>
      ): chat ? (
        <PChat/>
      ): login ? (
        <PLogin/>
      ): aboutUs ? (
        <PAboutUs/>
      ): videogallery ? (
         <PVideoGallery/>
      ) : pictureShop ? (
        <PPictureShop/>
      ):(
        <div className='search'>
          
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => handleFilter(e.target.value)}
            className='input'
          />
          <ul>
            {filteredSearchItems.map((item) => (
              <li key={item.id} className={item.className}  onClick={item.press}>
                {item.icon}
                {item.term}
              </li>
            ))}
          </ul>
        </div>
      )}
        
    </div>
  );
};




//Login und Sigup
function Log() {
  const provider = new GoogleAuthProvider();
const auth = getAuth();
auth.languageCode = 'it';
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    setLoggedIn(true);
     getAdditionalUserInfo(result)
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    setLoggedIn(false);
  });
  const [loggedIN,setLoggedIn] = useState(false);
  signInWithRedirect(auth, provider);

 return (
   <>
    {
  loggedIN ? (<LoggedIN/>): (<Login/>)
    }
   </>
 );
}
function LoginInputName( german,english, click, pa, us ,setPa, setUs) {
  if (!click) 
  {
    let username = 'Username...';
    let password = 'Password...';
    if (german == true) 
    {
       username = 'Benutzername...';
       password = 'Passwort...';
    }
    else 
    {
      username = 'Username...';
      password = 'Password...';
    }
    return (
     <> 
      <form>
      <input id='us'
       type="text" 
       placeholder={username}
       value={us}
       onChange={(e)=> { setUs(e.target.value);}}/>
      <br/>
      <input id='pa'
       type="password"
        placeholder={password} 
        value={pa}
        onChange={(e)=>{setPa(e.target.value);}} />
      <br/>
      <br/>
      <br/>
      <button className='logBtn' type='submit' >
      <p className="AniB" style={{fontSize:'2.5vh'}}>
      { german ? (
         <span>
          Anmelden
         </span>
        ): english ?  (
          <span>
            Login
          </span>
        ): (
          <span>
            Error
          </span>
        )}
      </p>
      </button>
      </form>
     </> 
    );

}
}
function LoggedIN() {
   
}
function Login() {
  const[us,setUs]= useState('');
  const[pa,setPa]= useState('');
  const [click,setClick]= useState(false);
  
  const press = () => {
    setClick(!click);
  }
  const [english, setEnglish] = useState(true);
  const[german, setGerman] = useState(false);
  
  const pressG = () => {
    setGerman(true);
     setEnglish(false);
  }
  const pressE = () => {
    setEnglish(true);
      setGerman(false);
  }
  if (!click) 
  {
    
   
      
      
    return(
      <>
       
    
      <div className='login'>
      <div className='head'>
      { german ? (
         <span>
          Anmeldung
         </span>
        ): english ?  (
          <span>
            Login
          </span>
        ): (
          <span>
            Error
          </span>
        )}

    </div>
   
  <LoginInputName german={german} english={english} click={click} pa={pa} setPa={setPa} us={us} setUs={setUs}/>

     
      <br/>
      <br/>
      <br/>
      <br/>
       <div className='importantI'>
       { german ? (
         <span>
          Wenn du noch nicht eingeloggt bist
         </span>
        ): english ?  (
          <span>
          If your are not yet logged in
          </span>
        ): (
          <span>
            Error
          </span>
        )}
      
       <span className='sg' onClick={press}> 
       { german ? (
         <span>
          <br/>, regestriere dich bitte!
         </span>
        ): english ?  (
          <span> 
          <br/> please register!
          </span>
        ): (
          <span>
            Error
          </span>
        )} </span>
         </div>
         </div>
      </>
    );
   


   }
else { 
  let creusername = 'Create an username...';
  let crepassword = 'Create a password...';
  let reppas = 'Repeat your password...';
  let email = 'Enter an email adress...';
  if (german == true) 
  {
     creusername = 'Erstelle Sie ein Benutzername...';
     crepassword = 'Erstellen Sie ein Passwort...';
     reppas = 'Wiederholen Sie ihr Passwort...';
     email = 'Geben Sie eine E-Mail Adresse an...';
  }
  else {
    creusername = 'Create an username...';
    crepassword = 'Create a password...';
    reppas = 'Repeat your password...';
    email = 'Enter an email adress...';
    
  }
  
  
    return(
      <div> 
       
       
      <div className='login'>
  
      <button onClick={press}>
       <FontAwesomeIcon icon={faArrowRight} size='2x' style={{color:'white',
       transform:'rotate(-180deg)', position:'absolute', cursor:'pointer'
       }} />
       </button>
      
      <div className='signUP'>
       <div className='headR'>
       { german ? (
           <span>
            Regestrierung
           </span>
          ): english ?  (
            <span>
              Register
            </span>
          ): (
            <span>
              Error
            </span>
          )}
       </div>
       <br/>
      <div className='REG'>
       <input style={{fontSize:'120%'}} id='email' className='child'  type='email' placeholder={email} />
       <input id='us1'  className='child' type="text" placeholder={creusername} />
        <input id='pa1'  className='child' type="password" placeholder={crepassword}  />
        <input id='pa1'   className='child' type="password" placeholder={reppas}  />
       </div>
       <br/>
       <br/>
        <button style={{fontSize:'1.5vh'}}>
        
        <p className="AniB" style={{fontSize: '2.5vh'}}>
        { german ? (
           <span>
            Regestrieren
           </span>
          ): english ?  (
            <span>
              Register
            </span>
          ): (
            <span>
              Error
            </span>
          )}
        </p>
        </button>
      </div>
      </div>
      </div>
    );
   
  
    


  
}
}


const videos = ['./C30BCC52-6700-4FCF-9B90-167169F37065.mp4',
'./copy_AA8F9BA2-F28C-4E56-BC28-D177B0ACE41D.MP4'
, "./8ba2ba26c765447dbaeb8a156f1dd5a0.MP4"
,'./export_1702824220526.MP4', './export_1701962505711.MP4'
, './copy_1C945C47-402D-4F34-A314-C0AEC8006700.MP4','./copy_27D8C9B2-34C6-4518-8784-29510BAA2C93.MP4',
'./copy_85E11D5B-17E8-4CA2-AFB7-9369D46BFEC0.mp4',
'./copy_44300C70-C36A-42C4-995D-114F26DFEC54.mp4',
  './C4EF135C-1DD4-469C-81D3-448FBB715860.mp4','./A0F18F97-7A34-4312-9BFD-0B3B363503A1.mp4',
  './64E90D9B-1865-4A24-9EB7-9C398D11FC50.mp4','./31C18F11-3C66-4BC9-9B48-C02A3127BD89.mp4',
  './3494B8E0-9DBB-4BCF-9D3B-120BC9676661.mp4','./FFFEDECD-A80B-4AF7-B3AC-9E3CDBFB2E69.mp4',
 './85210F06-83A1-4F7C-85C7-0C2475B1FE93.mp4','./B4B3E89B-E02F-4735-97EC-D467C10D7874.mp4',
'./4F2D5055-EED0-498C-BDCD-FD2F4DC7D910.mp4', 
'./copy_B0D61099-C60A-4D60-9B07-08C4248CD82B.mp4','./B385F5F1-CA88-490F-9CA3-61E6C5B166EC.mp4',
'./A02876CC-9293-48F9-9B32-127EDD12F151.mp4','./export_1683919611553.MP4',
'./41999F3E-67B9-4AD4-BCF4-90C304F84E04.mp4', "./D9EFDC13-AA25-4747-AA3C-587C5C6461A9.mp4",
'./C62DBA36-81A8-4664-8E29-9FCF91248950.mp4', './2E7ED2C4-EB5C-469A-9AEA-07824BD0194C.mp4',
'./521B77C0-DD4C-417E-A842-B9DF6DF343D0.mp4','./3DE96816-A4FF-466B-94BB-2BE1F8604E5B.mp4',
'./8C8364AC-72DD-46D1-9254-1DBD2668A3AA.mp4','./E5DAE013-1890-41CA-9DFF-556A276B05CD.MP4',
'./5AF6D7E0-C02F-43DB-9744-A8D818A1E451.MP4', './5AF6D7E0-C02F-43DB-9744-A8D818A1E451.MP4',
'./4D0DE805-75F3-45C0-9EE5-EAE40E846C8E.MP4','./export_1664214779019.MP4',
'./4D7DC781-E5F2-40DF-91D5-0F3E6D565275.MP4','./7D4ED2BD-1040-4417-B945-A722F0785752.MP4',
'./10D5946A-3EA9-4332-872E-03C075986C9C.MP4', './C37D618A-F14A-486D-AB9D-6B1B3679208A.MP4',
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
      <FontAwesomeIcon icon={faArrowRight} size='1x' style={{color:'white', position:'absolute',transform:'rotate(-180deg)', margin: '0% 10%'}} />
    </button>
    <button className='btn1' onClick={nextImage}>
    <FontAwesomeIcon icon={faArrowRight} style={{color:  'white', position:'absolute', margin:'0% -10%'  }}/>
  </button>
    </div>
    </div>
  );
}

//Picture shop

const PictureShop = () => {
 
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
  const[click24,setClick24] = useState(false);
  const press24 = () => {
    setClick24(!click24);
  }
  const[click25,setClick25] = useState(false);
  const press25 = () => {
    setClick25(!click25);
  }
  const[click26,setClick26] = useState(false);
  const press26 = () => {
    setClick26(!click26);
  }
  const[click27,setClick27] = useState(false);
  const press27 = () => {
    setClick27(!click27);
  }
  const[click28,setClick28] = useState(false);
  const press28 = () => {
    setClick28(!click28);
  }
  const[click29,setClick29] = useState(false);
  const press29 = () => {
    setClick29(!click29);
  }
  const[click30,setClick30] = useState(false);
  const press30 = () => {
    setClick30(!click30);
  }
  const[click31,setClick31] = useState(false);
  const press31 = () => {
    setClick31(!click31);
  }
  const[click32,setClick32] = useState(false);
  const press32 = () => {
    setClick32(!click32);
  }
  const[click33,setClick33] = useState(false);
  const press33 = () => {
    setClick33(!click33);
  }
  const[click34,setClick34] = useState(false);
  const press34 = () => {
    setClick34(!click34);
  }
  const[click35,setClick35] = useState(false);
  const press35 = () => {
    setClick35(!click35);
  }
  const [english, setEnglish] = useState(true);
  const[german, setGerman] = useState(false);
  const pressG = () => {
    setGerman(true);
     setEnglish(false);
  }
  const pressE = () => {
    setEnglish(true);
      setGerman(false);
  }
 
  const [format, setFormat] = useState(false);
  const[fil,setFil] = useState(false);

  const [priceFilters, setPriceFilters] = useState(Array(10).fill(false));
  const toggleFilter = (index) => {
    const newFilters = [...priceFilters];
    newFilters[index] = !newFilters[index];
    setPriceFilters(newFilters);
  };

  const clearFilters = () => {
    setPriceFilters(Array(10).fill(false)); 
  };
  
  
 
  const [ShopImages,setShopImages] = useState([
    {id:1, price:700, src:'./FrauB2.jpeg', format:'50cmx70cm',paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press0, classPreis: "pri", classGR: "shopGRR", classEle:"elePic", click:click0, img:"imgSh"},
    {id:2, price:1200,  src:'./mannBlitz2.jpeg', format:'70cmx100cm', paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press:press1, classPreis: "pri",classGR:"shopGRR", classEle:"elePic", click:click1, img:"imgSh"},
    {id:3, price:800, src:'./KettenFrau2.jpeg', format:'50cmx70cm', paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press2, classPreis: "pri", classGR: "shopGRR", classEle:"elePic",click: click2, img:"imgSh"},
  {id:4, price:700, src:'./FrauSilber.jpeg', format:'50cmx70cm', paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press3, classPreis: "pri", classGR: "shopGRR", classEle:"elePic", click: click3, img:"imgSh1"},
  {id:5 ,price:350, src:'./FBJZ.jpeg', format:'40cmx50cm', paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press4, classPreis: "pri", classGR: "shopGRR", classEle:"elePic", click: click4, img:"imgSh"},
  {id:6, price:english ? "VB" : german ? "unbezahlbar": "Error", src:'./Sänger.jpeg', format:'60cmx30cm', paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press5, classPreis: "pri", classGR: "shopGRR", classEle:"elePic", click: click5, img:"imgSh"},
  {id:7, price:900, src:'./ColleFRau2.jpeg', format:'50cmx70cm', paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press6, classPreis: "pri", classGR: "shopGR2", classEle:"elePic", click: click6, img:"imgSh"},
  {price:650, src:'./EngFrau.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press7, classPreis: "pri", classGR: "shopGR2", classEle:"elePic", click: click7, img:"imgSh"},
  {price:450, src:'./BlumenFrau21.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press8, classPreis: "pri", classGR: "shopGR2", classEle:"elePic" , click: click8, img:"imgSh"},
  {price:450, src:'./KüssFrau.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press9, classPreis: "pri", classGR: "shopGR3", classEle:"elePic", click: click9, img:"imgSh"},
  {price:650, src:'./EngMann.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press10, classPreis: "pri", classGR: "shopGR3", classEle:"elePic", click: click10, img:"imgSh"},
  {price:350, src:'./EngFrau2.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press11, classPreis: "pri", classGR: "shopGR3", classEle:"elePic", click: click11, img:"imgSh"},
  {price:150, src:'./Brüste.jpeg', format:'25cmx30cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press12, classPreis: "pri", classGR: "shopGR4", classEle:"elePic", click: click12, img:"imgSh"},
  {price:900, src:'./AlkoholF2.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press13, classPreis: "pri", classGR: "shopGR4", classEle:"elePic", click: click13, img:"imgSh"},
  {price:750, src:'./Avatar2.jpeg', format:'40cmx60cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press14, classPreis: "pri", classGR: "shopGR4", classEle:"elePic", click: click14, img:"imgSh"},
  {price:700, src:'./Cello2.jpeg', format:'50cmx60cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press15, classPreis: "pri", classGR: "shopGR5", classEle:"elePic",click: click15, img:"imgSh"},
  {price:650, src:'./Pferd2.jpeg', format:'40cmx50cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press16, classPreis: "pri", classGR: "shopGR5", classEle:"elePic",click: click16, img:"imgSh"},
  {price:450, src:'./Läspisch2.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press17, classPreis: "pri", classGR: "shopGR5", classEle:"elePic", click: click17, img:"imgSh"},
  {price:350, src:'./Tanzen2.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press18, classPreis: "pri", classGR: "shopGR6", classEle:"elePic", click: click18, img:"imgSh"},
  {price:700, src:'./Maria2.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press19, classPreis: "pri", classGR: "shopGR6", classEle:"elePic", click: click19, img:"imgSh"},
  {price:850, src:'./Teufel2.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error",press20, classPreis: "pri", classGR: "shopGR6", classEle:"elePic", click: click20, img:"imgSh"},
  {price:650, src:'./MickeyMouse.jpeg', format:'50cmx70cm', paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press21, classPreis: "pri", classGR: "shopGR7", classEle:"elePic", img:"imgSh"},
  {price:950, src:'./Athen.jpeg', format:'120cmx60cm', paintedT:english ? 'acryl colors and it is sealed.': german ? "mit Acryfarben und es ist versigelt": "Error", press: press22, classPreis: "pri", classGR: "shopGR7", classEle:"elePic", click: click21, img:"imgSh"},
  {price:500, src:'./Indianer.jpeg', format:'40cmx60cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press23, classPreis: "pri", classGR: "shopGR7", classEle:"elePic", click: click22, img:"imgSh"},
  {price:150, src:'./GelbeFrau.jpeg', format:'25cmx30cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press24, classPreis: "pri", classGR: "shopGR8", classEle:"elePic", click23, img:"imgSh"},
  {price:400, src:'./BootSonne.jpeg', format:'25cmx30cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press25, classPreis: "pri", classGR: "shopGR8", classEle:"elePic", click: click24, img:"imgSh"},
  {price:300, src:'./Lecken.jpeg', format:'30cmx40cm',  paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press26, classPreis: "pri", classGR: "shopGR8", classEle:"elePic",click: click25, img:"imgSh"},
  {price:700, src:'./FrauMeer.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press27, classPreis: "pri", classGR: "shopGR9", classEle:"elePic", click:click26, img:"imgSh"},
  {price:800, src:'./Eiffelturm.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press28, classPreis: "pri", classGR: "shopGR9", classEle:"elePic", click:click27, img:"imgSh"},
  {price:600, src:'./EngelTeufel.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press29, classPreis: "pri", classGR: "shopGR9", classEle:"elePic", click: click28, img:"imgSh"},
  {price:650, src:'./BulleF.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press30, classPreis: "pri", classGR: "shopGR10", classEle:"elePic", click: click29, img:"imgSh"},
  {price:400, src:'./BluSchlafFrau.jpeg', format:'40cmx60cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press31, classPreis: "pri", classGR: "shopGR10", classEle:"elePic", click: click30, img:"imgSh"},
  {price:750, src:'./Löwe.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press32, classPreis: "pri", classGR: "shopGR10", classEle:"elePic", click: click31, img:"imgSh"},
  {price:650, src:'./FrauSchläft.jpeg', format:'60cmx30cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press33, classPreis: "pri", classGR: "shopGR10", classEle:"elePic", click: click33, img:"imgSh"},
  {price:450, src:'./FrauS.jpeg', format:'60cmx30cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press34, classPreis: "pri", classGR: "shopGR10", classEle:"elePic", click: click34, img:"imgSh"},
  {price:600, src:'./FrauSch.jpeg', format:'60cmx30cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press35, classPreis: "pri", classGR: "shopGR10", classEle:"elePic", click: click35, img:"imgSh"},
  
  
  ]);
  const[valuePrices,setValuePrices] = useState(null);
  let value = valuePrices + "€";
  const [filteredSearchItems, setFilteredSearchItems] = useState([...ShopImages]);
  const handleFilter = (filterTerm) => {
    const filteredItems = ShopImages.filter(item =>
      (item.term && item.term.toLowerCase().includes(filterTerm.toLowerCase())) ||
      (item.price && item.price.toString().includes(filterTerm))
    );
    setFilteredSearchItems(filteredItems);
  };
  if (!click0 && !click1 && !click2 && !click3 && !click4 && !click5 && 
    !click6 && !click7 && !click8 && !click9 && !click10 && !click11 &&
     !click12 && !click13 && !click14 && !click15 && !click16 
     && !click17&& !click18&& !click19 && !click20 && !click21 && !click22 && !click23 &&
       !click24 && !click25 && !click26 && 
    !click27 && !click28 && !click29 && !click30 && !click31 && !click32
    && !click33 && !click34 && !click35) 
    {
   return (
   <>
  
    <div className='pictureShop'>
    <div className='head'>Picture shop</div>

<div className='format' onClick={() => { setFormat(!format); }}>
  FORMAT:{format ? (
    <span>
      {german ? (
        <span><br/>untereinander</span>
      ) : english ? (
        <span>one below the other</span>
      ) : (
        <span>Error</span>
      )}
    </span>
  ) : (
    <FontAwesomeIcon icon={faGripVertical} />
  )}
</div>
  {format ? (
   <>
      {/* <div className='fil' onClick={()=> setFil(!fil)}> */}
           {/* <div className='filter'>
             FILTER
          </div>
        
           <div > 
             <div className='PicHam' ></div> 
             <div className='PicHam1' ></div> 
             <div className='PicHam2' ></div> 
          </div> 
          </div>  */}
          {/* { fil && (
           <div className='resHam'>
             <div onClick={() =>  setFil(!fil) } className='aw'>
               X
             </div> */}
             <ul className='filterEle'>
             <li className='filterOn'>
              <span className='infoFil'> 
              { german ? (
             <span>
             Gewünschter Preis:
             </span>
            ): english ?  (
              <span>
                Desired Price:
              </span>
            ): (
              <span>
                Error
              </span>
            )} 
              </span> 
              <input 
               type='number' 
               className='inPri' 
               placeholder='Write a price'
               value={valuePrices}
               onChange={(e)=> handleFilter(e.target.value)}/> 
               <span className='euroinfo'>€</span>
               {/* <datalist id='Prices'>
                 <option value="2007"></option>
               </datalist> */}
             </li>
             </ul>
          {filteredSearchItems.map((item) => (
     <div className='gridCon'>
       <div key={item.id} className="shopGRR">
         <div className={item.classEle} onClick={item.press}>
           <img src={item.src} className={item.img}/>
           <div className={item.classPreis}>
           { german ? (
        <span>
         Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )} {item.price} €
           </div>
         </div>
       </div>
       </div>        
     ))}
   
   </>
  ): (
    <>
     <div className='shopGR'>
      <div className='elePic' onClick={press0}>
       <img className='imgSh' src={ShopImages[0].src} />
       <div className='pri'>
       { german ? (
        <span>
        Preis:
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[0].price}€
       </div>
      </div>
      <div className='elePic' onClick={press1}>
       <img className='imgSh' src={ShopImages[1].src}/>
       <div className='pri'>
       { german ? (
        <span>
          Preis:
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[1].price}€
       </div>
      </div>
      <div className='elePic' onClick={press2}>
       <img className='imgSh' src={ShopImages[2].src}/>
       <div className='pri'>
       { german ? (
        <span>
         Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[2].price}€
       </div>
      </div>
      </div> 
      <div className='shopGR1'> 
       <div className='elePic' onClick={press3}>
        <img className='imgSh' src={ShopImages[3].src} />
         <div className='pri'>
         { german ? (
        <span>
          Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[3].price}€
        </div>
       </div> 
      <div className='elePic' onClick={press4}>
       <img className='imgSh' src={ShopImages[4].src}/>
       <div className='pri'>
       { german ? (
        <span>
         Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )}{ShopImages[4].price}€
       </div>
      </div> 
      <div className='elePic' onClick={press5}>
       <img className='imgSh' src={ShopImages[5].src}/>
       <div className='pri'>
       { german ? (
        <span>
         Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[5].price}
       </div>
      </div>
 
      </div> 
      <div className='shopGR2'>
        <div className='elePic' onClick={press6}>
         <img className='imgSh' src={ShopImages[6].src}/>
           <div className='pri'>
           { german ? (
        <span>
         Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[6].price}€
           </div>
        </div>
      <div className='elePic' onClick={press7}>
         <img className='imgSh' src={ShopImages[7].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[7].price}€
        </div>
       </div>
      <div className='elePic' onClick={press8}>
        <img className='imgSh' src={ShopImages[8].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[8].price}€
        </div>
       </div>
       </div> 
      <div className='shopGR3'>
      <div className='elePic' onClick={press9}>
        <img className='imgSh' src={ShopImages[9].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[9].price}€
        </div>
       </div>
       <div className='elePic' onClick={press10}>
        <img className='imgSh' src={ShopImages[10].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[10].price}€
        </div>
       </div>
       <div className='elePic' onClick={press11}>
        <img className='imgSh' src={ShopImages[11].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[11].price}€
        </div>
       </div>
       </div>
       <div className="shopGR4">
      <div className='elePic' onClick={press12}>
        <img className='imgSh' src={ShopImages[12].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[12].price}€
        </div>
       </div>
       <div className='elePic' onClick={press13}>
        <img className='imgSh' src={ShopImages[13].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[13].price}€
        </div>
       </div>
       <div className='elePic' onClick={press14}>
        <img className='imgSh' src={ShopImages[14].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[14].price}€
        </div>
       </div>
      </div>
     
     <div className='shopGR5'>
     <div className='elePic' onClick={press15}>
        <img className='imgSh' src={ShopImages[15].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[15].price}€
        </div>
       </div>
       <div className='elePic' onClick={press16}>
        <img className='imgSh' src={ShopImages[16].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[16].price}€
        </div>
       </div>
       <div className='elePic' onClick={press17}>
        <img className='imgSh' src={ShopImages[17].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis:
        </span>
       ): english ?  (
         <span>
           Price:
         </span>
       ): (
         <span>
           Error
         </span>
       )} {ShopImages[17].price}€
        </div>
       </div>
     </div>
     <div className='shopGR6'>
     <div className='elePic' onClick={press18}>
        <img className='imgSh' src={ShopImages[18].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[18].price}€
        </div>
       </div>
       <div className='elePic' onClick={press19}>
        <img className='imgSh' src={ShopImages[19].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[19].price}€
        </div>
       </div>
       <div className='elePic' onClick={press20}>
        <img className='imgSh' src={ShopImages[20].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
          Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[20].price}€
        </div>
       </div>
 
   </div>
 
   <div className='shopGR7'>
     <div className='elePic' onClick={press21}>
        <img className='imgSh' src={ShopImages[21].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[21].price}€
        </div>
       </div>
       <div className='elePic' onClick={press22}>
        <img className='imgSh' src={ShopImages[22].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[22].price}€
        </div>
       </div>
       <div className='elePic' onClick={press23}>
        <img className='imgSh' src={ShopImages[23].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[23].price}€
        </div>
       </div>
   </div>
   <div className='shopGR8'>
   <div className='elePic' onClick={press24}>
        <img className='imgSh' src={ShopImages[24].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[24].price}€
        </div>
       </div>
       <div className='elePic' onClick={press25}>
        <img className='imgSh' src={ShopImages[25].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[25].price}€
        </div>
       </div>
       <div className='elePic' onClick={press26}>
        <img className='imgSh' src={ShopImages[26].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[26].price}€
        </div>
       </div>
   </div>
   <div className='shopGR9'>
   <div className='elePic' onClick={press27}>
        <img className='imgSh' src={ShopImages[27].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}:{ShopImages[27].price}€
        </div>
       </div>
       <div className='elePic' onClick={press28}>
        <img className='imgSh' src={ShopImages[28].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}:  {ShopImages[28].price}€
        </div>
       </div>
       <div className='elePic' onClick={press29}>
        <img className='imgSh' src={ShopImages[29].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[29].price}€
        </div>
       </div>
   </div>
   <div className='shopGR10'>
   <div className='elePic' onClick={press30}>
        <img className='imgSh' src={ShopImages[30].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[30].price}€
        </div>
       </div>
       <div className='elePic' onClick={press31}>
        <img className='imgSh' src={ShopImages[31].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[31].price}€
        </div>
       </div>
       <div className='elePic' onClick={press32}>
        <img className='imgSh' src={ShopImages[32].src}/>
        <div className='pri'>
        { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[32].price}€
        </div>
       </div>
   </div>
   <div className='shopGR11'>
    <div className='elePic' onClick={press33}>
         <img className='imgSh' src={ShopImages[33].src}/>
         <div className='pri'>
         { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[33].price}€
         </div>
        </div>
        <div className='elePic' onClick={press34}>
         <img className='imgSh' src={ShopImages[34].src}/>
         <div className='pri'>
         { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[34].price}€
         </div>
        </div>
        <div className='elePic' onClick={press35}>
         <img className='imgSh' src={ShopImages[35].src}/>
         <div className='pri'>
         { german ? (
        <span>
         Preis
        </span>
       ): english ?  (
         <span>
           Price
         </span>
       ): (
         <span>
           Error
         </span>
       )}: {ShopImages[35].price}€
         </div>
        </div>
        </div>

    </>
  )}

    </div>
  </>
   );
 }
 else if (click0) {
  const ShopImage0 = () => {
    return (
    <>
   
      <img className='imgSHI' src={ShopImages[0].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis:
       </span>
      ): english ?  (
        <span>
          Price:
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[0].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[0].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[0].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
      
    </>
    );
  };
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
  const ShopImage1 = () => {
    return (
    <>
   
      <img className='imgSHI' src={ShopImages[1].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis:
       </span>
      ): english ?  (
        <span>
          Price:
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[1].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[1].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[1].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
      
    </>
    );
  };
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
  const ShopImage2 = () => {
    return (
    <>
  
    
  
     <img className='imgSHI' src={ShopImages[2].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ? (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[2].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[2].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ? (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[2].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ? (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage3 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[3].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ? (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[3].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[3].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ? (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[3].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ? (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage4 = () => {
    return (
    <>
     <img className='imgSHI' src={ShopImages[4].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ? (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[4].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[4].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ? (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[4].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ? (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage5 = () => {
    return (
   <>
      <img className='imgSHI' src={ShopImages[5].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ? (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[5].price} 
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[5].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ? (
        <span>
       Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[5].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
         Kaufen
       </span>
      ): english ? (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage6 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[6].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ? (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[6].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[6].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ? (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[6].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span> Kaufen
       </span>
      ): english ? (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage7 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[7].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[7].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[7].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[7].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage8 = () => {
    return (
    <>
     
      <img className='imgSHI' src={ShopImages[8].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
         Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[8].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[8].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[8].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage9 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[9].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[9].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[9].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[9].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage10 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[10].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
        Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[10].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[10].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[10].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage11 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[11].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[11].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[11].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[11].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage12 = () => {
    return (
    <>
    
      <img className='imgSHI' src={ShopImages[12].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[12].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[12].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[12].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage13 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[13].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[13].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[13].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[13].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage14 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[14].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[14].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[14].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[14].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage15 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[15].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[15].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[15].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[15].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage16 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[16].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[16].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[16].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[16].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage17 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[17].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[17].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[17].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
         Gemalt mit 
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[17].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  
const ShopImage18 = () => {
return (
<>
  <img className='imgSHI' src={ShopImages[18].src}/>
  <br/>
  <br/>
  <div className='pri2'>
  { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[18].price} €
  </div>
  <br/>
  <div className='pri2'>
    Format:  {ShopImages[18].format}
  </div>
  <br/>
  <div className='pri2'>
  { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[18].paintedT}
  </div>
  <br/>
  <button className='btnShop'>
  { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
  </button>
</>
);
};

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
  const ShopImage19 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[19].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[19].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[19].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[19].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
  
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
  const ShopImage20 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[20].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[20].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[20].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[20].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  const ShopImage21 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[21].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[21].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[21].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[21].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
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
  
const ShopImage22 = () => {
return (
<>
  <img className='imgSHI' src={ShopImages[22].src}/>
  <br/>
  <br/>
  <div className='pri2'>
  { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[22].price} €
  </div>
  <br/>
  <div className='pri2'>
    Format:  {ShopImages[22].format}
  </div>
  <br/>
  <div className='pri2'>
  { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[22].paintedT}
  </div>
  <br/>
  <button className='btnShop'>
  { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
  </button>
</>
);
};
  return(
    <div className='pictureShop'>
     <button onClick={press22}>
      <BackSymbol/>    
   </button>
      <ShopImage22/>
     
    </div>
  )
}
else if (click23) {
  const ShopImage23 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[23].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[23].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[23].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[23].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
         Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
  return(
    <div className='pictureShop'>
     <button onClick={press23}>
      <BackSymbol/>    
   </button>
      <ShopImage23/>
     
    </div>
  )
}
else if (click24) {
  const ShopImage24 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[24].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[24].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[24].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[24].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
        Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
 
  
  return(
    <div className='pictureShop'>
     <button onClick={press24}>
      <BackSymbol/>    
   </button>
      <ShopImage24/>
     
    </div>
  )
}
else if (click25) {
  const ShopImage25 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[25].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[25].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[25].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[25].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
  return(
    <div className='pictureShop'>
     <button onClick={press25}>
      <BackSymbol/>    
   </button>
      <ShopImage25/>
     
    </div>
  )
}
else if (click27) {
  const ShopImage27 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[27].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[27].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[27].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[27].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
  return(
    <div className='pictureShop'>
     <button onClick={press27}>
      <BackSymbol/>    
   </button>
      <ShopImage27/>
     
    </div>
  )
}
else if (click26) {
  const ShopImage26 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[26].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[26].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[26].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[26].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
  return(
    <div className='pictureShop'>
     <button onClick={press26}>
      <BackSymbol/>    
   </button>
      <ShopImage26/>
     
    </div>
  )
}
else if (click29) {
  const ShopImage29 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[29].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[29].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[29].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[29].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
  return(
    <div className='pictureShop'>
     <button onClick={press29}>
      <BackSymbol/>    
   </button>
      <ShopImage29/>
     
    </div>
  )
}
else if (click28) {
  const ShopImage28 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[28].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[28].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[28].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[28].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
  return(
    <div className='pictureShop'>
     <button onClick={press28}>
      <BackSymbol/>    
   </button>
      <ShopImage28/>
     
    </div>
  )
}
else if (click30) {
  const ShopImage30 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[30].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[30].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[30].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[30].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
  return(
    <div className='pictureShop'>
     <button onClick={press30}>
      <BackSymbol/>    
   </button>
      <ShopImage30/>
     
    </div>
  )
}
else if (click31) {
  const ShopImage31 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[31].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[31].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[31].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[31].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
         Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
  return(
    <div className='pictureShop'>
     <button onClick={press31}>
      <BackSymbol/>    
   </button>
      <ShopImage31/>
     
    </div>
  )
}
else if (click32) {
  const ShopImage32 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[32].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis
       </span>
      ): english ?  (
        <span>
          Price
        </span>
      ): (
        <span>
          Error
        </span>
      )}: {ShopImages[32].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[32].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[32].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
    </>
    );
  };
  return(
    <div className='pictureShop'>
     <button onClick={press32}>
      <BackSymbol/>    
   </button>
      <ShopImage32/>
     
    </div>
  )
}
else if (click33) {
  const ShopImage33 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[33].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis:
       </span>
      ): english ?  (
        <span>
          Price:
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[33].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[33].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[33].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
      
    </>
    );
  };
  return(
    <div className='pictureShop'>
     <button onClick={press33}>
   <BackSymbol/>
   </button>
      <ShopImage33/>
     
    </div>
  )
}
else if (click34) {
  const ShopImage34 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[34].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis:
       </span>
      ): english ?  (
        <span>
          Price:
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[34].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[34].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[34].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
      
    </>
    );
  };
  return(
    <div className='pictureShop'>
     <button onClick={press34}>
   <BackSymbol/>
   </button>
      <ShopImage34/>
     
    </div>
  )
}
else if (click35) {
  const ShopImage35 = () => {
    return (
    <>
      <img className='imgSHI' src={ShopImages[35].src}/>
      <br/>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Preis:
       </span>
      ): english ?  (
        <span>
          Price:
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[35].price} €
      </div>
      <br/>
      <div className='pri2'>
        Format:  {ShopImages[35].format}
      </div>
      <br/>
      <div className='pri2'>
      { german ? (
       <span>
        Gemalt mit
       </span>
      ): english ?  (
        <span>
          Painted with
        </span>
      ): (
        <span>
          Error
        </span>
      )} {ShopImages[35].paintedT}
      </div>
      <br/>
      <button className='btnShop'>
      { german ? (
       <span>
        Kaufen
       </span>
      ): english ?  (
        <span>
          Buy
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </button>
      
    </>
    );
  };
  return(
    <div className='pictureShop'>
     <button onClick={press35}>
   <BackSymbol/>
   </button>
      <ShopImage35/>
     
    </div>
  )
}
};
  const BackSymbol = () => {
  return (
    <FontAwesomeIcon icon={faArrowRight} size='2x' style={{color:'white', transform:'rotate(180deg)', cursor:'pointer', top:'5%', position:'absolute'}} />
  );
}

