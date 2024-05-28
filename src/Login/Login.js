import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db, storage } from '../config/firebase';
import { adminAlexUS, adminAlexPA, adminMichaUS, adminMichaPA } from '../config/admin';
import Cookies from 'js-cookie';
import { getDoc, setDoc, collection, getDocs, getFirestore, doc, updateDoc } from "firebase/firestore";
import './log.css';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';



export default function Log1() {
  const [loggedIN, setLoggedIN] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  

  useEffect(() => {
    if (Cookies.get('loggedIn') === 'true') {
      setLoggedIN(true);
    }
    if (Cookies.get('isAdmin') === 'true') {
      setIsAdmin(true);
    }
  }, []);

  if (loggedIN) {
    if (isAdmin) {
      return <AdminDashBoard setLoggedIN={setLoggedIN} />;
    }
    return <LoggedIN setLoggedIN={setLoggedIN} />;
  } else {
    return <Login setLoggedIn={setLoggedIN}/>;
  }
}

function LoggedIN({ setLoggedIN }) {
  const logOut = async () => {
    await signOut(auth);
    alert("You are now logged out!");
    Cookies.set('loggedIn', false, { expires: 1 / 48 });
    setLoggedIN(false);
    Cookies.remove('username');
    Cookies.remove('isAdmin');
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <div className='login'>
      <div className='WEL'>
        Welcome {user?.email}!
      </div>
      <br />
      <br />
      <button className='logBtn' onClick={logOut}>
        <p className="AniB" style={{ fontSize: '2.5vh', cursor: "pointer" }}>
          Logout
        </p>
      </button>
    </div>
  );
}

function Login({ setLoggedIn, }) {
  const [registerUS, setRegisterUS] = useState('');
  const [registerPA, setRegisterPA] = useState('');
  const [us, setUs] = useState('');
  const [pa, setPa] = useState('');
  const [click, setClick] = useState(false);
  const [english, setEnglish] = useState(true);
  const [german, setGerman] = useState(false);

  const press = () => {
    setClick(!click);
  };

  const pressG = () => {
    setGerman(true);
    setEnglish(false);
  };

  const pressE = () => {
    setEnglish(true);
    setGerman(false);
  };

  const logBtn = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, us, pa);
      console.log(user);
      alert("Login successfully");
      setLoggedIn(true);
      Cookies.set("loggedIn", true, { expires: 7 });
      Cookies.set("username", us, { expires: 7 });
      if (us == adminAlexUS  && pa == adminAlexPA  || us == adminMichaUS && pa == adminMichaPA) {
        Cookies.set('isAdmin', true, {expires: 7});
      }
      else {
        Cookies.set('isAdmin', false, {expires: 7});

      }
    } catch (error) {
      console.log(error.message);
      alert("Failed to login: " + error.message);
    }
  };

  const register = async (event) => {
    event.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, registerUS, registerPA);
      console.log(user);
      alert("Registered successfully");
      setLoggedIn(true);
      Cookies.set("loggedIn", true, { expires: 7 });
      Cookies.set("username", registerUS, { expires: 7 });
      window.location.reload();
      if (registerUS == adminAlexUS  && registerPA == adminAlexPA  || registerUS == adminMichaUS && registerPA == adminMichaPA) {
        Cookies.set('isAdmin', true, {expires: 7});
      }
      else {
        Cookies.set('isAdmin', false, {expires: 7});
        
      }

   

    } catch (error) {
      console.log(error.message);
      alert("Failed to register: " + error.message);
    }
  };

  let username = 'Username...';
  let password = 'Password...';

  if (german) {
    username = 'Benutzername...';
    password = 'Passwort...';
  }

  return (
    <>
      {!click ? (
        <div className='login'>
          <div className='head'>
            {german ? (
              <span>Anmeldung</span>
            ) : english ? (
              <span>Login</span>
            ) : (
              <span>Error</span>
            )}
          </div>
          <form>
            <input
              id='us'
              type='text'
              placeholder={username}
              value={us}
              onChange={(e) => setUs(e.target.value)}
            />
            <br />
            <input
              id='pa'
              type='password'
              placeholder={password}
              value={pa}
              onChange={(e) => setPa(e.target.value)}
            />
            <br />
            <br />
            <br />
            <button className='logBtn' onClick={logBtn}>
              <p className="AniB" style={{ fontSize: '2.5vh', cursor: "pointer" }}>
                Login
              </p>
            </button>
          </form>
          <br />
          <br />
          <br />
          <br />
          <div className='importantI'>
            {german ? (
              <span>Wenn du noch nicht eingeloggt bist</span>
            ) : english ? (
              <span>If your are not yet logged in</span>
            ) : (
              <span>Error</span>
            )}
            <span className='sg' onClick={press}>
              {german ? (
                <span>
                  <br />, regestriere dich bitte!
                </span>
              ) : english ? (
                <span>
                  <br /> please register!
                </span>
              ) : (
                <span>Error</span>
              )}
            </span>
          </div>
        </div>
      ) : (
        <div>
          <div className='login'>
            <button onClick={press}>
              <FontAwesomeIcon
                icon={faArrowRight}
                size='2x'
                style={{
                  color: 'white',
                  transform: 'rotate(-180deg)',
                  position: 'absolute',
                  cursor: 'pointer',
                }}
              />
            </button>
            <div className='signUP'>
              <div className='headR'>
                {german ? (
                  <span>Regestrierung</span>
                ) : english ? (
                  <span>Register</span>
                ) : (
                  <span>Error</span>
                )}
              </div>
              <br />
              <div className='REG'>
                <input
                  style={{ fontSize: '120%' }}
                  id='email'
                  className='child'
                  type='email'
                  placeholder={german ? 'Geben Sie eine E-Mail Adresse an...' : 'Enter an email address...'}
                  value={registerUS}
                  onChange={(e) => setRegisterUS(e.target.value)}
                />
                <input
                  id='pa1'
                  className='child'
                  type='password'
                  placeholder={german ? 'Erstellen Sie ein Passwort...' : 'Create a password...'}
                  value={registerPA}
                  onChange={(e) => setRegisterPA(e.target.value)}
                />
              </div>
              <br />
              <br />
              <button style={{ fontSize: '1.5vh' }} onClick={register}>
                <p className="AniB" style={{ fontSize: '2.5vh' }}>
                  {german ? (
                    <span>Regestrieren</span>
                  ) : english ? (
                    <span>Register</span>
                  ) : (
                    <span>Error</span>
                  )}
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function AdminDashBoard({setLoggedIN}) {
  const logOut = async () => {
    await signOut(auth);
    alert("You are now logged out!");
    Cookies.set('loggedIn', false, { expires: 1 / 48 });
    setLoggedIN(false);
    Cookies.remove('isAdmin');
    Cookies.remove('username');
  };

  const [user, setUser] = useState({});
  const[clickPhoto, setClickPhoto] = useState(false);
  const[clickVideo, setClickVideo] = useState(false);
  const[clickPost, setClickPost] = useState(false);
  const [click, setClick] = useState(false);
  const press = () => {
    setClick(!click);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const pressPHOTO = () => {
    setClickPhoto(!clickPhoto);
  }
  const pressVIDEO = () => {
    setClickVideo(!clickVideo);
  } 
  const pressPOST = () => {
    setClickPost(!clickPost);
  }
  const NewThings = [
    {title:'New Photo', id: 1, press: pressPHOTO, click: clickPhoto },
    {title:'New Video', id: 2, press: pressVIDEO,  click: clickVideo},
    {title:'New Post', id: 3,  press: pressPOST, click: clickPost}
  ];
  if ( !clickPhoto && !clickVideo && !clickPost) {
  return (
    <div className='login'>
      <div className='WEL' style={{zIndex: click ? '-100' : '1', marginTop: click ? '15%' : '0%', transition: '0.2s ease-in'}}>
        Welcome Admin {user?.email}!
      </div>
      <div className='plus' onClick={press} style={{transform: click ? "rotate(45deg)": "rotate(0deg)"}}> 
       + 
      </div>
      <div className='addThings' style={{height: click ? "auto" : "0vh", width: click ? "auto" : "0vw", fontSize: click ? "3vh": "0vh", zIndex: '-1',  background: click ?  "rgb(43, 42, 42)" : "none"  }}>
         {NewThings.map((item)=> (
         <div onClick={item.press} className='eleT' key={item.index} style={{display: click ? "block": "none"}}> {item.title} </div>
       ))}
     </div>
      <br />
      <br />
      <button className='logBtn' onClick={logOut}>
        <p className="AniB" style={{ fontSize: '2.5vh', cursor: "pointer" }}>
          Logout
        </p>
      </button>
    </div>
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
           <div className='headPO'>
              New Post
           </div>
           <input
                type="text"
                value={inputValuePO}
                onChange={checkPost}
                placeholder='Write a message to your community...'
                className='inPOST1'

            />
            <button onClick={SaveINPOST} className='SavePost' >
            <p className="AniB" style={{ fontSize: '2.5vh', marginTop: '-2.2vh', height:'5.5%' }}>
              Save   
            </p>
            </button>
            <ul>
                {publicItemsPO.map((item, index) => (
                    <li key={index} className='messagePOST'>{item}</li>
                ))}
            </ul>

            <br/>
            <button className='SavePost' >
            <p className="AniB" style={{ fontSize: '2.5vh' }}>
              Publish
            </p>
            </button>
        </div>  

    </div>
  );
}
const PostSiteV = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [publicItemsV, setPublicItemsV] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null); // Add state to store the file
  const videoListRef = ref(storage, 'videos/');

  const PostVideo = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file); // Store the file
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedVideo(reader.result); // Store the base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const SaveVideo = () => {
    if (selectedFile == null) {
      return 1;
    } else {
      const videoRef = ref(storage, `videos/${selectedFile.name + v4()}`);
      uploadBytes(videoRef, selectedFile).then(() => {
        alert('Video Uploaded');
      });
    }
  };

  useEffect(() => {
    listAll(videoListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setPublicItemsV((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  

  return (
    <div className='search' style={{overflowY:'scroll'}}>
      <div>
        <div className='headPO'>
          New Video
        </div>
      </div>
      <div className='ChoosePhoto'>
        <input
          type="file"
          accept="video/*"
          onChange={PostVideo}
          className='inPOST'
        />
        {selectedVideo && (
          <video controls autoPlay className='videoPOST'>
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <br />
        <br />
        <div>
          {publicItemsV.map((url, index) => (
            <div key={index}>
              <video controls autoPlay className='videoSPO'>
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
        <br />
        <button onClick={SaveVideo} className='SavePost'>
          <p className="AniB" style={{ fontSize: '2.5vh' }}>
            Publish
          </p>
        </button>
      </div>
    </div>
  );
};
export const PostSiteP = () => {
  const [publicItemsP, setPublicItemsP] = useState([]);
  const [selectedImageP, setSelectedImageP] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); // Add state to store the file
  const imageListRef = ref(storage, 'images/');

  const PostImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file); // Store the file
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImageP(reader.result); // Store the base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const SaveImage = () => {
    if (selectedFile == null) {
      return 1;
    } else {
      const imageRef = ref(storage, `images/${selectedFile.name + v4()}`);
      uploadBytes(imageRef, selectedFile).then(() => {
        alert('Image Uploaded');
      });
    }
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setPublicItemsP((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className='search' style={{ overflowY: 'scroll' }}>
      <div>
        <div className='headPO'>New Photo</div>
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

        <br />
        <br />
        <div>
          {publicItemsP.map((url) => (
            <div key={url}>
              <img src={url} className='imgSPO' />
            </div>
          ))}
        </div>
        <br />
        <button onClick={SaveImage} className='SavePost'>
          <p className="AniB" style={{ fontSize: '2.5vh' }}>
            Publish
          </p>
        </button>
      </div>
    </div>
  );
};