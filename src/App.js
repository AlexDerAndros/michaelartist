import {useState} from 'react';
import { useReducer, useContext } from 'react';
import './App.css';
import ReactGA from 'react-ga';
import { FaImages } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaPaperPlane } from "react-icons/fa";
import { FaSignInAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';


export default function App() {
  return (
    <main>
    <Header/>
    <Bottom/>
    </main>
  );
  // Aktualisierung einer React App: 1.npm run build 2.firebase deploy oder firebase deploy --only hosting:michael--artist
  // 3.Quellcodeverwaltung unten dann oben commit 4. Aktualisieren
  // Wichtig: immer alles auf der neusten Version und updaten ab und zu
}
function Header() {
  return (
   <div className='header'>
     <Hamburger/>
      <div className='title' > 
      Artist Michael Ntrikos
      </div>
      <div className='foto1'>
        <a href='https://www.tiktok.com/@meineartmichael?_t=8bx04ojY9ME&_r=1'>
          <img className='img1' src='./tiktok.jpeg'/>
        </a>
      </div>
      <div className='foto2'>
        <a href='https://www.instagram.com/michael.n.artist/?igshid=YmMyMTA2M2Y%3D'>
         <img className='img2' src='./instagram.jpeg'/>
        </a>
      </div>
    </div>
  );
}
function Hamburger() {
  const [click,setClick] = useState(false);
  
  const press = () => {
    setClick(!click);
  };
  return (
  
 <div className='ham'>
   <div onClick={press} className='click'>
    <div className='linie1'></div>
    <div className='linie2'></div>
    <div className='linie3'></div>
   </div>
 { click && (
  <div className='content'>
  <div className='textCo'>
  <ul>
    <li>
      <span className='element'>
        Hallo
      </span>
    </li>
  </ul>
  </div>
  </div>
 )}
 </div>
  );
}
const images =['./michaelBackground.png', './TraumfrauBlume.jpeg', './FrauGarage.jpeg', './mannBlitz.jpeg'
, './FrauSchläft.jpeg', './EngelTeufel.jpeg','./Maria.jpeg', './Teufel.jpeg', './Wikinger.jpeg', './BlumenFrau2.jpeg', 
'./Eiffelturm.jpeg', './KettenFrau.jpeg', './GefässelteFrau.jpeg', './KronenFrau.jpeg', './BaumFrau.jpeg', './Läspisch.jpeg',
'./WasserFrau.jpeg', './LampenFrau.jpeg', './GeEngel.jpeg', './SchiffE.jpeg', './BuntF.jpeg', './HolzSchiff.jpeg',
'./Eli.jpeg', './EngFrau.jpeg', './FrauS.jpeg' , './BetenF.jpeg', './BootFrau.jpeg', './ColleFRau.jpeg', './Athen.jpeg', './BluSchlafFrau.jpeg'
, './Indianer.jpeg', './Cello.jpeg', './Avatar.jpeg', './BRFrau.jpeg', './HaarMerer.jpeg', './SpiegelF.jpeg', './SchlafMF.jpeg',
'./LächelF.jpeg', './SchWeiF.jpeg', './Tanzen.jpeg', './Pferd.jpeg', './CringeF.jpeg', './TanzendeF.jpeg', './AlkoholF.jpeg',
 './Löwe.jpeg', './BulleF.jpeg', './FrauSch.jpeg', './BuntF2.jpeg', './KriegerGF.jpeg','./FischF.jpeg', './SchmetterlingF.jpeg', './StockF.jpeg',
'./FarbenF.jpeg', './Hochzeit.jpeg', './BootE.jpeg', './HausdGe.jpeg'];
function ImageList (){
  const [currentIndex, setCurrentIndex]= useState(0);
  const nextImage = () => {
    setCurrentIndex((prevIndex)=>
    prevIndex === images.length - 1 ? 0 :prevIndex + 1);
  }
  return (
   <div className='imageList'>
    <img className='imgI' src= {images[currentIndex]}/>
    <button className='btn1' onClick={nextImage}> Next Picture </button>
   </div>
  );
}
function Home() {
  ReactGA.initialize('YOUR_TRACKING_ID');
  ReactGA.pageview(window.location.pathname);
  

 return (
<div className='Mitte'>
 <div className='info1'> 
  Welcome to my website!
</div>
<div className='info'>
 Thanks to you I became the artist I am today 
 and to reach the next level
I made this website for you.
</div>
<ImageList/>

  </div>
 );
}
function Bottom() {
return (
<Router>
 <div className='unten'>
   <div>
   <Link to="/">
    <div style={{ color: 'white'}} className='po'>
      <FaHome size={40} />
    </div>
    </Link>
   </div>
   <div>
   <Link to= "/Search">
   <div style={{ color: 'white'  }} className='po2'>
      <FaSearch size={38} />
    </div>
    </Link>
   </div>
   <Link to="/bildgalerie" className='po3'>
   <div style={{ color: 'white'}}>
      <FaImages size={40} />
    </div>
  </Link>
  <Link to= "/chat">
    <div style={{ color: 'white'}} className='po1'>
      <FaComment size={35} />
    </div>
  </Link>
  <Link to= "/login">
    <div style={{ color: 'white'}} className='po4'>
      <FaSignInAlt size={35} />
    </div>
  </Link>
  <Link to='/Videogalerie'>
   <div className='shPi'>
    <FontAwesomeIcon icon={faVideo} style={{color:'white'}} size='2x' />
   </div>
  </Link>
  <Link to='/PictureShop'>
   <div className='shPi'>
    <FontAwesomeIcon icon={faShoppingCart} style={{color:'white'}} size='2x' />
    </div>
  </Link>
    <Routes>
    <Route path="/" element={<Home/>}/>
   <Route path="/bildgalerie" element={<Bildgalerie/>}/>
   <Route path="/Search" element={<Search/>}/>
   <Route path="/chat" element={<Chat/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path='/PictureShop' element={<PictureShop/>}/>
   <Route path='/Videogalerie' element={<Videogalerie/>}/>
  </Routes>
 </div>
 </Router>
);
}


//Chat


 
    function TaskList({
      tasks,
      onChangeTask,
      onDeleteTask  }) {
      const [task, setTask] = useState([]);
      const [click,setClick] = useState(false);
      const [text, setText] = useState('');
      const [isEditing, setIsEditing] = useState(false);
      let taskContent;
      const press = () => {
        setClick(!click);
      };
      return (
      
        <ul className='list'>
        {tasks.map(task => (
          <li key={task.id}   onClick={press} className='message'>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask}/>
            </li>
          
        ))}
        
       </ul>
    
      );
    }

    function Task({ task, onChange, onDelete }) {
      const [click,setClick] = useState(false);
      
      const press = () => {
        setClick(!click);
      };
      let taskContent;
      
      const [isEditing, setIsEditing] = useState(false);
      if (isEditing) {
        taskContent = (
        <>
         <Save task={task} setIsEditing={setIsEditing} text={text} onChange={onChange}/>
          </>

        );
      } else {
        taskContent = (
        <>
          
          <Edit setIsEditing={setIsEditing} task={task}/>
        </>
        );
      }
   return (
   <>
  <Delete task={task} onDelete={onDelete} taskContent={taskContent}/>
    
   </> 
   ); 
   
  }
 // <Delete task={task} onDelete={oneDlete} taskContent={taskContent}/>
const Edit = ({task, setIsEditing}) => {
  return (
    <>
    {task.text}
     <br/>
   <button onClick={() => setIsEditing(true)} className='btnE'>
    Edit
     </button>
     </>       
  );
}
const Delete = ({task, onDelete, taskContent}) => {
  return (
    <label>
   {taskContent}
    <br/>
        <button onClick={() => onDelete(task.id)} className='btnD'>
        Delete
      </button>
    </label>    
  );
}
const Save = ({task, setIsEditing, text, onChange}) => {
  return (
    <>
          <input
          value={task.text}
          className='inputCH1'
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value
            });
          }}
        />
           <button onClick={() => setIsEditing(false)} className='btnS'>
          Save
        </button>
          </>

  );
}
const Message = ({task}) => {
  return (
    <div>
   {task.text}
    </div>
  );
}
           
             
//Main
function Chat() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );
  
  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }
 
  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <div className='chat'>
     
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        
      />
      <AddTask
        onAddTask={handleAddTask}
      />
    </div>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 0;
const initialTasks = [];


function AddTask({ onAddTask }) {
  const[inputValue, setInputValue] = useState('');
  const [text, setText] = useState('');
  let summ = inputValue + text ;
 const CheckInput = (e) => {
   setInputValue(e.target.value);
 }
 const TextCheck = (e) => {
  setText(e.target.value);
 }
const handleCombinedChange = (g) => {
      this.CheckInput(g);
      this.TextCheck(g);
    }
  return (
    <div className='chatIn'>
      <input
        placeholder="Write a message..."
        value={text}
        onChange={e => setText(e.target.value)}
        className='inputCH'
        type='text'
      />
      <button onClick={() => {
        setText('');
        onAddTask(text);
      }}>
       <FaPaperPlane size={25} className='send2'/>
      </button>
    </div>
  );
}
//Bildgalerie
function Bildgalerie() {
  return (
      <div className='bildgalerie'>
          <div className='grid'>
            <img src={images[0]} className='imgG'/>
            <InfoB/>
            <img src={images[1]} className='imgG'/>
            <InfoB/>
            <img src={images[2]} className='imgG'/>
            <InfoB/>
            <img src={images[3]} className='imgG'/>
            <InfoB/>
            <img src={images[4]} className='imgG'/>
            <InfoB/>
            <img src={images[5]} className='imgG'/>
            <InfoB/>
            <img src={images[6]} className='imgG'/>
            <InfoB/>
            <img src={images[7]} className='imgG'/>
            <InfoB/>
            <img src={images[8]} className='imgG'/>
            <InfoB/>
            <img src={images[9]} className='imgG'/>
            <InfoB/>
            <img src={images[10]} className='imgG'/>
            <InfoB/>
            <img src={images[11]} className='imgG'/>
            <InfoB/>
            <img src={images[12]} className='imgG'/>
            <InfoB/>
            <img src={images[13]} className='imgG'/>
            <InfoB/>
            <img src={images[14]} className='imgG'/>
            <InfoB/>
            <img src={images[15]} className='imgG'/>
            <InfoB/>
            <img src={images[16]} className='imgG'/>
            <InfoB/>
            <img src={images[17]} className='imgG'/>
            <InfoB/>
            <img src={images[18]} className='imgG'/>
            <InfoB/>
            <img src={images[19]} className='imgG'/>
            <InfoB/>
            <img src={images[20]} className='imgG'/>
            <InfoB/>
            <img src={images[21]} className='imgG'/>
            <InfoB/>
            <img src={images[22]} className='imgG'/>
            <InfoB/>
            <img src={images[23]} className='imgG'/>
            <InfoB/>
            <img src={images[24]} className='imgG'/>
            <InfoB/>
            <img src={images[25]} className='imgG'/>
            <InfoB/>
            <img src={images[26]} className='imgG'/>
            <InfoB/>
            <img src={images[27]} className='imgG'/>
            <InfoB/>
            <img src={images[28]} className='imgG'/>
            <InfoB/>
            <img src={images[29]} className='imgG'/>
            <InfoB/>
            <img src={images[30]} className='imgG'/>
            <InfoB/>
            <img src={images[31]} className='imgG'/> 
             <InfoB/>
            <img src={images[32]} className='imgG'/>
            <InfoB/>
            <img src={images[33]} className='imgG'/>
            <InfoB/>
            <img src={images[34]} className='imgG'/>
            <InfoB/>
            <img src={images[35]} className='imgG'/>
            <InfoB/>
            <img src={images[36]} className='imgG'/>
            <InfoB/>
            <img src={images[37]} className='imgG'/>
            <InfoB/>
            <img src={images[38]} className='imgG'/>
            <InfoB/>
            <img src={images[39]} className='imgG'/>
            <InfoB/>
            <img src={images[40]} className='imgG'/>
            <InfoB/>
            <img src={images[41]} className='imgG'/>
            <InfoB/>
            <img src={images[42]} className='imgG'/>
            <InfoB/>
            <img src={images[43]} className='imgG'/>
            <InfoB/>
            <img src={images[44]} className='imgG'/>
            <InfoB/>
            <img src={images[45]} className='imgG'/>
            <InfoB/>
            <img src={images[46]} className='imgG'/>
            <InfoB/>
            <img src={images[47]} className='imgG'/>
            <InfoB/>
            <img src={images[48]} className='imgG'/>
            <InfoB/>
            <img src={images[49]} className='imgG'/>
            <InfoB/>
            <img src={images[50]} className='imgG'/>
            <InfoB/>
            <img src={images[51]} className='imgG'/>
            <InfoB/>
            <img src={images[52]} className='imgG'/>
            <InfoB/>
            <img src={images[53]} className='imgG'/>
            <InfoB/>
            <img src={images[54]} className='imgG'/>
            <InfoB/>
            <img src={images[55]} className='imgG'/>
            <InfoB/>
          </div>
      </div>
  ) 
}
function InfoB() {
  return ( 
    <div className='icons1'>
      <div className='like1'>
        <Likes/>
      </div>
      
    </div>
  );
}

function Comments() {
  const [click, setClick] = useState(false);
  const [com, setCom] = useState('');
  const [comList, setComList] = useState([]);
  let nextId = 0;

  const press = () => {
    setClick(!click);
  };

  return (
    <div className='comments'>
      <FaComment className='ani' onClick={press} size={45} style={{color:'white'}}/>

      {click && (
        <div className='commentOpen'>
          <input
            type='text'
            value={com}
            onChange={(e) => setCom(e.target.value)}
            placeholder='Write a comment'
            className='input1'
          />
          <button
            onClick={() => {
              setComList([...comList, { id: nextId++, com: com }]);
              setCom('');
            }}
          >
           <FaPaperPlane size={30} className='send1'/>
          </button>
          <ul>
            {comList.map(co => (
              <li key={co.id}>
                <div className='newCo'>{co.com}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Likes() {
  const [like,setLike] = useState('white');
  const [likeNumber, setLikeNumber] = useState(0);
  const handleClick = () => {
    if (like === 'red') {
      setLike('white');
      setLikeNumber((prevScore) => prevScore - 1);
    }
    else {
      setLike('red');
      setLikeNumber((prevScore) => prevScore + 1)
    }
    firebase.database().ref('public-counter').set(like);
  }
   return (
     <div className='likes'>
     <button  onClick={handleClick}>
        <FaHeart className='ani' size={45} style= {{ color: like}} />
     </button>
       <div className='likeNumber'>
        {likeNumber}
       </div>
      </div> 
   );
}

//Search
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}



function ProductRow({ product }) {
  const name = product.name;
 

  return (
    <tr>
      <td>{name}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
   
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>
            Themes on the website
          </th>
        </tr>
      </thead>
      {rows}
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} className='input' />
    </form>
  );
}
//<label>
 //<input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />{' '}Only show products in stock</label>
const PRODUCTS = [
  {category: "Main", name: "Home", component:'<Home/>'},
  {category: "Main", name: "Picture gallery", component:'<Bildgalerie/>'},
  {category: "Main",  name: "Chat", component:'<Chat/>' },
  {category:'Main', name: 'Login', component:'<Login/>'},
  {category:'Main', name: 'Signup', component:'<Signup/>', link:' '},
  {category:'Main', name:'Video gallery', component:'<Videogalerie/>', link: '/Videogalerie'},
  {category:'Main', name:'Picture shop', component:'<PictureShop/>', link:'/PictureShop'},
  {category:'Main', name:'About Us', component:'<AboutUs/>', link:'/AboutUs'},  
];

 function Search() {
  return (
    <div className='search'>
      <FilterableProductTable products={PRODUCTS}/>
    </div>
  );
}


//Login und Sigup

function Login() {

  const [username, setUsername]= useState('');
const [password, setPassword]= useState('');
 const handleUsernameChange = (e) => {
   setUsername(e.target.value);
 };
 const handlePasswortChange = (e) => {
   setPassword(e.target.value);
 };
 const handleLogin = () => {
   if (username === 'admin') {
     alert("Login successful");
   }
   else {
     alert("Login failed");
   }
 };
 const [click,setClick]= useState(false);
 const press = () => {
    setClick(!click);
 }
  return (
   <div className='login'>
    <div className='head'>
      Login
    </div>
      <input id='us' type="text" placeholder="Username..." value={username} onChange={handleUsernameChange} />
      <br/>
      <input id='pa' type="password" placeholder="Password..." value={password} onChange={handlePasswortChange} />
      <br/>
      <br/>
      <br/>
      <button className='logBtn' onClick={handleLogin}>
      <p className="AniB">
        Login
      </p>
      </button>

 <br/>
 <br/>
    <div className='importantI'>
    <br/>
      Are not you already login then
        <span className='sg' onClick={press}> sign up .</span>
    </div>
     {click && (
      <>
      <br/>
        <Signup/>
      </>
     )}
    </div>
   
  );

}

function Signup() {
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');
  return (
    <div className='signUP'>
     Signup
    </div>
  );

}

//Videogalerie
function Likes1() {
  const [like,setLike] = useState('white');
  const [likeNumber, setLikeNumber] = useState(0);
  const handleClick = () => {
    if (like === 'red') {
      setLike('white');
      setLikeNumber((prevScore) => prevScore - 1);
    }
    else {
      setLike('red');
      setLikeNumber((prevScore) => prevScore + 1)
    }
  }
   return (
     <div className='likes'>
     <button  onClick={handleClick}>
        <FaHeart className='ani1' size={45} style= {{ color: like}} />
     </button>
       <div className='likeNumber1'>
        {likeNumber}
       </div>
      </div> 
   );
}
const Videogalerie = () => {

  return (
    <div className='videogalerie'>
      <video  controls className='video'>
      <source src="/C4EF135C-1DD4-469C-81D3-448FBB715860.mp4" type="video/mp4"/>
     </video>
     <Likes1/>
     <video controls className='video'>
      <source src="/A0F18F97-7A34-4312-9BFD-0B3B363503A1.mp4" type="video/mp4"/>
     </video>
     <Likes1/>
     <video  controls className='video'>
      <source src='/64E90D9B-1865-4A24-9EB7-9C398D11FC50.mp4' type='video/mp4'/>
     </video>
     <Likes1/>
     <video  controls className='video'>
      <source src='/31C18F11-3C66-4BC9-9B48-C02A3127BD89.mp4' type='video/mp4'/>
     </video>
     <Likes1/>
     <video controls className='video'>
      <source src='/3494B8E0-9DBB-4BCF-9D3B-120BC9676661.mp4' type='video/mp4'/>
     </video>
     <Likes1/>
    </div>
  );
}

//Picture shop

const PictureShop = () => {
  return (
    <div className='pictureShop'>
      <div className='head'>
        Picture shop
      </div>
      <div className='filter'>
       Filter
        <input type='checkbox'/>
      </div>
      <div className='nonePic'>
       Currently no images are available.
      </div>
     
    </div>
  );
} 



//About Us 
const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <div className='headAU'>
        About Us
      </div>
    </div>
  );
}