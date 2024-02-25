import "./log.css";
export default function LoginInputName(german,english, click, pa, us ,setPa, setUs) {
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
      const logBtn = () => {
        
      }
      return (
       <> 
        <form>
        <input id='us'
         type="text" 
         placeholder={username}
         value={us}
         onChange={(e)=> { setUs(e.target.value);}}/>
        <br/>
        <input id='pa'
         type="password"
          placeholder={password} 
          value={pa}
          onChange={(e)=>{setPa(e.target.value);}} />
        <br/>
        <br/>
        <br/>
        <button className='logBtn' onClick={logBtn} >
        <p className="AniB" style={{fontSize:'2.5vh'}}>
          Login  
        </p>
        </button>
        </form>
       </> 
      );
  
  }
}