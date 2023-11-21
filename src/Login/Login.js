//Login und Sigup
import './Login.css';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import fire from './firebase';
// import { Component } from 'react';
// export default class Log extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       user: null
  //     }
  //   }
  
  //   componentDidMount() {
  //     this.authListener();
  //   }
  //   authListener(){
  //     fire.auth().onAuthStateChanged((user) => {
  //       if(user) {
  //         this.setState({user})
  //       }sss
  //       else {
  //         this.setState({user: null})
  //       }
  //     })
  //   }
  
  // render() {
  //   if (this.state.user) {
  //     return <LoggedIN/>
  //   }
  //   else {
  //     return <Login/>
  //        }
  // }
   
  
    
  // }
  export default function Log() {
    return (
    <Login/>
    );
  } 
   function LoggedIN() {
   
   }
   function Login() {
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
         <div className='translation'>
         <div className='ge' onClick={pressG}
         style={{color: german ? 'blue' : 'white',  borderBottom: german ? 'blue 0.3vh solid' : 'none'}}>
           { german ? (
            <span>
             Deutsch
            </span>
           ): english ? (
             <span>
               German
             </span>
           ): (
             <span>
               Error
             </span>
           )}
         </div>
         <div className='en' onClick={pressE}
          style={{color: english ? 'blue' : 'white', borderBottom: english ? 'blue 0.3vh solid' : 'none'}}>
         { german ? (
            <span>
             Englisch
            </span>
           ): english ?  (
             <span>
               English
             </span>
           ): (
             <span>
               Error
             </span>
           )}
         </div>
        </div>
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
       <form>
         <input id='us' type="text" placeholder={username}/>
         <br/>
         <input id='pa' type="password" placeholder={password}  />
         <br/>
         <br/>
         <br/>
         <button className='logBtn' type='submit' >
         <p className="AniB" style={{fontSize:'2.5vh'}}>
         { german ? (
            <span>
             Anmelden
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
         </p>
         </button>
         </form>
     
        
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
       <> 
          <div className='translation'>
         <div className='ge' onClick={pressG}
         style={{color: german ? 'blue' : 'white',  borderBottom: german ? 'blue 0.3vh solid' : 'none'}}>
           { german ? (
            <span>
             Deutsch
            </span>
           ): english ? (
             <span>
               German
             </span>
           ): (
             <span>
               Error
             </span>
           )}
         </div>
         <div className='en' onClick={pressE}
          style={{color: english ? 'blue' : 'white', borderBottom: english ? 'blue 0.3vh solid' : 'none'}}>
         { german ? (
            <span>
             Englisch
            </span>
           ): english ?  (
             <span>
               English
             </span>
           ): (
             <span>
               Error
             </span>
           )}
         </div>
        </div>
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
       </>
     );
   }
   }