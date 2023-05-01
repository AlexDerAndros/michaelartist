import {useState} from 'react';
import './App.css';

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
    <div style={{color:'white'}}>
   <ul>
    <li> <a href='https://michael-ntrikos.art'>Home</a></li>
   <li><a href='#'>Bildgalerie</a> </li>
   </ul>
    </div>
  </div>
 )}
 </div>
  );
}
function Main() {
 return (
<div className='Mitte'>
 <div className='info1'> 
  Welcome to my website!
</div>

  </div>
 );
}
function Bottom() {
return (
 <div className='unten'>
  

 </div>
);
}