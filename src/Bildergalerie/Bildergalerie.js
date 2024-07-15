import "./bildergalerie.css";
import { useState, useEffect } from "react";
import { FaHeart } from 'react-icons/fa';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage, db, auth } from '../config/firebase';
import { doc, getDoc, setDoc, getDocs, query, collection, where } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';
import { set } from "react-ga";

export default function Bildgalerie1() {
  const [publicItemsP, setPublicItemsP] = useState([]);
  const imageListRef = ref(storage, 'images/');

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setPublicItemsP((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const images = [
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
    './Motorrad.jpeg',
    './FrauGarage.jpeg',
    './mannBlitz2.jpeg',
    './FrauSchläft.jpeg',
    './EngelTeufel.jpeg',
    './Maria2.jpeg',
    './Teufel2.jpeg',
    './Wikinger.jpeg',
    './BlumenFrau2.jpeg',
    './Eiffelturm.jpeg',
    './KettenFrau2.jpeg',
    './KronenFrau.jpeg',
    './BaumFrau.jpeg',
    './Läspisch2.jpeg',
    './Jessia2.jpeg',
    './WasserFrau.jpeg',
    './LampenFrau.jpeg',
    './GeEngel.jpeg',
    './SchiffE2.jpeg',
    './BuntF.jpeg',
    './HolzSchiff.jpeg',
    './Eli2.jpeg',
    './EngFrau2.jpeg',
    './FrauS.jpeg',
    './BetenF.jpeg',
    './BootFrau.jpeg',
    './ColleFRau2.jpeg',
    './Athen.jpeg',
    './BluSchlafFrau.jpeg',
    './Indianer.jpeg',
    './Cello2.jpeg',
    './Avatar2.jpeg',
    './BRFrau.jpeg',
    './HaarMerer.jpeg',
    './SpiegelF.jpeg',
    './SchlafMF.jpeg',
    './LächelF.jpeg',
    './SchWeiF.jpeg',
    './BuntMusterFrau.jpeg',
    './Tanzen2.jpeg',
    './Pferd2.jpeg',
    './CringeF.jpeg',
    './TanzendeF.jpeg',
    './AlkoholF2.jpeg',
    './Löwe.jpeg',
    './BulleF.jpeg',
    './FrauSch.jpeg',
    './BuntF2.jpeg',
    './KriegerGF.jpeg',
    './FischF.jpeg',
    './SchmetterlingF.jpeg',
    './StockF.jpeg',
    './FarbenF.jpeg',
    './Hochzeit.jpeg',
    './BootE.jpeg',
    './HausdGe.jpeg',
    './Brüste.jpeg',
    './FBJZ.jpeg',
    './SchiffAE2.jpeg',
    './Statur.jpeg',
    './7.jpeg',
    './GelbeFrau.jpeg',
    './Ritterin.jpeg',
    './Boxerin.jpeg',
  ];

  return (
    <div className='bildgalerie' >
      <div className="headAb">
         Picture gallery
      </div>
      <div className='grid'>
        {images.map((item, index) => (
          <div key={index} style={{marginBottom: '20%'}}>
            <img src={item} className='imgG' />
            <InfoB imageId={`image-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoB({ imageId }) {
  return (
    <div className='icons1'>
      <div className='like1'>
        <Likes imageId={imageId} />
      </div>
    </div>
  );
}

function Likes({ imageId }) {
  const [user, setUser] = useState(null);
  const [like, setLike] = useState('white');
  const [likeNumber, setLikeNumber] = useState(0);
  const [state, setState] = useState(false);
  const [stateO, setStateO] =  useState(true);
  const [stateP, setStateP] =  useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchLikes = async () => {
        try {
          const docRef = doc(db, "likes", imageId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setLikeNumber(data.likeNumber || 0);
            if (data.users && data.users[user.uid]) {
              setLike('red');
            }
          }
        } catch (error) {
          console.error("Error fetching likes:", error);
        }
      };

      fetchLikes();
    }
  }, [imageId, user]);

  const handleClick = async () => {
    if (user) {
      try {
        const docRef = doc(db, "likes", imageId);
        const docSnap = await getDoc(docRef);
        let newLikeCount = likeNumber;
        let users = {};
        const q = query(collection(db, "likes"), where('docRef', '==', imageId));
        const querySnapshot  = await getDocs(q);
        
       
        if (docSnap.exists() && state == true && stateP == false ) {
  
         querySnapshot.forEach(async (docSnapshot) => {
      const docRef = doc(db, "userEvents", docSnapshot.likeNumber);
      const docSnap = await getDoc(docRef);

      let users = docSnap.data().users || {};
        delete users[user.uid];
          newLikeCount = newLikeCount - 1;
       
        
    });
            setLike('white');
            setState(false);
            setStateP(true);
  } 
           else if ( stateP == true  && state == false ) {
            // User has not liked yet
            users[user.uid] = true;
            newLikeCount += 1;
            setLike('red');
            setState(true);
            setStateP(false);
          }
          
      
         else {
          // First like for this image
          users[user.uid] = true;
          newLikeCount = 1;
          setLike('red');
        }
      
        await setDoc(docRef, { likeNumber: newLikeCount, users, state: state, stateP: stateP, docRef: docRef }, { merge: true });
        setLikeNumber(newLikeCount);
      } catch (error) {
        console.error("Error updating likes:", error);
      }
    }
  };

  return (
    <div className='likes'>
      <button onClick={handleClick}>
        <FaHeart className='ani' size={50} style={{ color: like }} />
      </button>
      <div className='likeNumber' style={{fontFamily:"Arial"}}>
        {likeNumber}
      </div>
    </div>
  );
}