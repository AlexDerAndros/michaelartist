import "./bildergalerie.css";
import { useState, useEffect } from "react";
import { FaHeart, FaPaperPlane, FaComment } from 'react-icons/fa';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage, db, auth } from '../config/firebase';
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';

export default function Bildgalerie1() {
  const [publicItemsP, setPublicItemsP] = useState([]);
  const imageListRef = ref(storage, 'images/');

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setPublicItemsP((prev) => [...prev, url]);
        })
      })
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
    <div className='bildgalerie'>
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
      {/* <Comments imageId={imageId} /> */}
    </div>
  );
}

// function Comments({ imageId }) {
//   const [click, setClick] = useState(false);
//   const [com, setCom] = useState('');
//   const [comList, setComList] = useState([]);
//   let nextId = 0;

//   const press = () => {
//     setClick(!click);
//   };

//   return (
//     <div className='comments'>
//       <FaComment className='ani' onClick={press} size={45} style={{ color: 'white' }} />

//       {click && (
//         <div className='commentOpen'>
//           <input
//             type='text'
//             value={com}
//             onChange={(e) => setCom(e.target.value)}
//             placeholder='Write a comment'
//             className='input1'
//           />
//           <button
//             onClick={() => {
//               setComList([...comList, { id: nextId++, com }]);
//               setCom('');
//             }}
//           >
//             <FaPaperPlane size={30} className='send1' />
//           </button>
//           <ul>
//             {comList.map(co => (
//               <li key={co.id}>
//                 <div className='newCo'>{co.com}</div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

function Likes({ imageId }) {
  const [user, setUser] = useState(null);
  const [like, setLike] = useState('white');
  const [likeNumber, setLikeNumber] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const docRef = doc(db, "likes", imageId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setLikeNumber(data.likeNumber || 0);
          if (user && data.users && data.users[user.uid]) {
            setLike('red');
          }
        }
      } catch (error) {
        console.error("Error fetching likes:", error);
      }
    };

    fetchLikes();
  }, [imageId, user]);

  const handleClick = async () => {
    let newCount;
    if (user) {
      try {
        const docRef = doc(db, "likes", imageId);
        const docSnap = await getDoc(docRef);
        let users = {};
        if (docSnap.exists()) {
          users = docSnap.data().users || {};
          if (users[user.uid]) {
            delete users[user.uid];
            newCount = likeNumber > 0 ? likeNumber - 1 : 0;
            setLike('white');
          } else {
            users[user.uid] = true;
            newCount = likeNumber + 1;
            setLike('red');
          }
        } else {
          users[user.uid] = true;
          newCount = 1;
          setLike('red');
        }
        await setDoc(docRef, { likeNumber: newCount, users }, { merge: true });
      } catch (error) {
        console.error("Error updating likes:", error);
      }
    } else {
      newCount = likeNumber + 1;
      setLike('red');
    }
    if (like === 'red') {
      setLike('white');
      newCount = likeNumber - 1;
      setLikeNumber(newCount);
      
    } else {
      setLike('red');
      newCount = likeNumber + 1;
      setLikeNumber(newCount);
      
    }
    setLikeNumber(newCount);
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
