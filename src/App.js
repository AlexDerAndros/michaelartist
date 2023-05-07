import {useState} from 'react';
import './App.css';
import { FaImages } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

export default function App() {
  return (
    <main>
    <Header/>
    <Main/>
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
      <a href='https://michael-ntrikos.art'>
      Artist Michael Ntrikos
      </a>
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
   <ul className='textCo'>
    <li> <a href='https://michael-ntrikos.art'>Home</a></li>
   <li><a href='#'>Bildgalerie</a> </li>
   </ul>
    
 </div>
 )}
 </div>
 
  );
}
const images =['./michaelBackground.png', './TraumfrauBlume.jpeg', './FrauGarage.jpeg', './mannBlitz.jpeg'
, './FrauSchläft.jpeg', './EngelTeufel.jpeg','./Maria.jpeg', './Teufel.jpeg', './Wikinger.jpeg', './BlumenFrau2.jpeg', 
'./Eiffelturm.jpeg', './KettenFrau.jpeg', './GefässelteFrau.jpeg', './KronenFrau.jpeg', './BaumFrau.jpeg'];
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
function Main() {
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
 <div className='unten'>
   <div>
    <a href='https://michael-ntrikos.art'>
    <div style={{ color: 'black'}}>
      <FaHome size={40} />
    </div>
    
    </a>
   </div>
   <div>
   <div style={{ color: 'black'  }}>
      <FaSearch size={38} />
    </div>
   </div>
   <div style={{ color: 'black'}}>
      <FaImages size={40} />
    </div>
    <div style={{ color: 'black'}}>
      <FaComment size={35} />
    </div>
 </div>
);
}