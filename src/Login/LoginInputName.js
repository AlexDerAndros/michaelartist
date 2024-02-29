import "./log.css";
export default function LoginInputName(german,english, click, pa,
   us ,setPa, userInput, PasswordInput, logBtn) {
 
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
        <form>
        <input id='us'
         type="text" 
         placeholder={username}
         value={us}
         onChange={userInput}
        />
        <br/> 
        <input id='pa'
         type="password"
          placeholder={password} 
          value={pa}
          onChange={PasswordInput} /> 
        <br/>
        <br/>
        <br/>
        <button className='logBtn' onClick={logBtn} >
        <p className="AniB" style={{fontSize:'2.5vh', cursor:"pointer"}}>
          Login  
        </p>
        </button>
        </form>
       </> 
      );
  
  }