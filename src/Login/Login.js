import './log.css';
import LoginInputName from "./LoginInputName";
import { useState } from "react";
import { getAuth, signOut , GoogleAuthProvider , signInWithPopup,  getAdditionalUserInfo, signInWithRedirect } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Log1() {
    const provider = new GoogleAuthProvider();
  const auth = getAuth();
    const [loggedIN,setLoggedIn] = useState(false);
  
   return (
     <>
      {
    loggedIN ? (<LoggedIN/>): (<Login/>)
      }
     </>
   );
  }
  
  function LoggedIN() {
     return (
      <>
      Hello
      </>
     )
  }
  function Login() {
    const[us,setUs]= useState('');
    const[pa,setPa]= useState('');
    const [click,setClick]= useState(false);
    
    const press = () => {
      setClick(!click);
    }
    const [english, setEnglish] = useState(true);
    const[german, setGerman] = useState(false);
    
    const pressG = () => {
      setGerman(true);
       setEnglish(false);
    }
    const pressE = () => {
      setEnglish(true);
        setGerman(false);
    }
    if (!click) 
    {
      
     
        
        
      return(
        <>
         
      
        <div className='login'>
        <div className='head'>
        { german ? (
           <span>
            Anmeldung
           </span>
          ): english ?  (
            <span>
              Login
            </span>
          ): (
            <span>
              Error
            </span>
          )}
  
      </div>
     
    <LoginInputName german={german} english={english} click={click} pa={pa} setPa={setPa} us={us} setUs={setUs}/>
  
       
        <br/>
        <br/>
        <br/>
        <br/>
         <div className='importantI'>
         { german ? (
           <span>
            Wenn du noch nicht eingeloggt bist
           </span>
          ): english ?  (
            <span>
            If your are not yet logged in
            </span>
          ): (
            <span>
              Error
            </span>
          )}
        
         <span className='sg' onClick={press}> 
         { german ? (
           <span>
            <br/>, regestriere dich bitte!
           </span>
          ): english ?  (
            <span> 
            <br/> please register!
            </span>
          ): (
            <span>
              Error
            </span>
          )} </span>
           </div>
           </div>
        </>
      );
     
  
  
     }
  else { 
    let creusername = 'Create an username...';
    let crepassword = 'Create a password...';
    let reppas = 'Repeat your password...';
    let email = 'Enter an email adress...';
    if (german == true) 
    {
       creusername = 'Erstelle Sie ein Benutzername...';
       crepassword = 'Erstellen Sie ein Passwort...';
       reppas = 'Wiederholen Sie ihr Passwort...';
       email = 'Geben Sie eine E-Mail Adresse an...';
    }
    else {
      creusername = 'Create an username...';
      crepassword = 'Create a password...';
      reppas = 'Repeat your password...';
      email = 'Enter an email adress...';
      
    }
    
    
      return(
        <div> 
         
         
        <div className='login'>
    
        <button onClick={press}>
         <FontAwesomeIcon icon={faArrowRight} size='2x' style={{color:'white',
         transform:'rotate(-180deg)', position:'absolute', cursor:'pointer'
         }} />
         </button>
        
        <div className='signUP'>
         <div className='headR'>
         { german ? (
             <span>
              Regestrierung
             </span>
            ): english ?  (
              <span>
                Register
              </span>
            ): (
              <span>
                Error
              </span>
            )}
         </div>
         <br/>
        <div className='REG'>
         <input style={{fontSize:'120%'}} id='email' className='child'  type='email' placeholder={email} />
         <input id='us1'  className='child' type="text" placeholder={creusername} />
          <input id='pa1'  className='child' type="password" placeholder={crepassword}  />
          <input id='pa1'   className='child' type="password" placeholder={reppas}  />
         </div>
         <br/>
         <br/>
          <button style={{fontSize:'1.5vh'}}>
          
          <p className="AniB" style={{fontSize: '2.5vh'}}>
          { german ? (
             <span>
              Regestrieren
             </span>
            ): english ?  (
              <span>
                Register
              </span>
            ): (
              <span>
                Error
              </span>
            )}
          </p>
          </button>
        </div>
        </div>
        </div>
      );
     
    
      
  
  
    
  }
  }
  