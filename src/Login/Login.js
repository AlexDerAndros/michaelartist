import './log.css';
import React, { useState } from 'react';
// import LoginInputName from "./LoginInputName";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';
export default function Log1() {
  const [loggedIN, setLoggedIN] = useState(false);
  const [click , setClick] = useState(false);

  const press = () => {
      Cookies.set('loggedIn', 'false');
      setLoggedIN(false);
  };
  
  if (loggedIN == true || Cookies.get('loggedIn') === 'true') {
  return <LoggedIN press ={press} />;
  }
  else {
    return <Login setLoggedIn={setLoggedIN} loggedIN={loggedIN}  />;
  }
}

function LoggedIN({press}) {
 
  let user = Cookies.get('username');
  return (
    <div className='login'>
      <div className='head'>
        Welcome {user}!
      </div>
      <br/>
      <br/>
      <button className='logBtn' onClick={press} >
        <p className="AniB" style={{fontSize:'2.5vh', cursor:"pointer"}}>
          Logout 
        </p>
      </button>
    </div>
  );
}

function Login({setLoggedIn, loggedIN}) {
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
  const logBtn = () => {
    if (us == adminUS && pa == adminPA) {
      setLoggedIn(true);
      alert("You are logged in.");
      Cookies.set('loggedIn', true, { expires: 7 });
    }
    else {
      setLoggedIn(false);
      alert("You are not logged in.");
    }
    Cookies.set('username', us, { expires: 7 }); 
    Cookies.set('password', pa, { expires: 7 }); 

  }
  
 
  let adminUS = "AdminMichaelNtrikos";
  let adminPA = "parga10062007";
  let username = 'Username...';
      let password = 'Password...';
    
      if (german == true) 
      {
         username = 'Benutzername...';
         password = 'Passwort...';
      }
      else 
      {
        username = 'Username...';
        password = 'Password...';
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
        <input id='us'
         type="text" 
         placeholder={username}
         value={us}
         onChange={(e)=> setUs(e.target.value)}
        />
       
        <br/> 
        <input id='pa'
         type="password"
          placeholder={password} 
          value={pa}
          onChange={(e)=> setPa(e.target.value)} /> 
        <br/>
        <br/>
        <br/>
        <button className='logBtn' onClick={logBtn} >
        <p className="AniB" style={{fontSize:'2.5vh', cursor:"pointer"}}>
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
                  placeholder={german ? 'Geben Sie eine E-Mail Adresse an...' : 'Enter an email adress...'}
                />
                <input
                  id='us1'
                  className='child'
                  type="text"
                  placeholder={german ? 'Erstelle Sie ein Benutzername...' : 'Create an username...'}
                />
                <input
                  id='pa1'
                  className='child'
                  type="password"
                  placeholder={german ? 'Erstellen Sie ein Passwort...' : 'Create a password...'}
                />
                <input
                  id='pa1'
                  className='child'
                  type="password"
                  placeholder={german ? 'Wiederholen Sie ihr Passwort...' : 'Repeat your password...'}
                />
              </div>
              <br />
              <br />
              <button style={{ fontSize: '1.5vh' }}>
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
