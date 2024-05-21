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
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { getAuth, signOut , GoogleAuthProvider , signInWithPopup,  getAdditionalUserInfo, signInWithRedirect } from "firebase/auth";
import Cookies from 'js-cookie';

import  PictureShopp from './Bilder Shopping/pictureShop';
import Bildgalerie1 from './Bildergalerie/Bildergalerie';
import Log1 from './Login/Login';
// import  LoginInputName  from './Login/LoginInputName';
import Videogalerie1 from './Videogalerie/Videogalerie';
import AboutUs1 from './Über uns/AboutUs';
import Chat1 from './Chat/chat';
import Biographie1 from './Biographie/biographie';
export const images =[
  './michaelBackground.png',
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
   './Statur.jpeg','./7.jpeg','./GelbeFrau.jpeg', './Ritterin.jpeg', './Boxerin.jpeg'];     
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
  <Link to='/biography'>
   <div>
   <FontAwesomeIcon icon={faPenSquare } size="2x"  className='ic' />
   <span className='he'> My Biography</span>
   
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
   <Route path='/biography' element={<Biographie/>}/>

    
   
  </Routes>
 </div>
</div>
</Router> 
  );
 
}

 

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
      <FontAwesomeIcon icon={faArrowRight} size='1x' style={{color:  click ? 'transparent' : 'white',transform:'rotate(-180deg)', position:"absolute", margin:"-30% -10%"}} />
    </button>
  <button className='btn1' onClick={nextImage}>
    <FontAwesomeIcon icon={faArrowRight} style={{color:  click ? 'transparent' : 'white', position:"absolute" , margin:"-30% -10%" }}/>
  </button>
    </div>
   </div>
  );
}


function Home() {
 
 
  const[clickPhoto, setClickPhoto] = useState(false);
  const[clickVideo, setClickVideo] = useState(false);
  const[clickPost, setClickPost] = useState(false);
  const [click, setClick] = useState(false);
  const press = () => {
    setClick(!click);
  }
  let addVideoPhoto;
  let display;
  if (Cookies.get('username') == "AdminMichaelNtrikos" && Cookies.get('password') == "parga10062007" && Cookies.get('loggedIn') == 'true') {
    addVideoPhoto = <div className='plus' onClick={press} style={{transform: click ? "rotate(45deg)": "rotate(0deg)"}}> + </div>;
    display = "block";
  }
   else {
    addVideoPhoto = ``;
    display = "none";
   }
  
  const pressPHOTO = () => {
    setClickPhoto(!clickPhoto);
  }
  const pressVIDEO = () => {
    setClickVideo(!clickVideo);
  } 
  const pressPOST = () => {
    setClickPost(!clickPost);
  }
   
    


    
    
  ReactGA.initialize('YOUR_TRACKING_ID');
  ReactGA.pageview(window.location.pathname);
  const username = Cookies.get('username');
  let user;
  if ( Cookies.get('loggedIn') === 'true') {
    user = username + "!";
  }
  else {
    user ="to my Website!";
  }
  const NewThings = [
    {title:'New Photo', id: 1, press: pressPHOTO, click: clickPhoto },
    {title:'New Video', id: 2, press: pressVIDEO,  click: clickVideo},
    {title:'New Post', id: 3,  press: pressPOST, click: clickPost}
  ];
  if ( !clickPhoto && !clickVideo && !clickPost) {
 return (
  <>
<div className='Mitte'>
 <div className='info1'> 
  Welcome {user}
</div>
<div className='info'>
      "If you feel it, you can paint it.
        When you paint, you feel it."  By Michael Ntrikos 
</div>
<ImageList/>
<br/>
  </div>
  {addVideoPhoto}
  <div className='addThings' style={{height: click ? "auto" : "0vh", width: click ? "auto" : "0vw", fontSize: click ? "3vh": "0vh", zIndex: click ? "1000" : "-100", display: display, background: click ?  "rgb(43, 42, 42)" : "none"  }}>
     {NewThings.map((item)=> (
     <div onClick={item.press} className='eleT' key={item.index} style={{display: click ? "block": "none"}}> {item.title} </div>
     ))}
  </div>
 
  </>
 );
}
else if (clickVideo) {
  return (
   <>
    <PostSiteV/>
    <FontAwesomeIcon  onClick={pressVIDEO} icon={faArrowRight} size='2x' className='backIconS' />

   </>
  );
}
else if (clickPhoto) {
 return (
  <>
    <PostSiteP/>
    <FontAwesomeIcon  onClick={pressPHOTO} icon={faArrowRight} size='2x' className='backIconS' />

    
  </>
 );
} else if (clickPost) {
 return (
  <>
    <PostSitePO/>
    <FontAwesomeIcon  onClick={pressPOST} icon={faArrowRight} size='2x' className='backIconS' />

     
  </>
 );
}
else {
  return (
    <>
      Error
    </>
  );
}

}

const PostSitePO = () => {
  const [inputValuePO, setInputValuePO] = useState('');
  const [publicItemsPO, setPublicItemsPO] = useState([]);
  //Post
  const checkPost = (e) => {
    setInputValuePO(e.target.value);
   }
   const SaveINPOST = () => {
    if (inputValuePO.trim() !== '') {
        setPublicItemsPO([...publicItemsPO, inputValuePO]);
        setInputValuePO('');
    } else {
        alert('Press something please.');
    }
}
  return (
    <div className='search'>
        <div>
           <div className='info1'>
              New Post
           </div>
           <input
                type="text"
                value={inputValuePO}
                onChange={checkPost}
            />
            <button onClick={SaveINPOST}>Speichern</button>
            <div>
                {publicItemsPO.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>  

    </div>
  );
}
const PostSiteV = () => {
  const [selectedImageV, setSelectedImageV] = useState(null);
  const [publicItemsV, setPublicItemsV] = useState([]);
  const [inputValueV, setInputValueV] = useState('');
  //Video
  const CheckVideo = (e) => {
    setInputValueV(e.target.value);
};

const PostVideo = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedImageV(reader.result);
        };
        reader.readAsDataURL(file);
    }
};

const SaveVideo = () => {
    if (inputValueV.trim() !== '' || selectedImageV) {
        setPublicItemsV([...publicItemsV, { text: inputValueV, image: selectedImageV }]);
        setInputValueV('');
        setSelectedImageV(null);
    } else {
        alert('Choose a video, please!');
    }
};
  return (
    <div className='search'>
        <div>
           <div className='info1'>
             New Video
           </div>
        </div>  
        <input
                type="file"
                accept="image/*"
                onChange={PostVideo}
            />
            {selectedImageV && (
                <img src={selectedImageV} alt="Selected" style={{ maxWidth: '100px', maxHeight: '100px' }} />
            )}
            <button onClick={SaveVideo}>Speichern</button>
            <div>
                {publicItemsV.map((item, index) => (
                    <div key={index}>
                        <p>{item.text}</p>
                        {item.image && <img src={item.image} alt="Item" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
                    </div>
                ))}
            </div>
    </div>
  );
}
const PostSiteP = () => {
  
  const [selectedImageP, setSelectedImageP] = useState(null);
  const [publicItemsP, setPublicItemsP] = useState([]);
    const PostImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImageP(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const SaveImage = () => {
      
        if ( selectedImageP) {
            setPublicItemsP([...publicItemsP, { image: selectedImageP }]);
            setSelectedImageP(null);
        } else {
            alert('Choose a picture something, please!');
        }
    };
  return (
    <div className='search'>
        <div>
           <div className='info1'>
              New Photo
           </div>
        </div>  
        <div className='ChoosePhoto'>
            <input
                type="file"
                accept="image/*"
                onChange={PostImage}
                className='inPOST'
            />
            {selectedImageP && (
                <img src={selectedImageP} alt="Selected" className='imgPOST' />
            )}
           
            <button onClick={SaveImage} className='SavePost'>
            <p className="AniB" style={{ fontSize: '2.5vh' }}>
              Save   
            </p>
            </button>
            <br/>
            <br/>
            <div>
                {publicItemsP.map((item, index) => (
                    <div key={index}>
                        <p>{item.text}</p>
                        {item.image && <img src={item.image} alt="Item" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
                    </div>
                ))}
            </div>
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
  const PBiography = () => {
    return (
      <div>
    <FontAwesomeIcon  onClick={pressBio} icon={faArrowRight} size='2x' className='backIconS'/>
    <Biographie/>
      </div>
    );
  }
  const [home,setHome]= useState(false);
  const [pictureGallery,setPictureGallery] = useState(false);
  const [chat, setChat] = useState(false);
  const[login,setLogin] = useState(false);
  const[videogallery,setVideogallery] = useState(false);
  const[pictureShop,setPictureShop] = useState(false);
  const[aboutUs, setAboutUs] = useState(false);
  const [bio,setBio] = useState(false);
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
  const pressBio = () => {
    setBio(!bio);
  }
  const [searchItems, setSearchItems] = useState([
    { id: 1, term: 'Home', className: 'searchItem', icon:  <FaHome size={25} style={{color:"rgb(96, 251, 181)", margin:"-1% 0%"}}/>, press: pressHome},
    { id: 2, term: 'Picture gallery', className: 'searchItem', icon: <FaImages size={25} style={{color:"rgb(96, 251, 181)", margin:"-1% 0%"}}/>, press: pressPicturegallery},
    { id: 3, term: 'Chat', className: 'searchItem', icon: <FaComment size={25} style={{color:"rgb(96, 251, 181)", margin:"-1% 0%"}}/>, press: pressChat},
    { id: 4, term: 'Login', className: 'searchItem', icon: <FaSignInAlt size={25} style={{color:"rgb(96, 251, 181)", margin:"-1% 0%"}}/>, press: pressLogin},
    { id: 5, term: 'Video gallery', className: 'searchItem', icon:<FontAwesomeIcon icon={faVideo} size={25} style={{color:"rgb(96, 251, 181)", margin:"-1% 0%"}}/>, press: pressVideogallery},
    { id: 6, term: 'Picture shop', className: 'searchItem', icon: <FontAwesomeIcon icon={faShoppingCart} size={25} style={{color:"rgb(96, 251, 181)", margin:"-1% 0%"}}/> , press: pressPictureShop},
    { id: 7, term: 'About Us', className: 'searchItem', icon:  <FontAwesomeIcon icon={faInfoCircle}  style={{color:"rgb(96, 251, 181)", margin:"-1% 0%"}} />, press:pressAboutUs},
    {id: 8, term: 'Biography', className: 'searchItem', icon:  <FontAwesomeIcon icon={faPenSquare}  style={{color:"rgb(96, 251, 181)", margin:"-1% 0%"}} />, press:pressBio}
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
      ): bio ? (
        <PBiography/>
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
                {item.term}
              </li>
            ))}
          </ul>
        </div>
      )}
        
    </div>
  );
};
function NotLogIn() {
  return (
   <div style={{color: "white", background: "none", fontSize:"7.5vh"}} className='search'>
     <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
     Sorry you are not logged in! Log in or register to see this page.
     </div>
   </div>
  );
}
function Biographie() {
  return <Biographie1/>;
}
function Chat() {
  if ( Cookies.get('loggedIn') === 'true') {
   return <Chat1/>;
  }
  else {
    return <NotLogIn/>;
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