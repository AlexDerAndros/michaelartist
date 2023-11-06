import {useState} from 'react';
import { useReducer, useContext , useEffect, useRef, createContext } from 'react';

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
     <HeaderBo/>
   
      </main>
    );
//    Aktualisierung einer React App: 1.npm run build 2.firebase deploy oder firebase deploy --only hosting:michael--artist
//   3.Quellcodeverwaltung unten dann oben commit 4. Aktualisieren
//   Wichtig: immer alles auf der neusten Version und updaten ab und zu
 }
 
function HeaderBo() {
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
  return (
   <Router>
   <div>
   <div className='header'>
   
      <div className='title' > 
      <Link to= '/'>
      { german ? (
       <span>
        Künstler Michael Ntrikos
       </span>
      ): english ? (
        <span>
        Artist Michael Ntrikos
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </Link>
      </div>
     <Link to="/AboutUs">
      <div className='about'>
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
    </div>
    <div className='translation'>
    <div className='ge1' onClick={pressG}
    style={{color: german ? 'blue' : 'white', borderTop: german ? 'blue 0.3vh solid' : 'none'}}>
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
    <div className='en1' onClick={pressE}
     style={{color: english ? 'blue' : 'white', borderTop: english ? 'blue 0.3vh solid' : 'none'}}>
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
   <Route path='/AboutUs' element={<AboutUs/>}/>

  </Routes>
 </div>
</div>
</Router> 
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
function Translation() {
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
  return (
   <div className='translation'>
    <div className='ge' onClick={pressG}
    style={{color: german ? 'blue' : 'white',  borderTop: german ? 'blue 0.3vh solid' : 'none', zIndex:'-1'}}>
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
     style={{color: english ? 'blue' : 'white', borderTop: english ? 'blue 0.3vh solid' : 'none', zIndex:'-1'}}>
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
  );
}
const images =['./michaelBackground.png','./Joker.jpeg','./BootSonne.jpeg','./Lecken.jpeg','./Medusa.jpeg','./MickeyMouse.jpeg', './FrauSilber.jpeg','./FrauMeer.jpeg','./TraumfrauBlume.jpeg',
 './Jessia1.jpeg','./Motorrad.jpeg','./FrauGarage.jpeg', './mannBlitz2.jpeg', './FrauSchläft.jpeg', './EngelTeufel.jpeg','./Maria2.jpeg', './Teufel2.jpeg', 
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
          transform: click ? 'scale(1.65)' : 'scale(1)',
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
    style={{color: german ? 'blue' : 'white',  borderTop: german ? 'blue 0.3vh solid' : 'none'}}>
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
     style={{color: english ? 'blue' : 'white', borderTop: english ? 'blue 0.3vh solid' : 'none'}}>
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

 return (
  <>
  <div className='translation'>
  <div className='ge' onClick={pressG}
  style={{color: german ? 'blue' : 'white',  borderTop: german ? 'blue 0.3vh solid' : 'none', zIndex:'100'}}>
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
   style={{color: english ? 'blue' : 'white', borderTop: english ? 'blue 0.3vh solid' : 'none', zIndex:'100'}}>
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
<div className='Mitte'>
 <div className='info1'> 
 { german ? (
     <span>
      Willkommen auf meiner Website!
     </span>
    ): english ?  (
      <span>
        Welcome to my Website!
      </span>
    ): (
      <span>
        Error
      </span>
    )}
</div>
<div className='info'>
{ german ? (
     <span>
     ,,Wenn du es fühlst, kannst du es malen.
       Wenn du malst, fühlst du es." Von Michael Ntrikos
     </span>
    ): english ?  (
      <span>
      "If you feel it, you can paint it.
        When you paint, you feel it."  By Michael Ntrikos 
      </span>
    ): (
      <span>
        Error
      </span>
    )}


</div>
<ImageList/>
<br/>
  </div>
  </>
 );
}
// function Bottom() {
// return (
// <Router>

//  <div className='unten'>
//    <div>
//    <Link to="/">
//     <div style={{ color: 'white'}} className='po'>
//       <FaHome size={40} />
//     </div>
//     </Link>
//    </div>
//    <div>
//    <Link to= "/Search">
//    <div style={{ color: 'white'  }} className='po2'>
//       <FaSearch size={38} />
//     </div>
//     </Link>
//    </div>
//    <Link to="/bildgalerie" className='po3'>
//    <div style={{ color: 'white'}}>
//       <FaImages size={40} />
//     </div>
//   </Link>
//   <Link to= "/chat">
//     <div style={{ color: 'white'}} className='po1'>
//       <FaComment size={35} />
//     </div>
//   </Link>
//   <Link to= "/login">
//     <div style={{ color: 'white'}} className='po4'>
//       <FaSignInAlt size={35} />
//     </div>
//   </Link>
//   <Link to='/Videogalerie'>
//    <div className='shPi'>
//     <FontAwesomeIcon icon={faVideo} style={{color:'white'}} size='2x' />
//    </div>
//   </Link>
//   <Link to='/PictureShop'>
//    <div className='shPi'>
//     <FontAwesomeIcon icon={faShoppingCart} style={{color:'white'}} size='2x' />
//     </div>
//   </Link>
//     <Routes>
//     <Route path="/" element={<Home/>}/>
//    <Route path="/bildgalerie" element={<Bildgalerie/>}/>
//    <Route path="/Search" element={<SEARCH/>}/>
//    <Route path="/chat" element={<Chat/>}/>
//    <Route path="/login" element={<Login/>}/>
//    <Route path='/PictureShop' element={<PictureShop/>}/>
//    <Route path='/Videogalerie' element={<Videogalerie/>}/>
//   </Routes>
//  </div>
//  </Router>
// );
// }


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
            <img src={images[61]} className='imgG'/>
            <InfoB/>
            <img src={images[62]} className='imgG'/>
            <InfoB/>
            <img src={images[63]} className='imgG'/>
            <InfoB/>
            <img src={images[64]} className='imgG'/>
            <InfoB/>
            <img src={images[65]} className='imgG'/>
            <InfoB/>
            <img src={images[66]} className='imgG'/>
            <InfoB/>
            <img src={images[67]} className='imgG'/>
            <InfoB/>
            <img src={images[68]} className='imgG'/>
            <InfoB/>
            <img src={images[69]} className='imgG'/>
            <InfoB/>
            <img src={images[70]} className='imgG'/>
            <InfoB/>
            <img src={images[71]} className='imgG'/>
            <InfoB/>
            <img src={images[72]} className='imgG'/>
            <InfoB/>
            <img src={images[72]} className='imgG'/>
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
  const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    const [click, setClick] = useState(false);
    const link = () => {
      setClick(!click);
    }
      // if (click) {
        return ( 
          <div className='search'>
          <SearchBar 
            filterText={filterText} 
            inStockOnly={inStockOnly} 
            onFilterTextChange={setFilterText} 
            onInStockOnlyChange={setInStockOnly} />
          <ProductTable 
            products={PRODUCTS} 
            filterText={filterText}
            inStockOnly={inStockOnly} 
              link={link}
            />
        </div>
        );
       }
      // else {
       
      //   return (
      //     <>
      //     PRODUCTS.component
      //     </>
      //    );
      // }
    
 

function ProductRow({ product, link }) {
 
  
   
  const name = product.name;
  const component = product.component;

  return (
<div>



    <tr>
      <td style={{color:'white'}} onClick={link}>{name}</td>
    </tr>
  
   </div> 

  );
 }

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
   
    rows.push(
      <ProductRow
        product={product}
        key={product.name} 
        
        />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th style={{color:'white'}}>
            Themes on the website
          </th>
        </tr>
      </thead>
      {rows}
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} className='input' />
    </form>
  );
}
//<label>
 //<input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />{' '}Only show products in stock</label>
const PRODUCTS = [
  {category: "Main", name: "Home", component:'<Home/>'},
  {category: "Main", name: "Picture gallery", component:'<Bildgalerie/>'},
  {category: "Main",  name: "Chat", component:'<Chat/>' },
  {category:'Main', name: 'Login', component:'<Login/>'},
  {category:'Main', name: 'Signup', component:'<Signup/>', link:' '},
  {category:'Main', name:'Video gallery', component:'<Videogalerie/>', link: '/Videogalerie'},
  {category:'Main', name:'Picture shop', component:'<PictureShop/>', link:'/PictureShop'},
  {category:'Main', name:'About Us', component:'<AboutUs/>', link:'/AboutUs'},  
];


//Login und Sigup

function Login() {
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
      <div className='translation'>
      <div className='ge' onClick={pressG}
      style={{color: german ? 'blue' : 'white',  borderBottom: german ? 'blue 0.3vh solid' : 'none'}}>
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
       style={{color: english ? 'blue' : 'white', borderBottom: english ? 'blue 0.3vh solid' : 'none'}}>
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
    <form>
      <input id='us' type="text" placeholder={username}/>
      <br/>
      <input id='pa' type="password" placeholder={password}  />
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
    <> 
       <div className='translation'>
      <div className='ge' onClick={pressG}
      style={{color: german ? 'blue' : 'white',  borderBottom: german ? 'blue 0.3vh solid' : 'none'}}>
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
       style={{color: english ? 'blue' : 'white', borderBottom: english ? 'blue 0.3vh solid' : 'none'}}>
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
    </>
  );
}
}

const videos = ['./C30BCC52-6700-4FCF-9B90-167169F37065.mp4','./copy_27D8C9B2-34C6-4518-8784-29510BAA2C93.MP4',
'./copy_85E11D5B-17E8-4CA2-AFB7-9369D46BFEC0.mp4',
'./copy_44300C70-C36A-42C4-995D-114F26DFEC54.mp4',
  './C4EF135C-1DD4-469C-81D3-448FBB715860.mp4','./A0F18F97-7A34-4312-9BFD-0B3B363503A1.mp4',
  './64E90D9B-1865-4A24-9EB7-9C398D11FC50.mp4','./31C18F11-3C66-4BC9-9B48-C02A3127BD89.mp4',
  './3494B8E0-9DBB-4BCF-9D3B-120BC9676661.mp4','./FFFEDECD-A80B-4AF7-B3AC-9E3CDBFB2E69.mp4',
 './85210F06-83A1-4F7C-85C7-0C2475B1FE93.mp4','./B4B3E89B-E02F-4735-97EC-D467C10D7874.mp4',
'./4F2D5055-EED0-498C-BDCD-FD2F4DC7D910.mp4', 
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
  if (!click0 && !click1 && !click2 && !click3 && !click4 && !click5 && 
    !click6 && !click7 && !click8 && !click9 && !click10 && !click11 &&
     !click12 && !click13 && !click14 && !click15 && !click16 
     && !click17&& !click18&& !click19 && !click20 && !click21 && !click22 && !click23 &&
       !click24 && !click25 && !click26 && 
    !click27 && !click28 && !click29 && !click30 && !click31 && !click32) 
    {
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
      <div style={{fontFamily: '"Poppins", sans-serif'}}>
        Price: {ShopImages[4].price}€
      </div>
     </div> 
     <div className='elePic' onClick={press5}>
      <img className='imgSh' src={ShopImages[5].src}/>
      <div className='pri'>
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
      <div className='elePic' onClick={press22}>
       <img className='imgSh' src={ShopImages[22].src}/>
       <div className='pri'>
        Price: {ShopImages[22].price}€
       </div>
      </div>
      <div className='elePic' onClick={press23}>
       <img className='imgSh' src={ShopImages[23].src}/>
       <div className='pri'>
        Price: {ShopImages[23].price}€
       </div>
      </div>
  </div>
  <div className='shopGR8'>
  <div className='elePic' onClick={press24}>
       <img className='imgSh' src={ShopImages[24].src}/>
       <div className='pri'>
        Price: {ShopImages[24].price}€
       </div>
      </div>
      <div className='elePic' onClick={press25}>
       <img className='imgSh' src={ShopImages[25].src}/>
       <div className='pri'>
        Price: {ShopImages[25].price}€
       </div>
      </div>
      <div className='elePic' onClick={press26}>
       <img className='imgSh' src={ShopImages[26].src}/>
       <div className='pri'>
        Price: {ShopImages[26].price}€
       </div>
      </div>
  </div>
  <div className='shopGR9'>
  <div className='elePic' onClick={press27}>
       <img className='imgSh' src={ShopImages[27].src}/>
       <div className='pri'>
        Price: {ShopImages[27].price}€
       </div>
      </div>
      <div className='elePic' onClick={press28}>
       <img className='imgSh' src={ShopImages[28].src}/>
       <div className='pri'>
        Price: {ShopImages[28].price}€
       </div>
      </div>
      <div className='elePic' onClick={press29}>
       <img className='imgSh' src={ShopImages[29].src}/>
       <div className='pri'>
        Price: {ShopImages[29].price}€
       </div>
      </div>
  </div>
  <div className='shopGR10'>
  <div className='elePic' onClick={press30}>
       <img className='imgSh' src={ShopImages[30].src}/>
       <div className='pri'>
        Price: {ShopImages[30].price}€
       </div>
      </div>
      <div className='elePic' onClick={press31}>
       <img className='imgSh' src={ShopImages[31].src}/>
       <div className='pri'>
        Price: {ShopImages[31].price}€
       </div>
      </div>
      <div className='elePic' onClick={press32}>
       <img className='imgSh' src={ShopImages[32].src}/>
       <div className='pri'>
        Price: {ShopImages[32].price}€
       </div>
      </div>
  </div>
  {/* <div className='shopGR11'>
  <div className='elePic' onClick={press21}>
       <img className='imgSh' src={ShopImages[21].src}/>
       <div className='pri'>
        Price: {ShopImages[21].price}€
       </div>
      </div>
      <div className='elePic' onClick={press22}>
       <img className='imgShA1' src={ShopImages[22].src}/>
       <div className='pri'>
        Price: {ShopImages[22].price}€
       </div>
      </div>
      <div className='elePic' onClick={press23}>
       <img className='imgShA1' src={ShopImages[23].src}/>
       <div className='pri'>
        Price: {ShopImages[23].price}€
       </div>
      </div>
  </div>
       */}
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
  else if (click23) {
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
    return(
      <div className='pictureShop'>
       <button onClick={press32}>
        <BackSymbol/>    
     </button>
        <ShopImage32/>
       
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
const ShopImage23 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[23].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[23].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[23].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[23].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage24 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[24].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[24].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[24].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[24].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage25 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[25].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[25].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[25].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[25].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage26 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[26].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[26].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[26].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[26].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage27 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[27].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[27].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[27].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[27].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage28 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[28].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[28].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[28].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[28].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage29 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[29].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[29].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[29].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[29].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage30 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[30].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[30].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[30].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[30].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage31 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[31].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[31].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[31].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[31].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
      Buy
    </button>
  </>
  );
}
const ShopImage32 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[32].src}/>
    <br/>
    <br/>
    <div className='pri2'>
     Price: {ShopImages[32].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[32].format}
    </div>
    <br/>
    <div className='pri2'>
      Painted with {ShopImages[32].paintedT}
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
{price:'/', src:'./7.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./GelbeFrau.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./Ritterin.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./Lecken.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./FrauMeer.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./Eiffelturm.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./EngelTeufel.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./BulleF.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./BluSchlafFrau.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./Löwe.jpeg', format:'60cmx30cm', paintedT:'nothing'},
{price:'/', src:'./FrauSchläft.jpeg', format:'60cmx30cm', paintedT:'nothing'},

];

 
