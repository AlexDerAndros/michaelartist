import React, {useState} from 'react';
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
import { faGripVertical, faShoppingCart, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { counter, text } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { getAuth, signOut , GoogleAuthProvider , signInWithPopup,  getAdditionalUserInfo, signInWithRedirect } from "firebase/auth";
import Cookies from 'js-cookie';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from './config/firebase';


import  PictureShopp from './Bilder Shopping/pictureShop';
import Bildgalerie1 from './Bildergalerie/Bildergalerie';
import Log1 from './Login/Login';
// import  LoginInputName  from './Login/LoginInputName';
import Videogalerie1 from './Videogalerie/Videogalerie';
import AboutUs1 from './About/AboutUs';
import Chat1 from './Chat/chat';
import Biographie1 from './Biographie/biographie';
import { PostSiteP } from './Login/Login';

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
  let admin;
  if (Cookies.get('isAdmin') == "true") {
    admin = <Link to= "/chat">
    <div className='po1'>
      <FaComment  className='ic'/> <span className='he'> Chat</span>
    </div>
  </Link>;
  }  
  const[home, setHome] = useState(false);
  const[search, setSearch] = useState(false);
  const[login, setLogin] = useState(false);
  const[videos, setVideos] = useState(false);
  const[aboutUs, setAboutUs] = useState(false);
  const[clickHamburger, setClickHamburger] = useState(false);
  const[lHome, setLHome] = useState(false);
  const[lSearch, setLSearch] = useState(false);
  const[lPG, setLPG] = useState(false);
  const[lLogin, setLLogin] = useState(false);
  const[lV, setLV] = useState(false);
  const[lPS, setLPS] = useState(false);
  const[lAU, setLAU] = useState(false);



  const pressHamburger = () => {
    setClickHamburger(!clickHamburger);
  }
  const pressHome = () => {
    setHome(true);
    setSearch(false);
    setLogin(false);
    setVideos(false);
    setAboutUs(false);
  };
  const pressSearch = () => {
    setHome(false);
    setSearch(true);
    setLogin(false);
    setVideos(false);
    setAboutUs(false);
  };
  const pressLogin = () => {
    setHome(false);
    setSearch(false);
    setLogin(true);
    setVideos(false);
    setAboutUs(false);
  }; 
  const pressVideos = () => {
    setHome(false);
    setSearch(false);
    setLogin(false);
    setVideos(true);
    setAboutUs(false);
  }; 
  const pressAboutUs = () => {
    setHome(false);
    setSearch(false);
    setLogin(false);
    setVideos(false);
    setAboutUs(true);
  };
  
  useEffect(() => {
    setHome(true);
  }, []);

  const LHome = () => {
    setLHome(true);
    setLSearch(false);
    setLPG(false);
    setLLogin(false);
    setLV(false);
    setLPS(false);
    setLAU(false);
  }
  const LSearch = () => {
    setLHome(false);
    setLSearch(true);
    setLPG(false);
    setLLogin(false);
    setLV(false);
    setLPS(false);
    setLAU(false);
  }
  const LPG = () => {
    setLHome(false);
    setLSearch(false);
    setLPG(true);
    setLLogin(false);
    setLV(false);
    setLPS(false);
    setLAU(false);
  }
  const LLogin = () => {
    setLHome(false);
    setLSearch(false);
    setLPG(false);
    setLLogin(true);
    setLV(false);
    setLPS(false);
    setLAU(false);
  }
  const LV = () => {
    setLHome(false);
    setLSearch(false);
    setLPG(false);
    setLLogin(false);
    setLV(true);
    setLPS(false);
    setLAU(false);
  }
  const LPS = () => {
    setLHome(false);
    setLSearch(false);
    setLPG(false);
    setLLogin(false);
    setLV(false);
    setLPS(true);
    setLAU(false);
  }
  const LAU = () => {
    setLHome(false);
    setLSearch(false);
    setLPG(false);
    setLLogin(false);
    setLV(false);
    setLPS(false);
    setLAU(true);
  }
  const[cookies, setCookies] = useState(false);
  const CookiesAccept = () => {
    setCookies(true);
    Cookies.set('cookies', 'true', {expires: 7});
    Cookies.set('activeCookies', 'true', {expires: 7})
  }
  const CookiesReject = () => {
    setCookies(true);
    Cookies.set('cookies', 'true', {expires: 1})
    Cookies.set('activeCookies', 'false', {expires: 1})

    
  }
  useEffect(() => {
   const checkCookies = () => {
     if (Cookies.get('cookies') == 'true') {
      setCookies(true);
      Cookies.set('cookiesStay', 'true', {expires: 7})
     }
     else {
      setCookies(false);
     }

   }
   checkCookies();
  }, []);
  return (
   <Router>
   <>
   <div className='header'>
      <div>
         {Cookies.get("loggedIn") == "true" ? (
          <>
            {clickHamburger ? (
              <div className='hamburger-menu'>
               <FontAwesomeIcon icon={faX} onClick={pressHamburger}/>
              </div>
            ): (
              <div className='hamburger-menu'>
               <FontAwesomeIcon icon={faBars} onClick={pressHamburger} />
              </div>
            )}
          </>
         ): (
          <>
              
          </>
         )}
      </div>
      <div className='title' > 
      <a href='/'>
        Artist Michael Ntrikos
      </a>
      </div>
      <div>
        <a href='https://www.tiktok.com/@meineartmichael?_t=8bx04ojY9ME&_r=1'>
          <FontAwesomeIcon icon={faTiktok}   className='ttIcon'/>
        </a>
      </div> 
     <div>
        <a href='https://www.instagram.com/michael.n.artist/?igshid=YmMyMTA2M2Y%3D'>
          <FontAwesomeIcon icon={faInstagram}   className='igIcon'/>
        </a>
      </div>  
  
      {Cookies.get('loggedIn') === 'true' ? (
        <>
          <div
            className='contentHamburgerMenu'
            style={{ height: clickHamburger ? '35vh' : '0vh',}}
          >
            <ul style={{display:clickHamburger ? "block" : "none"}}>
              <li>
                <Link to="/" style={{ pointerEvents: clickHamburger ? 'auto' : 'none' }}>
                  <div>
                    <FaHome className='ic1' />
                    <span className='listMenu text' onClick={LHome} style={{ fontSize: clickHamburger ? '4.4vw' : '0vw', color: lHome ? "rgb(96, 251, 181)" : "white"}}>Home</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Search" style={{ pointerEvents: clickHamburger ? 'auto' : 'none' }}>
                  <div>
                    <FaSearch className='ic1' />
                    <span className='listMenu text' onClick={LSearch} style={{ fontSize: clickHamburger ? '4.4vw' : '0vw', color: lSearch ? "rgb(96, 251, 181)" : "white"}}>Search</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/bildgalerie" style={{ pointerEvents: clickHamburger ? 'auto' : 'none' }}>
                  <div>
                    <FaImages className='ic1' />
                    <span className='listMenu text' onClick={LPG} style={{ fontSize: clickHamburger ? '4.4vw' : '0vw', color: lPG ? "rgb(96, 251, 181)" : "white"}}>Picture gallery</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/login" style={{ pointerEvents: clickHamburger ? 'auto' : 'none' }}>
                  <div>
                    <FaSignInAlt className='ic1' />
                    <span className='listMenu text' onClick={LLogin} style={{ fontSize: clickHamburger ? '4.4vw' : '0vw', color: lLogin ? "rgb(96, 251, 181)" : "white"}}>Login</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Videogalerie" style={{ pointerEvents: clickHamburger ? 'auto' : 'none' }}>
                  <div>
                    <FontAwesomeIcon icon={faVideo} className='ic1' />
                    <span className='listMenu text' onClick={LV} style={{ fontSize: clickHamburger ? '4.4vw' : '0vw', color: lV ? "rgb(96, 251, 181)" : "white"}}>Videos</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/PictureShop" style={{ pointerEvents: clickHamburger ? 'auto' : 'none' }}>
                  <div>
                    <FontAwesomeIcon icon={faShoppingCart} className='ic1' />
                    <span className='listMenu text' onClick={LPS} style={{ fontSize: clickHamburger ? '4.4vw' : '0vw', color: lPS ? "rgb(96, 251, 181)" : "white"}}>Picture shop</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" style={{ pointerEvents: clickHamburger ? 'auto' : 'none' }}>
                  <div>
                    <FontAwesomeIcon icon={faInfoCircle} className='ic1' />
                    <span className='listMenu text' onClick={LAU} style={{ fontSize: clickHamburger ? '4.4vw' : '0vw', color: lAU ? "rgb(96, 251, 181)" : "white"}}>About Us</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          
          <div className='unten'>

<Link to="/">
    <div className='menu1'> 
    <span className= 'heNL'> 
      <FaHome   style={{color: "white",}}/>
     Home
    </span>
   </div>
</Link>

 <Link to= "/Search">
    <div  className='menu1'>
      <span className='heNL'><FaSearch style={{color: "white",}} />
      Search
     </span>
    </div>
 </Link>
 
<Link to= "/login">
  <div className='menu1'>
    <span className='heNL'>
    <FaSignInAlt style={{color: "white"}}   />
   Login
   </span>
  </div>
</Link>

<Link to='/Videogalerie'>
  <div  className='menu1'>
   <span className='heNL'>
    <FontAwesomeIcon icon={faVideo} style={{color: "white"}}   />
   Videos
   </span>
 </div>
</Link>

<Link to="/AboutUs" >
  <div className='menu1'>
  <span className='heNL'>
    <FontAwesomeIcon icon={faInfoCircle} style={{color: "white"}}   />
   About Us
   </span>
  </div>
</Link>
</div>   


   <div className='untenNL'>
        <div className='posMenuH'>
      <div>
      
      <Link to="/">
        <div  className='menu1' onClick={pressHome} style={{ color: home ? 'rgb(96, 251, 181)' : 'white'}}> 
         <FaHome className='ic'/>
          <span className='he  heNL  '  style={{ color: home ? 'rgb(96, 251, 181)' : 'white'}}> Home</span>
       </div>
       </Link>
      </div>
      <div>
      <Link to= "/Search">
      <div className='menu1'  onClick={pressSearch} style={{ color: search ? 'rgb(96, 251, 181)' : 'white', }}>
         <FaSearch className='ic'/> 
         <span className='he  heNL' style={{ color: search ? 'rgb(96, 251, 181)' : 'white'}}> Search</span>
       </div>
       </Link>
      </div>
      
     <Link to= "/login">
       <div  className='menu1'  onClick={pressLogin} style={{ color: login ? 'rgb(96, 251, 181)' : 'white'}}>
         <FaSignInAlt  className='ic'/> 
         <span className='he   heNL'  style={{ color: login ? 'rgb(96, 251, 181)' : 'white'}}> Login </span>
       </div>
     </Link>
     <Link to='/bildgalerie'>
      <div  className='menu1'  onClick={pressVideos} style={{ color: videos ? 'rgb(96, 251, 181)' : 'white'}}>
       <FaImages className='ic'  />
       <span className='he  heNL' onClick={pressVideos} style={{ color: videos ? 'rgb(96, 251, 181)' : 'white', textAlign:"center"}}>Pictures</span>
      </div>
     </Link>
   
     <Link to="/PictureShop" >
     <div className='menu1'  onClick={pressAboutUs} style={{ color: aboutUs ? 'rgb(96, 251, 181)' : 'white'}}>
       <FontAwesomeIcon icon={faShoppingCart}   className='ic' />
         <span className='he  heNL' style={{ color: aboutUs ? 'rgb(96, 251, 181)' : 'white'}}>Shop</span>
     </div>
         </Link>
      </div>   
      </div>

      <div className='unten'>

     <Link to="/" >
         <div className='menu1H' onClick={LHome}> 
         <span className= 'heNL' style={{color: lHome ? "rgb(96, 251, 181)" : "white",}}> 
           <FaHome/>Home</span>
        </div>
     </Link>
     
      <Link to= "/Search">
         <div  className='menu1' onClick={LSearch}>
           <span className='heNL'  style={{color: lSearch ? "rgb(96, 251, 181)" : "white",}}>
            <FaSearch />
           Search
          </span>
         </div>
      </Link>
      
     <Link to= "/login">
       <div className='menu1' onClick={LLogin}>
         <span className='heNL' style={{color: lLogin ? "rgb(96, 251, 181)" : "white",}}>
         <FaSignInAlt    />
        Login
        </span>
       </div>
     </Link>

     <Link to='/Videogalerie'>
       <div  className='menu1' onClick={LV}>
        <span className='heNL' style={{color: lV ? "rgb(96, 251, 181)" : "white",}}>
         <FontAwesomeIcon icon={faVideo}/>
        Videos
        </span>
      </div>
     </Link>
   
    <Link to="/AboutUs" >
       <div className='menu1' onClick={LAU}>
       <span className='heNL' style={{color: lAU ? "rgb(96, 251, 181)" : "white",}}>
         <FontAwesomeIcon icon={faInfoCircle} />
        About Us
        </span>
       </div>
    </Link>
    <Link to="/PictureShop" >
       <div className='menu1' onClick={LPS}>
       <span className='heNL' style={{color: lPS ? "rgb(96, 251, 181)" : "white",}}>
         <FontAwesomeIcon icon={faShoppingCart} />
         Shop
        </span>
       </div>
    </Link>
    <Link to="/Bildgalerie" >
       <div className='menu1' onClick={LPG}>
       <span className='heNL' style={{color: lPG ? "rgb(96, 251, 181)" : "white",}}>
         <FaImages/>
         Pictures
        </span>
       </div>
    </Link>
  </div>   
       
      
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
         </>
    ): (
      <>
      <div className='untenNL'>
        <div className='posMenuH'>
      <div>
      
      <Link to="/">
        <div  className='menu1' onClick={pressHome} style={{ color: home ? 'rgb(96, 251, 181)' : 'white'}}> 
         <FaHome className='ic'/>
          <span className='he  heNL  '  style={{ color: home ? 'rgb(96, 251, 181)' : 'white'}}> Home</span>
       </div>
       </Link>
      </div>
      <div>
      <Link to= "/Search">
      <div className='menu1'  onClick={pressSearch} style={{ color: search ? 'rgb(96, 251, 181)' : 'white'}}>
         <FaSearch className='ic'/> 
         <span className='he  heNL' style={{ color: search ? 'rgb(96, 251, 181)' : 'white'}}> Search</span>
       </div>
       </Link>
      </div>
      
     <Link to= "/login">
       <div  className='menu1'  onClick={pressLogin} style={{ color: login ? 'rgb(96, 251, 181)' : 'white'}}>
         <FaSignInAlt  className='ic'/> 
         <span className='he   heNL'  style={{ color: login ? 'rgb(96, 251, 181)' : 'white'}}> Login </span>
       </div>
     </Link>
     <Link to='/Videogalerie'>
      <div  className='menu1'  onClick={pressVideos} style={{ color: videos ? 'rgb(96, 251, 181)' : 'white'}}>
       <FontAwesomeIcon icon={faVideo} className='ic'  />
       <span className='he  heNL' onClick={pressVideos} style={{ color: videos ? 'rgb(96, 251, 181)' : 'white'}}> Videos</span>
      </div>
     </Link>
   
     <Link to="/AboutUs" >
     <div className='menu1'  onClick={pressAboutUs} style={{ color: aboutUs ? 'rgb(96, 251, 181)' : 'white'}}>
       <FontAwesomeIcon icon={faInfoCircle}   className='ic' />
         <span className='he  heNL' style={{ color: aboutUs ? 'rgb(96, 251, 181)' : 'white'}}>About Us</span>
     </div>
         </Link>
      </div>   


      <div className='unten'>

     <Link to="/" >
         <div className='menu1' onClick={pressHome}> 
         <span className= 'heNL' style={{color: home ? "rgb(96, 251, 181)" : "white",}}> 
           <FaHome   style={{color: home ? "rgb(96, 251, 181)" : "white",}}/>
          Home
         </span>
        </div>
     </Link>
     
      <Link to= "/Search">
         <div  className='menu1' onClick={pressSearch}>
           <span className='heNL'  style={{color: search ? "rgb(96, 251, 181)" : "white",}}>
            <FaSearch  style={{color: search ? "rgb(96, 251, 181)" : "white",}} />
           Search
          </span>
         </div>
      </Link>
      
     <Link to= "/login">
       <div className='menu1' onClick={pressLogin}>
         <span className='heNL' style={{color: login ? "rgb(96, 251, 181)" : "white",}}>
         <FaSignInAlt    /> 
        Login
        </span>
       </div>
     </Link>

     <Link to='/Videogalerie'>
       <div  className='menu1' onClick={pressVideos}>
        <span className='heNL' style={{color: videos ? "rgb(96, 251, 181)" : "white",}}>
         <FontAwesomeIcon icon={faVideo} style={{color: videos ? "rgb(96, 251, 181)" : "white",}} />
        Videos
        </span>
      </div>
     </Link>
   
    <Link to="/AboutUs" >
       <div className='menu1' onClick={pressAboutUs}>
       <span className='heNL' style={{color: aboutUs ? "rgb(96, 251, 181)" : "white",}}>
         <FontAwesomeIcon icon={faInfoCircle} style={{color: aboutUs ? "rgb(96, 251, 181)" : "white",}}  />
        About Us
        </span>
       </div>
    </Link>
  </div>   

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
       </>
    )}
   
   <div className='cookie-banner' style={{height: cookies ? "0%" : "40%", display: Cookies.get('cookiesStay') == 'true' ? 'none' : 'flex' }}>
     <div className='posCookies-banner'>
       <div className='headCookies'>
         Cookies Notice
       </div>
       We use cookies to enhance your experience on our website.
        Cookies are small text files that are stored on your device to help us improve our website and your interactions with it.
        They allow us to remember your preferences.
       <div className='acceptCookies' onClick={CookiesAccept}>
         Accept
       </div>
       <div className='opposeCookies' onClick={CookiesReject}>
         Reject 
       </div>
     </div>
   </div>
   
 </div>
</>
</Router> 
  );
 
}


 

function ImageList (){
  const [publicItemsP, setPublicItemsP] = useState([]);
  const imageListRef = ref(storage, 'images/');

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setPublicItemsP((prev) => [...prev, url]);
        })
      })
    }) ;
  }, []);
  const images =[
    './michaelBackground.png',
    ...publicItemsP, 
    "./FrauFarbverlauf.jpg",
    "./FlügelF.jpeg.jpg",
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
     './Statur.jpeg','./7.jpeg','./GelbeFrau.jpeg', './Ritterin.jpeg', './Boxerin.jpeg', ];     
  

  const [currentIndex, setCurrentIndex]= useState(0);
  // const[click,setClick] = useState(false);
  
  // const BiggerPic= () => {
  //   setClick(!click);
  // }
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
    background:'none' ,
    }}>
   <div className='picPos'>  
    <img   className='imgI' src= {images[currentIndex]} 
       style= {{
          transform: 'scale(1)',
          zIndex:  '-1',
          
        }}
    />
   </div>  
    <div className='imgBtn'> 
    <button  onClick={prevImage} className='btn1'> 
      <FontAwesomeIcon icon={faArrowRight} size='1x' style={{color: 'white',transform:'rotate(-180deg)', position:"absolute", margin:"-30% -10%"}} />
    </button>
  <button className='btn1' onClick={nextImage}>
    <FontAwesomeIcon icon={faArrowRight} style={{color: 'white', position:"absolute" , margin:"-30% -10%" }}/>
  </button>
    </div>
   
   </div>
  );
}



function Home() {
 
  ReactGA.initialize('YOUR_TRACKING_ID');
  ReactGA.pageview(window.location.pathname);
  const username = Cookies.get('username');
  let user;
  if ( Cookies.get('loggedIn') === 'true') {
    user = username + "!";
  }
  else if ( Cookies.get('isAdmin') === 'true') {
    user = 'Admin' + username;
  }
  else {
    user ="to my Website!";
  }
  
 return (
<div className='Mitte' >
 <div className='info1'> 
  Welcome {user}
</div>
<div className='info'>
      "If you feel it, you can paint it.
        When you paint, you feel it."  By Michael Ntrikos
        <br/>
        Here is a slideshow of all my paintings.
</div>

<ImageList/>
<br/>
<div className='biog' >
    <div className="text  " style={{textAlign: 'left', color:  "white" }}>
      <div className=' textTablet'>
       Hello!

       <br/>
       I'm glad you like my pictures.
       <br/>
       My name is Michael Ntrikos and I was born on 20.11.1980 in Preveza. I then grew up in Germany. 
      At the age of seven I painted my first large picture, a ship in the ocean, which is 1 m x 1.50 m in size. Since that painting, painting has become one of the most important things in my life and it still is for me today. I did not study art. I taught myself all my painting techniques. I also have thousands of pictures in my head that I could paint every day. In my artistic career, I have been inspired by many artists, which has allowed me to develop my own style over the years.
      When I was little, I spent every summer in Parga/Paxos and in Venice with my grandparents. That was a time full of inspiration, where I also painted many other pictures, such as a woman on the beach. All the pictures I paint are very colorful as well as my thoughts and always reflect my mood.
      For this reason, all the pictures I paint are unique. Every picture is a part of me.
      I am very happy if you like my paintings. 
       <br/>
       Best regards 
       <br/>
      Yours Michael
     </div>
      </div>
    </div>
  </div>
 
 
 );
}





//Search




function NotLogIn() {
  return (
   <div style={{color: "white", background: "none", fontSize:"7.5vh"}} className='search'>
     <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
     Sorry you are not logged in! Log in or register to see this page.
     </div>
   </div>
  );
}
function NotAdmin() {
  return (
    <div style={{color: "white", background: "none", fontSize:"7.5vh"}} className='search'>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      Sorry you are not an admin! This function is still under development.
      </div>
    </div>
   );
}


function Chat() {
  if (Cookies.get('isAdmin') === 'true') {
    return <Chat1/>;
  }
  else {
    return <NotAdmin/>;
  }
}
function Bildgalerie() {
  if ( Cookies.get('loggedIn') === 'true') {
    return <Bildgalerie1/>;
   }
   else {
     return <NotLogIn/>;
   }
  
}

function AboutUs() {
  return <AboutUs1/>;
}
function Log() {
  return <Log1/>;
}

function Videogalerie() {
  return <Videogalerie1/>;
}

function PictureShop() {
  if ( Cookies.get('loggedIn') === 'true') {
    return <PictureShopp/>;
   }
   else {
     return <NotLogIn/>;
   }
 
}
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
    { id: 1, term: 'Home', className: 'searchItem', icon:  <FaHome className='icSearch'/>, press: pressHome},
    { id: 2, term: 'Picture gallery', className: 'searchItem', icon: <FaImages className='icSearch'/>, press: pressPicturegallery},
    { id: 3, term: 'Chat', className: 'searchItem', icon: <FaComment className='icSearch'/>, press: pressChat},
    { id: 4, term: 'Login', className: 'searchItem', icon: <FaSignInAlt className='icSearch'/>, press: pressLogin},
    { id: 5, term: 'Video gallery', className: 'searchItem', icon:<FontAwesomeIcon icon={faVideo}  className='icSearch'/>, press: pressVideogallery},
    { id: 6, term: 'Picture shop', className: 'searchItem', icon: <FontAwesomeIcon icon={faShoppingCart} className='icSearch'/> , press: pressPictureShop},
    { id: 7, term: 'About Us', className: 'searchItem', icon:  <FontAwesomeIcon icon={faInfoCircle} className='icSearch' />, press:pressAboutUs},
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
      ): (
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
                &nbsp;
                {item.term}
              </li>
            ))}
          </ul>
        </div>
      )}
        
    </div>
  );
};