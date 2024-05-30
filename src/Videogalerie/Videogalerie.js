import "./Videogalerie.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase';

export default function Videogalerie1() {
  const [publicItemsV, setPublicItemsV] = useState([]);
  const videoListRef = ref(storage, 'videos/');
  useEffect(() => {
    listAll(videoListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setPublicItemsV((prev) => [...prev, url]);
        })
      })
    }) ;
  }, []);
  const videos = [ './C30BCC52-6700-4FCF-9B90-167169F37065.mp4',  ...publicItemsV, "./export_1709221524705.MP4" 
  ,"./copy_3045E7F6-195A-4031-BFDD-AEB4B49D547C.MP4",
  './copy_AA8F9BA2-F28C-4E56-BC28-D177B0ACE41D.MP4'
  , "./8ba2ba26c765447dbaeb8a156f1dd5a0.MP4"
  ,'./export_1702824220526.MP4', './export_1701962505711.MP4'
  , './copy_1C945C47-402D-4F34-A314-C0AEC8006700.MP4','./copy_27D8C9B2-34C6-4518-8784-29510BAA2C93.MP4',
  './copy_85E11D5B-17E8-4CA2-AFB7-9369D46BFEC0.mp4',
  './copy_44300C70-C36A-42C4-995D-114F26DFEC54.mp4',
    './C4EF135C-1DD4-469C-81D3-448FBB715860.mp4','./A0F18F97-7A34-4312-9BFD-0B3B363503A1.mp4',
    './64E90D9B-1865-4A24-9EB7-9C398D11FC50.mp4','./31C18F11-3C66-4BC9-9B48-C02A3127BD89.mp4',
    './3494B8E0-9DBB-4BCF-9D3B-120BC9676661.mp4','./FFFEDECD-A80B-4AF7-B3AC-9E3CDBFB2E69.mp4',
   './85210F06-83A1-4F7C-85C7-0C2475B1FE93.mp4','./B4B3E89B-E02F-4735-97EC-D467C10D7874.mp4',
  './4F2D5055-EED0-498C-BDCD-FD2F4DC7D910.mp4', 
  './copy_B0D61099-C60A-4D60-9B07-08C4248CD82B.mp4','./B385F5F1-CA88-490F-9CA3-61E6C5B166EC.mp4',
  './A02876CC-9293-48F9-9B32-127EDD12F151.mp4','./export_1683919611553.MP4',
  './41999F3E-67B9-4AD4-BCF4-90C304F84E04.mp4', "./D9EFDC13-AA25-4747-AA3C-587C5C6461A9.mp4",
  './C62DBA36-81A8-4664-8E29-9FCF91248950.mp4', './2E7ED2C4-EB5C-469A-9AEA-07824BD0194C.mp4',
  './521B77C0-DD4C-417E-A842-B9DF6DF343D0.mp4','./3DE96816-A4FF-466B-94BB-2BE1F8604E5B.mp4',
  './8C8364AC-72DD-46D1-9254-1DBD2668A3AA.mp4','./E5DAE013-1890-41CA-9DFF-556A276B05CD.MP4',
  './5AF6D7E0-C02F-43DB-9744-A8D818A1E451.MP4', './5AF6D7E0-C02F-43DB-9744-A8D818A1E451.MP4',
  './4D0DE805-75F3-45C0-9EE5-EAE40E846C8E.MP4','./export_1664214779019.MP4',
  './4D7DC781-E5F2-40DF-91D5-0F3E6D565275.MP4','./7D4ED2BD-1040-4417-B945-A722F0785752.MP4',
  './10D5946A-3EA9-4332-872E-03C075986C9C.MP4', './C37D618A-F14A-486D-AB9D-6B1B3679208A.MP4',
  ];
 
 
 const [currentIndex, setCurrentIndex]= useState(0);
 const nextImage = () => {
  setCurrentIndex((currentIndex + 1) % videos.length);
}
function prevImage() {
  setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? videos.length - 1 : prevIndex - 1
  );
}
  return (
    <div className='videogalerie'>
        <div className='headAb' >
           Video gallery
        </div>
       <video controls autoPlay className='video' key={videos[currentIndex]}>
        <source src={videos[currentIndex]} type="video/mp4"/>
        Your browser does not support the video tag.
       </video>
       <div className='imgBtnV'>
    <button  onClick={prevImage} className='btn1'> 
      <FontAwesomeIcon icon={faArrowRight} size='1x' style={{color:'white', position:'absolute',transform:'rotate(-180deg)', margin: '0% 5%'}} />
    </button>
    <button className='btn1' onClick={nextImage}>
    <FontAwesomeIcon icon={faArrowRight} style={{color:  'white', position:'absolute', margin:'0% -20%'  }}/>
  </button>
    </div>
    </div>
  );
}