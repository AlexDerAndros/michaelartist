import "./pictureShop.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function PictureShopp() {
 
    const[click0,setClick0] = useState(false);
    const press0 = () => {
      setClick0(!click0);
    }
    const[click1,setClick1] = useState(false);
    const press1 = () => {
      setClick1(!click1);
    }
    const[click2,setClick2] = useState(false);
    const press2 = () => {
      setClick2(!click2);
    }
    const[click3,setClick3] = useState(false);
    const press3 = () => {
      setClick3(!click3);
    }
    const[click4,setClick4] = useState(false);
    const press4 = () => {
      setClick4(!click4);
    }
    const[click5,setClick5] = useState(false);
    const press5 = () => {
      setClick5(!click5);
    }
    const[click6,setClick6] = useState(false);
    const press6 = () => {
      setClick6(!click6);
    }
    const[click7,setClick7] = useState(false);
    const press7 = () => {
      setClick7(!click7);
    }
    const[click8,setClick8] = useState(false);
    const press8 = () => {
      setClick8(!click8);
    }
    const[click9,setClick9] = useState(false);
    const press9 = () => {
      setClick9(!click9);
    }
    const[click10,setClick10] = useState(false);
    const press10 = () => {
      setClick10(!click10);
    }
    const[click11,setClick11] = useState(false);
    const press11 = () => {
      setClick11(!click11);
    }
    const[click12,setClick12] = useState(false);
    const press12 = () => {
      setClick12(!click12);
    }
    const[click13,setClick13] = useState(false);
    const press13 = () => {
      setClick13(!click13);
    }
    const[click14,setClick14] = useState(false);
    const press14 = () => {
      setClick14(!click14);
    }
    const[click15,setClick15] = useState(false);
    const press15 = () => {
      setClick15(!click15);
    }
    const[click16,setClick16] = useState(false);
    const press16 = () => {
      setClick16(!click16);
    }
    const[click17,setClick17] = useState(false);
    const press17 = () => {
      setClick17(!click17);
    }
    const[click18,setClick18] = useState(false);
    const press18 = () => {
      setClick18(!click18);
    }
    const[click19,setClick19] = useState(false);
    const press19  = () => {
      setClick19(!click19);
    }
    const[click20,setClick20] = useState(false);
    const press20 = () => {
      setClick20(!click20);
    }
    const[click21,setClick21] = useState(false);
    const press21 = () => {
      setClick21(!click21);
    }
    const[click22,setClick22] = useState(false);
    const press22 = () => {
      setClick22(!click22);
    }
    const[click23,setClick23] = useState(false);
    const press23 = () => {
      setClick23(!click23);
    }
    const[click24,setClick24] = useState(false);
    const press24 = () => {
      setClick24(!click24);
    }
    const[click25,setClick25] = useState(false);
    const press25 = () => {
      setClick25(!click25);
    }
    const[click26,setClick26] = useState(false);
    const press26 = () => {
      setClick26(!click26);
    }
    const[click27,setClick27] = useState(false);
    const press27 = () => {
      setClick27(!click27);
    }
    const[click28,setClick28] = useState(false);
    const press28 = () => {
      setClick28(!click28);
    }
    const[click29,setClick29] = useState(false);
    const press29 = () => {
      setClick29(!click29);
    }
    const[click30,setClick30] = useState(false);
    const press30 = () => {
      setClick30(!click30);
    }
    const[click31,setClick31] = useState(false);
    const press31 = () => {
      setClick31(!click31);
    }
    const[click32,setClick32] = useState(false);
    const press32 = () => {
      setClick32(!click32);
    }
    const[click33,setClick33] = useState(false);
    const press33 = () => {
      setClick33(!click33);
    }
    const[click34,setClick34] = useState(false);
    const press34 = () => {
      setClick34(!click34);
    }
    const[click35,setClick35] = useState(false);
    const press35 = () => {
      setClick35(!click35);
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
   
    const [format, setFormat] = useState(false);
    const[fil,setFil] = useState(false);
  
    const [priceFilters, setPriceFilters] = useState(Array(10).fill(false));
    const toggleFilter = (index) => {
      const newFilters = [...priceFilters];
      newFilters[index] = !newFilters[index];
      setPriceFilters(newFilters);
    };
  
    const clearFilters = () => {
      setPriceFilters(Array(10).fill(false)); 
    };
    
    
   
    const [ShopImages,setShopImages] = useState([
      {id:1, price:700, src:'./FrauB2.jpeg', format:'50cmx70cm',paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press0, classPreis: "pri", classGR: "shopGRR", classEle:"elePic", click:click0, img:"imgSh1"},
      {id:2, price:1200,  src:'./mannBlitz2.jpeg', format:'70cmx100cm', paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press:press1, classPreis: "pri",classGR:"shopGRR", classEle:"elePic", click:click1, img:"imgSh1"},
      {id:3, price:800, src:'./KettenFrau2.jpeg', format:'50cmx70cm', paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press2, classPreis: "pri", classGR: "shopGRR", classEle:"elePic",click: click2, img:"imgSh1"},
    {id:4, price:700, src:'./FrauSilber.jpeg', format:'50cmx70cm', paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press3, classPreis: "pri", classGR: "shopGRR", classEle:"elePic", click: click3, img:"imgSh1"},
    {id:5 ,price:350, src:'./FBJZ.jpeg', format:'40cmx50cm', paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press4, classPreis: "pri", classGR: "shopGRR", classEle:"elePic", click: click4, img:"imgSh1"},
    {id:6, price:english ? "VB" : german ? "unbezahlbar": "Error", src:'./Sänger.jpeg', format:'60cmx30cm', paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press5, classPreis: "pri", classGR: "shopGRR", classEle:"elePic", click: click5, img:"imgSh1"},
    {id:7, price:900, src:'./ColleFRau2.jpeg', format:'50cmx70cm', paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press6, classPreis: "pri", classGR: "shopGR2", classEle:"elePic", click: click6, img:"imgSh1"},
    {price:650, src:'./EngFrau.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press7, classPreis: "pri", classGR: "shopGR2", classEle:"elePic", click: click7, img:"imgSh1"},
    {price:450, src:'./BlumenFrau21.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press8, classPreis: "pri", classGR: "shopGR2", classEle:"elePic" , click: click8, img:"imgSh1"},
    {price:450, src:'./KüssFrau.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press9, classPreis: "pri", classGR: "shopGR3", classEle:"elePic", click: click9, img:"imgSh1"},
    {price:650, src:'./EngMann.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press10, classPreis: "pri", classGR: "shopGR3", classEle:"elePic", click: click10, img:"imgSh1"},
    {price:350, src:'./EngFrau2.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press11, classPreis: "pri", classGR: "shopGR3", classEle:"elePic", click: click11, img:"imgSh1"},
    {price:150, src:'./Brüste.jpeg', format:'25cmx30cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press12, classPreis: "pri", classGR: "shopGR4", classEle:"elePic", click: click12, img:"imgSh1"},
    {price:900, src:'./AlkoholF2.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press13, classPreis: "pri", classGR: "shopGR4", classEle:"elePic", click: click13, img:"imgSh1"},
    {price:750, src:'./Avatar2.jpeg', format:'40cmx60cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press14, classPreis: "pri", classGR: "shopGR4", classEle:"elePic", click: click14, img:"imgSh1"},
    {price:700, src:'./Cello2.jpeg', format:'50cmx60cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press15, classPreis: "pri", classGR: "shopGR5", classEle:"elePic",click: click15, img:"imgSh1"},
    {price:650, src:'./Pferd2.jpeg', format:'40cmx50cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press16, classPreis: "pri", classGR: "shopGR5", classEle:"elePic",click: click16, img:"imgSh1"},
    {price:450, src:'./Läspisch2.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press17, classPreis: "pri", classGR: "shopGR5", classEle:"elePic", click: click17, img:"imgSh1"},
    {price:350, src:'./Tanzen2.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press18, classPreis: "pri", classGR: "shopGR6", classEle:"elePic", click: click18, img:"imgSh1"},
    {price:700, src:'./Maria2.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press19, classPreis: "pri", classGR: "shopGR6", classEle:"elePic", click: click19, img:"imgSh1"},
    {price:850, src:'./Teufel2.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error",press20, classPreis: "pri", classGR: "shopGR6", classEle:"elePic", click: click20, img:"imgSh1"},
    {price:650, src:'./MickeyMouse.jpeg', format:'50cmx70cm', paintedT: english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press21, classPreis: "pri", classGR: "shopGR7", classEle:"elePic", img:"imgSh1"},
    {price:950, src:'./Athen.jpeg', format:'120cmx60cm', paintedT:english ? 'acryl colors and it is sealed.': german ? "mit Acryfarben und es ist versigelt": "Error", press: press22, classPreis: "pri", classGR: "shopGR7", classEle:"elePic", click: click21, img:"imgSh1"},
    {price:500, src:'./Indianer.jpeg', format:'40cmx60cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press23, classPreis: "pri", classGR: "shopGR7", classEle:"elePic", click: click22, img:"imgSh1"},
    {price:150, src:'./GelbeFrau.jpeg', format:'25cmx30cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press24, classPreis: "pri", classGR: "shopGR8", classEle:"elePic", click23, img:"imgSh1"},
    {price:400, src:'./BootSonne.jpeg', format:'25cmx30cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press25, classPreis: "pri", classGR: "shopGR8", classEle:"elePic", click: click24, img:"imgSh1"},
    {price:300, src:'./Lecken.jpeg', format:'30cmx40cm',  paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press26, classPreis: "pri", classGR: "shopGR8", classEle:"elePic",click: click25, img:"imgSh1"},
    {price:700, src:'./FrauMeer.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press27, classPreis: "pri", classGR: "shopGR9", classEle:"elePic", click:click26, img:"imgSh1"},
    {price:800, src:'./Eiffelturm.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press28, classPreis: "pri", classGR: "shopGR9", classEle:"elePic", click:click27, img:"imgSh1"},
    {price:600, src:'./EngelTeufel.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press29, classPreis: "pri", classGR: "shopGR9", classEle:"elePic", click: click28, img:"imgSh1"},
    {price:650, src:'./BulleF.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press30, classPreis: "pri", classGR: "shopGR10", classEle:"elePic", click: click29, img:"imgSh1"},
    {price:400, src:'./BluSchlafFrau.jpeg', format:'40cmx60cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press31, classPreis: "pri", classGR: "shopGR10", classEle:"elePic", click: click30, img:"imgSh1"},
    {price:750, src:'./Löwe.jpeg', format:'50cmx70cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press32, classPreis: "pri", classGR: "shopGR10", classEle:"elePic", click: click31, img:"imgSh1"},
    {price:650, src:'./FrauSchläft.jpeg', format:'60cmx30cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press33, classPreis: "pri", classGR: "shopGR10", classEle:"elePic", click: click33, img:"imgSh1"},
    {price:450, src:'./FrauS.jpeg', format:'60cmx30cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press34, classPreis: "pri", classGR: "shopGR10", classEle:"elePic", click: click34, img:"imgSh1"},
    {price:600, src:'./FrauSch.jpeg', format:'60cmx30cm', paintedT:english ? 'acryl colors,glowing colors and it is sealed.': german ? "mit Acryfarben, Leutfarben und es ist versigelt": "Error", press: press35, classPreis: "pri", classGR: "shopGR10", classEle:"elePic", click: click35, img:"imgSh1"},
    
    
    ]);
    const[valuePrices,setValuePrices] = useState(null);
    let value = valuePrices + "€";
    const [filteredSearchItems, setFilteredSearchItems] = useState([...ShopImages]);
    const handleFilter = (filterTerm) => {
      const filteredItems = ShopImages.filter(item =>
        (item.term && item.term.toLowerCase().includes(filterTerm.toLowerCase())) ||
        (item.price && item.price.toString().includes(filterTerm))
      );
      setFilteredSearchItems(filteredItems);
    };
    if (!click0 && !click1 && !click2 && !click3 && !click4 && !click5 && 
      !click6 && !click7 && !click8 && !click9 && !click10 && !click11 &&
       !click12 && !click13 && !click14 && !click15 && !click16 
       && !click17&& !click18&& !click19 && !click20 && !click21 && !click22 && !click23 &&
         !click24 && !click25 && !click26 && 
      !click27 && !click28 && !click29 && !click30 && !click31 && !click32
      && !click33 && !click34 && !click35) 
      {
     return (
     <>
    
      <div className='pictureShop'>
      <div className='head'>Picture shop</div>
       <br/>
  <div className='format' onClick={() => { setFormat(!format); }}>
    FORMAT: {format ? (
      <span>
        {german ? (
          <span><br/>untereinander</span>
        ) : english ? (
          <span>one below the other</span>
        ) : (
          <span>Error</span>
        )}
      </span>
    ) : (
      <FontAwesomeIcon icon={faGripVertical} />
    )}
  </div>
  <br/>
    {format ? (
     <>
        {/* <div className='fil' onClick={()=> setFil(!fil)}> */}
             {/* <div className='filter'>
               FILTER
            </div>
          
             <div > 
               <div className='PicHam' ></div> 
               <div className='PicHam1' ></div> 
               <div className='PicHam2' ></div> 
            </div> 
            </div>  */}
            {/* { fil && (
             <div className='resHam'>
               <div onClick={() =>  setFil(!fil) } className='aw'>
                 X
               </div> */}
               <ul className='filterEle'>
               <li className='filterOn'>
                <span className='infoFil'> 
                { german ? (
               <span>
               Gewünschter Preis:
               </span>
              ): english ?  (
                <span>
                  Desired Price:
                </span>
              ): (
                <span>
                  Error
                </span>
              )} 
                </span> 
                <input 
                 type='number' 
                 className='inPri' 
                 placeholder='Write a price'
                 value={valuePrices}
                 onChange={(e)=> handleFilter(e.target.value)}/> 
                 <span className='euroinfo'>€</span>
                 {/* <datalist id='Prices'>
                   <option value="2007"></option>
                 </datalist> */}
               </li>
               </ul>
            {filteredSearchItems.map((item) => (
       <div className='gridCon'>
         <div key={item.id} className="shopGRR">
           <div className={item.classEle} onClick={item.press}>
             <img src={item.src} className={item.img}/>
             <div className={item.classPreis}>
             { german ? (
          <span>
           Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {item.price} €
             </div>
           </div>
         </div>
         </div>        
       ))}
     
     </>
    ): (
      <>
       <div className='shopGR'>
        <div className='elePic' onClick={press0}>
         <img className='imgSh' src={ShopImages[0].src} />
         <div className='pri'>
         { german ? (
          <span>
          Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[0].price}€
         </div>
        </div>
        <div className='elePic' onClick={press1}>
         <img className='imgSh' src={ShopImages[1].src}/>
         <div className='pri'>
         { german ? (
          <span>
            Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[1].price}€
         </div>
        </div>
        <div className='elePic' onClick={press2}>
         <img className='imgSh' src={ShopImages[2].src}/>
         <div className='pri'>
         { german ? (
          <span>
           Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[2].price}€
         </div>
        </div>
        </div> 
        <div className='shopGR1'> 
         <div className='elePic' onClick={press3}>
          <img className='imgSh' src={ShopImages[3].src} />
           <div className='pri'>
           { german ? (
          <span>
            Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[3].price}€
          </div>
         </div> 
        <div className='elePic' onClick={press4}>
         <img className='imgSh' src={ShopImages[4].src}/>
         <div className='pri'>
         { german ? (
          <span>
           Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )}{ShopImages[4].price}€
         </div>
        </div> 
        <div className='elePic' onClick={press5}>
         <img className='imgSh' src={ShopImages[5].src}/>
         <div className='pri'>
         { german ? (
          <span>
           Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[5].price}
         </div>
        </div>
   
        </div> 
        <div className='shopGR2'>
          <div className='elePic' onClick={press6}>
           <img className='imgSh' src={ShopImages[6].src}/>
             <div className='pri'>
             { german ? (
          <span>
           Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[6].price}€
             </div>
          </div>
        <div className='elePic' onClick={press7}>
           <img className='imgSh' src={ShopImages[7].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[7].price}€
          </div>
         </div>
        <div className='elePic' onClick={press8}>
          <img className='imgSh' src={ShopImages[8].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[8].price}€
          </div>
         </div>
         </div> 
        <div className='shopGR3'>
        <div className='elePic' onClick={press9}>
          <img className='imgSh' src={ShopImages[9].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[9].price}€
          </div>
         </div>
         <div className='elePic' onClick={press10}>
          <img className='imgSh' src={ShopImages[10].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[10].price}€
          </div>
         </div>
         <div className='elePic' onClick={press11}>
          <img className='imgSh' src={ShopImages[11].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[11].price}€
          </div>
         </div>
         </div>
         <div className="shopGR4">
        <div className='elePic' onClick={press12}>
          <img className='imgSh' src={ShopImages[12].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[12].price}€
          </div>
         </div>
         <div className='elePic' onClick={press13}>
          <img className='imgSh' src={ShopImages[13].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[13].price}€
          </div>
         </div>
         <div className='elePic' onClick={press14}>
          <img className='imgSh' src={ShopImages[14].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[14].price}€
          </div>
         </div>
        </div>
       
       <div className='shopGR5'>
       <div className='elePic' onClick={press15}>
          <img className='imgSh' src={ShopImages[15].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[15].price}€
          </div>
         </div>
         <div className='elePic' onClick={press16}>
          <img className='imgSh' src={ShopImages[16].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[16].price}€
          </div>
         </div>
         <div className='elePic' onClick={press17}>
          <img className='imgSh' src={ShopImages[17].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis:
          </span>
         ): english ?  (
           <span>
             Price:
           </span>
         ): (
           <span>
             Error
           </span>
         )} {ShopImages[17].price}€
          </div>
         </div>
       </div>
       <div className='shopGR6'>
       <div className='elePic' onClick={press18}>
          <img className='imgSh' src={ShopImages[18].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[18].price}€
          </div>
         </div>
         <div className='elePic' onClick={press19}>
          <img className='imgSh' src={ShopImages[19].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[19].price}€
          </div>
         </div>
         <div className='elePic' onClick={press20}>
          <img className='imgSh' src={ShopImages[20].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
            Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[20].price}€
          </div>
         </div>
   
     </div>
   
     <div className='shopGR7'>
       <div className='elePic' onClick={press21}>
          <img className='imgSh' src={ShopImages[21].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[21].price}€
          </div>
         </div>
         <div className='elePic' onClick={press22}>
          <img className='imgSh' src={ShopImages[22].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[22].price}€
          </div>
         </div>
         <div className='elePic' onClick={press23}>
          <img className='imgSh' src={ShopImages[23].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[23].price}€
          </div>
         </div>
     </div>
     <div className='shopGR8'>
     <div className='elePic' onClick={press24}>
          <img className='imgSh' src={ShopImages[24].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[24].price}€
          </div>
         </div>
         <div className='elePic' onClick={press25}>
          <img className='imgSh' src={ShopImages[25].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[25].price}€
          </div>
         </div>
         <div className='elePic' onClick={press26}>
          <img className='imgSh' src={ShopImages[26].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[26].price}€
          </div>
         </div>
     </div>
     <div className='shopGR9'>
     <div className='elePic' onClick={press27}>
          <img className='imgSh' src={ShopImages[27].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}:{ShopImages[27].price}€
          </div>
         </div>
         <div className='elePic' onClick={press28}>
          <img className='imgSh' src={ShopImages[28].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}:  {ShopImages[28].price}€
          </div>
         </div>
         <div className='elePic' onClick={press29}>
          <img className='imgSh' src={ShopImages[29].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[29].price}€
          </div>
         </div>
     </div>
     <div className='shopGR10'>
     <div className='elePic' onClick={press30}>
          <img className='imgSh' src={ShopImages[30].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[30].price}€
          </div>
         </div>
         <div className='elePic' onClick={press31}>
          <img className='imgSh' src={ShopImages[31].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[31].price}€
          </div>
         </div>
         <div className='elePic' onClick={press32}>
          <img className='imgSh' src={ShopImages[32].src}/>
          <div className='pri'>
          { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[32].price}€
          </div>
         </div>
     </div>
     <div className='shopGR11'>
      <div className='elePic' onClick={press33}>
           <img className='imgSh' src={ShopImages[33].src}/>
           <div className='pri'>
           { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[33].price}€
           </div>
          </div>
          <div className='elePic' onClick={press34}>
           <img className='imgSh' src={ShopImages[34].src}/>
           <div className='pri'>
           { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[34].price}€
           </div>
          </div>
          <div className='elePic' onClick={press35}>
           <img className='imgSh' src={ShopImages[35].src}/>
           <div className='pri'>
           { german ? (
          <span>
           Preis
          </span>
         ): english ?  (
           <span>
             Price
           </span>
         ): (
           <span>
             Error
           </span>
         )}: {ShopImages[35].price}€
           </div>
          </div>
          </div>
  
      </>
    )}
  
      </div>
    </>
     );
   }
   else if (click0) {
    const ShopImage0 = () => {
      return (
      <>
     
        <img className='imgSHI' src={ShopImages[0].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis:
         </span>
        ): english ?  (
          <span>
            Price:
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[0].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[0].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[0].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
        
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press0}>
     <BackSymbol/>
     </button>
        <ShopImage0/>
       
      </div>
    )
  }
   else if (click1) {
    const ShopImage1 = () => {
      return (
      <>
     
        <img className='imgSHI' src={ShopImages[1].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis:
         </span>
        ): english ?  (
          <span>
            Price:
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[1].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[1].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[1].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
        
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press1}>
     <BackSymbol/>
     </button>
        <ShopImage1/>
       
      </div>
    )
  }
  else if (click2) {
    const ShopImage2 = () => {
      return (
      <>
    
      
    
       <img className='imgSHI' src={ShopImages[2].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ? (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[2].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[2].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ? (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[2].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ? (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press2}>
     <BackSymbol/>
     </button>
        <ShopImage2/>
       
      </div>
    )
  }
  else if (click3) {
    const ShopImage3 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[3].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ? (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[3].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[3].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ? (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[3].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ? (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press3}>
     <BackSymbol/>
     </button>
        <ShopImage3/>
       
      </div>
    )
  }
  else if (click4) {
    const ShopImage4 = () => {
      return (
      <>
       <img className='imgSHI' src={ShopImages[4].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ? (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[4].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[4].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ? (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[4].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ? (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press4}>
     <BackSymbol/>
     </button>
        <ShopImage4/>
       
      </div>
    )
  }
  else if (click5) {
    const ShopImage5 = () => {
      return (
     <>
        <img className='imgSHI' src={ShopImages[5].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ? (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[5].price} 
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[5].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ? (
          <span>
         Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[5].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
           Kaufen
         </span>
        ): english ? (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press5}>
        <BackSymbol/>    
     </button>
        <ShopImage5/>
       
      </div>
    )
  }
  else if (click6) {
    const ShopImage6 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[6].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ? (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[6].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[6].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ? (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[6].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span> Kaufen
         </span>
        ): english ? (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press6}>
        <BackSymbol/>    
     </button>
        <ShopImage6/>
       
      </div>
    )
  }
  else if (click7) {
    const ShopImage7 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[7].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[7].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[7].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[7].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press7}>
        <BackSymbol/>    
     </button>
        <ShopImage7/>
       
      </div>
    )
  }
  else if (click8) {
    const ShopImage8 = () => {
      return (
      <>
       
        <img className='imgSHI' src={ShopImages[8].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
           Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[8].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[8].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[8].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press8}>
        <BackSymbol/>    
     </button>
        <ShopImage8/>
       
      </div>
    )
  }
  else if (click9) {
    const ShopImage9 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[9].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[9].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[9].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[9].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press9}>
        <BackSymbol/>    
     </button>
        <ShopImage9/>
       
      </div>
    )
  }
  else if (click10) {
    const ShopImage10 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[10].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
          Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[10].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[10].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[10].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press10}>
        <BackSymbol/>    
     </button>
        <ShopImage10/>
       
      </div>
    )
  }
  else if (click11) {
    const ShopImage11 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[11].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[11].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[11].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[11].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press11}>
        <BackSymbol/>    
     </button>
        <ShopImage11/>
       
      </div>
    )
  }
  else if (click12) {
    const ShopImage12 = () => {
      return (
      <>
      
        <img className='imgSHI' src={ShopImages[12].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[12].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[12].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[12].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press12}>
        <BackSymbol/>    
     </button>
        <ShopImage12/>
       
      </div>
    )
  }
  else if (click13) {
    const ShopImage13 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[13].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[13].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[13].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[13].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press13}>
        <BackSymbol/>    
     </button>
        <ShopImage13/>
       
      </div>
    )
  }
  else if (click14) {
    const ShopImage14 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[14].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[14].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[14].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[14].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press14}>
        <BackSymbol/>    
     </button>
        <ShopImage14/>
       
      </div>
    )
  }
  else if (click15) {
    const ShopImage15 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[15].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[15].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[15].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[15].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press15}>
        <BackSymbol/>    
     </button>
        <ShopImage15/>
       
      </div>
    )
  }
  else if (click16) {
    const ShopImage16 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[16].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[16].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[16].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[16].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press16}>
        <BackSymbol/>    
     </button>
        <ShopImage16/>
       
      </div>
    )
  }
  else if (click17) {
    const ShopImage17 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[17].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[17].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[17].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
           Gemalt mit 
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[17].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press17}>
        <BackSymbol/>    
     </button>
        <ShopImage17/>
       
      </div>
    )
  }
  else if (click18) {
    
  const ShopImage18 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[18].src}/>
    <br/>
    <br/>
    <div className='pri2'>
    { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[18].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[18].format}
    </div>
    <br/>
    <div className='pri2'>
    { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[18].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
    { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
    </button>
  </>
  );
  };
  
    return(
      <div className='pictureShop'>
       <button onClick={press18}>
        <BackSymbol/>    
     </button>
        <ShopImage18/>
       
      </div>
    )
  }
  else if (click19) {
    const ShopImage19 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[19].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[19].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[19].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[19].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    
    return(
      <div className='pictureShop'>
       <button onClick={press19}>
        <BackSymbol/>    
     </button>
        <ShopImage19/>
       
      </div>
    )
  }
  else if (click20) {
    const ShopImage20 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[20].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[20].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[20].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[20].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press20}>
        <BackSymbol/>    
     </button>
        <ShopImage20/>
       
      </div>
    )
  }
  else if (click21) {
    const ShopImage21 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[21].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[21].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[21].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[21].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press21}>
        <BackSymbol/>    
     </button>
        <ShopImage21/>
       
      </div>
    )
  }
  else if (click22) {
    
  const ShopImage22 = () => {
  return (
  <>
    <img className='imgSHI' src={ShopImages[22].src}/>
    <br/>
    <br/>
    <div className='pri2'>
    { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[22].price} €
    </div>
    <br/>
    <div className='pri2'>
      Format:  {ShopImages[22].format}
    </div>
    <br/>
    <div className='pri2'>
    { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[22].paintedT}
    </div>
    <br/>
    <button className='btnShop'>
    { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
    </button>
  </>
  );
  };
    return(
      <div className='pictureShop'>
       <button onClick={press22}>
        <BackSymbol/>    
     </button>
        <ShopImage22/>
       
      </div>
    )
  }
  else if (click23) {
    const ShopImage23 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[23].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[23].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[23].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[23].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
           Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press23}>
        <BackSymbol/>    
     </button>
        <ShopImage23/>
       
      </div>
    )
  }
  else if (click24) {
    const ShopImage24 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[24].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[24].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[24].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[24].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
          Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
   
    
    return(
      <div className='pictureShop'>
       <button onClick={press24}>
        <BackSymbol/>    
     </button>
        <ShopImage24/>
       
      </div>
    )
  }
  else if (click25) {
    const ShopImage25 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[25].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[25].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[25].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[25].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press25}>
        <BackSymbol/>    
     </button>
        <ShopImage25/>
       
      </div>
    )
  }
  else if (click27) {
    const ShopImage27 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[27].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[27].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[27].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[27].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press27}>
        <BackSymbol/>    
     </button>
        <ShopImage27/>
       
      </div>
    )
  }
  else if (click26) {
    const ShopImage26 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[26].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[26].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[26].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[26].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press26}>
        <BackSymbol/>    
     </button>
        <ShopImage26/>
       
      </div>
    )
  }
  else if (click29) {
    const ShopImage29 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[29].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[29].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[29].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[29].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press29}>
        <BackSymbol/>    
     </button>
        <ShopImage29/>
       
      </div>
    )
  }
  else if (click28) {
    const ShopImage28 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[28].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[28].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[28].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[28].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press28}>
        <BackSymbol/>    
     </button>
        <ShopImage28/>
       
      </div>
    )
  }
  else if (click30) {
    const ShopImage30 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[30].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[30].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[30].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[30].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press30}>
        <BackSymbol/>    
     </button>
        <ShopImage30/>
       
      </div>
    )
  }
  else if (click31) {
    const ShopImage31 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[31].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[31].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[31].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[31].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
           Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press31}>
        <BackSymbol/>    
     </button>
        <ShopImage31/>
       
      </div>
    )
  }
  else if (click32) {
    const ShopImage32 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[32].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis
         </span>
        ): english ?  (
          <span>
            Price
          </span>
        ): (
          <span>
            Error
          </span>
        )}: {ShopImages[32].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[32].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[32].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press32}>
        <BackSymbol/>    
     </button>
        <ShopImage32/>
       
      </div>
    )
  }
  else if (click33) {
    const ShopImage33 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[33].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis:
         </span>
        ): english ?  (
          <span>
            Price:
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[33].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[33].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[33].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
        
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press33}>
     <BackSymbol/>
     </button>
        <ShopImage33/>
       
      </div>
    )
  }
  else if (click34) {
    const ShopImage34 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[34].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis:
         </span>
        ): english ?  (
          <span>
            Price:
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[34].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[34].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[34].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
        
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press34}>
     <BackSymbol/>
     </button>
        <ShopImage34/>
       
      </div>
    )
  }
  else if (click35) {
    const ShopImage35 = () => {
      return (
      <>
        <img className='imgSHI' src={ShopImages[35].src}/>
        <br/>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Preis:
         </span>
        ): english ?  (
          <span>
            Price:
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[35].price} €
        </div>
        <br/>
        <div className='pri2'>
          Format:  {ShopImages[35].format}
        </div>
        <br/>
        <div className='pri2'>
        { german ? (
         <span>
          Gemalt mit
         </span>
        ): english ?  (
          <span>
            Painted with
          </span>
        ): (
          <span>
            Error
          </span>
        )} {ShopImages[35].paintedT}
        </div>
        <br/>
        <button className='btnShop'>
        { german ? (
         <span>
          Kaufen
         </span>
        ): english ?  (
          <span>
            Buy
          </span>
        ): (
          <span>
            Error
          </span>
        )}
        </button>
        
      </>
      );
    };
    return(
      <div className='pictureShop'>
       <button onClick={press35}>
     <BackSymbol/>
     </button>
        <ShopImage35/>
       
      </div>
    )
  }
  };
    const BackSymbol = () => {
    return (
      <FontAwesomeIcon icon={faArrowRight} size='2x' style={{color:'white', transform:'rotate(180deg)', cursor:'pointer', top:'5%', position:'absolute'}} />
    );
  }
    
  