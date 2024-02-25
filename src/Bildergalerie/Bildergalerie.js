import "./bildergalerie.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHeart } from 'react-icons/fa';
import { FaPaperPlane } from "react-icons/fa";
import { FaComment } from 'react-icons/fa';
import 'react-ga';
const images =[
    './michaelBackground.png',
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

     
export default function Bildgalerie1() {
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
  
  