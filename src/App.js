import {useState} from 'react';
import './App.css';
import { FaImages } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Link } from 'react-router-dom';

export default function App() {
  const showHome = true;
   
  return (
    <main>
    <Header/>
    <Bottom/>
    </main>
  );
  // Aktualisierung einer React App: 1.npm run build 2.firebase deploy
  // 3.Quellcodeverwaltung unten dann oben commit 4. Aktualisieren
  // Wichtig: immer alles auf der neusten Version und updaten ab und zu
}
function Header() {
  return (
   <div className='header'>
     <Hamburger/>
      <div className='title' >
      Artist Michael Ntrikos
      </div>
      <div className='foto1'>
        <a href='https://www.tiktok.com/@meineartmichael?_t=8bx04ojY9ME&_r=1'>
          <img className='img1' src='./tiktok.jpeg'/>
        </a>
      </div>
      <div className='foto2'>
        <a href='https://www.instagram.com/michael.ntr/?igshid=YmMyMTA2M2Y%3D'>
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
'./Eli.jpeg', './EngFrau.jpeg', './FrauS.jpeg' , './BetenF.jpeg'];
function ImageList (){
  const [currentIndex, setCurrentIndex]= useState(0);
  const nextImage = () => {
    setCurrentIndex((prevIndex)=>
    prevIndex === images.length - 1 ? 0 :prevIndex + 1);
  }
  return (
   <div className='imageList'>
    <img className='imgI' src= {images[currentIndex]}/>
    <button className='btn1' onClick={nextImage}> Next Picture </button>
   </div>
  );
}
function Home() {
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
    <div style={{ color: 'black'}}>
      <FaHome size={40} />
    </div>
    </Link>
   </div>
   <div>
   <Link to= "/Search">
   <div style={{ color: 'black'  }}>
      <FaSearch size={38} />
    </div>
    </Link>
   </div>
   <Link to="/bildgalerie" >
   <div style={{ color: 'black'}}>
      <FaImages size={40} />
    </div>
  </Link>
  <Link to= "/chat">
    <div style={{ color: 'black'}}>
      <FaComment size={35} />
    </div>
  </Link>
    <Routes>
    <Route path="/" element={<Home/>}/>
   <Route path="/bildgalerie" element={<Bildgalerie/>}/>
   <Route path="/Search" element={<Search/>}/>
   <Route path="/chat" element={<Chat/>}/>
  </Routes>
 </div>
 </Router>
);
}


//Chat
function Chat() {
  return (
      <div className='chat'>
          
      </div>
  )
}


//Bildgalerie
function Bildgalerie() {
  return (
      <div className='bildgalerie'>
          
      </div>
  )
}


//Search
function Search(){
  return (
      <div className='search'>
          
      </div>
  )
}
//hamburger menu in react?

