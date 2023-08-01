import {useState} from 'react';
import './App.css';
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


export default function App() {
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
, './Indianer.jpeg', './Cello.jpeg', './Avatar.jpeg'];
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
    <div style={{ color: 'black'}} className='po'>
      <FaHome size={40} />
    </div>
    </Link>
   </div>
   <div>
   <Link to= "/Search">
   <div style={{ color: 'black'  }} className='po2'>
      <FaSearch size={38} />
    </div>
    </Link>
   </div>
   <Link to="/bildgalerie" className='po3'>
   <div style={{ color: 'black'}}>
      <FaImages size={40} />
    </div>
  </Link>
  <Link to= "/chat">
    <div style={{ color: 'black'}} className='po1'>
      <FaComment size={35} />
    </div>
  </Link>
  <Link to= "/login">
    <div style={{ color: 'black'}} className='po4'>
      <FaSignInAlt size={35} />
    </div>
  </Link>
  <Link to='/PictureShop'>
    <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'black', width:'90%', height:'75%'}} />
  </Link>
  <Link to='/Videogalerie'>
  <FontAwesomeIcon icon={faVideo} style={{ color: 'black', width:'90%', height:'75%' }} />
  </Link>
    <Routes>
    <Route path="/" element={<Home/>}/>
   <Route path="/bildgalerie" element={<Bildgalerie/>}/>
   <Route path="/Search" element={<Search/>}/>
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
          </div>
      </div>
  ) 
}
function InfoB() {
  return ( 
    <div className='icons1'>
      <div className='like1'>
        <Likes/>
      </div>
      <div className='comment1'>
        <Comments/>
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
  const [like,setLike] = useState('white');
  const [likeNumber, setLikeNumber] = useState(0);
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
        <FaHeart className='ani' size={45} style= {{ color: like}} />
     </button>
       <div className='likeNumber'>
        {likeNumber}
       </div>
      </div> 
   );
}

//Search
const searchthings = [
  {name:'Search', src:'/search', imgSRC:'#', cat:'Name'},
  {name:'Picture gallery', src:'/bildgalerie', imgSRC:'#', cat:'Name'} , 
  {name: 'Home', src:'/', imgSRC: '#', cat:'Name'},
  {name:'Chat' , src:'/chat', imgSRC:'#' , cat:'Name'},
  {name:'Login', src:'/login', imgSRC:'#', cat:'Name'}
];
function Search() {
  const [filterText, setFiltertext] = useState('');
  const rows = [];
  let lastCategory = null ;
  searchthings.forEach ((sear) => {
    if (
      sear.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
  }
   if (sear.cat !== lastCategory) {
    rows.push(
      <tr>
      <th className='searchthings'>
        <img src={sear.imgSRC} className='Search'/>
        <div className='name'>
          {sear.name}
        </div>
      </th>
      </tr>
    );
    lastCategory = sear.cat ;
   };
  });

  return (
      <div className='search'>
       <form>
          <input type='text' value={filterText} placeholder='Search...'
          onChange={(e) => setFiltertext(e.target.value)} 
            className='input'
          />
        </form>
          <SearchTable rows={rows}/>
       </div>
  );
}


function SearchTable() {
  return (
   <div className='searchthings'>
        <div className='name'>
          {searchthings[0].name}
        </div>
        <div className='searchthings'>
         <div className='name'>
          {searchthings[1].name}
         </div>
        </div> 
    </div>
  );
}

//Login und Sigup

function Login() {
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
 };
  return (
   <div className='login'>
    <div className='head'>
      Login
    </div>
      <input id='us' type="text" placeholder="Username..." value={username} onChange={handleUsernameChange} />
      <br/>
      <input id='pa' type="password" placeholder="Password..." value={password} onChange={handlePasswortChange} />
      <br/>
      <br/>
      <br/>
      <button className='logBtn' onClick={handleLogin}>
      <p className="AniB">
        Login
      </p>
      </button>

 <br/>
 <br/>
    <div className='importantI'>
    <br/>
      Are not you already login then
      <Link to="/login/signup">
        <span className='sg'> sign up .</span>
      </Link>
    </div>
    <Routes>
      <Route path="/login/signup" element={<Signup/>}/>
    </Routes>
   </div>
  );

}

function Signup() {
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');
  return (
    <div className='signup'>
     <h1 style={{color:'red', fontSize:'300vh'}}> </h1>
    </div>
  );

}

//Videogalerie

const Videogalerie = () => {

  return (
    <div className='videogalerie'>
      <video controls className='video'>
      <source src="/C4EF135C-1DD4-469C-81D3-448FBB715860.mp4" type="video/mp4"/>
     </video>
    </div>
  );
}

//Picture shop

const PictureShop = () => {
  return (
    <div className='pictureShop'>
      
    </div>
  );
} 