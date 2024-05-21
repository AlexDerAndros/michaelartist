import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase1';
import Cookies from 'js-cookie';
import './log.css';

export default function Log1() {
  const [loggedIN, setLoggedIN] = useState(false);

  useEffect(() => {
    if (Cookies.get('loggedIn') === 'true') {
      setLoggedIN(true);
    }
  }, []);

  if (loggedIN) {
    return <LoggedIN setLoggedIN={setLoggedIN} />;
  } else {
    return <Login setLoggedIn={setLoggedIN} />;
  }
}

function LoggedIN({ setLoggedIN }) {
  const logOut = async () => {
    await signOut(auth);
    alert("You are now logged out!");
    Cookies.set('loggedIn', false, { expires: 1 / 48 });
    setLoggedIN(false);
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

function Login({ setLoggedIn }) {
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
