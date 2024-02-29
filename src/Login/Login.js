import './log.css';
import React, { useState } from 'react';
import LoginInputName from "./LoginInputName";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function Log1() {
  const [loggedIN, setLoggedIN] = useState(false);
  
  return (
    <>
      {loggedIN ? (<LoggedIN />) : (<Login setLoggedIn={setLoggedIN} />)}
    </>
  );
}

function LoggedIN() {
  return (
    <>
      Hello
    </>
  );
}

function Login({ setLoggedIn }) {
  const [us, setUs] = useState('');
  const [pa, setPa] = useState('');
  const [click, setClick] = useState(false);
  const [english, setEnglish] = useState(true);
  const [german, setGerman] = useState(false);
 
  const userInput = (e) => {
    setUs(e.target.value);
  }
  const PasswordInput = (e) => {
    setPa(e.target.value);

  }
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

  const handleLogin = () => {
    // Implement login logic here
    setLoggedIn(true); // Set logged in state to true after successful login
  };
  const logBtn = () => {
    if (us == adminUS && pa == adminPA) {
      setLoggedIn(true);
      alert("You are now logged in.");
    }
    else {
      setLoggedIn(false);
      alert("You are not logged in.");
    }
  }
  let adminUS = "AdminMichaelNtrikos";
  let adminPA = "parga10062007";

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
          <LoginInputName
            german={german}
            english={english}
            click={click}
            pa={pa}
            setPa={setPa}
            us={us}
            setUs={setUs}
            userInput={userInput}
            PasswordInput={PasswordInput}
            logBtn= {logBtn}
          />
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
