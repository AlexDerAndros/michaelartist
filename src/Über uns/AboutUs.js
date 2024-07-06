import "./AboutUs.css";
import { useState } from "react";

export default function AboutUs1() {
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
   
    return(
      <>
      <div className='translation'>
      <div className='ge' onClick={pressG}
      style={{backgroundImage: german ? 'none' : 'linear-gradient(to right, rgb(96, 251, 181), #a31cd8)',  borderTop: german ? 'blue 0.3vh solid' : 'none',
    backgroundClip: 'text',
    color: german ? 'blue' : 'transparent'}}>
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
      style={{backgroundImage: english ? 'none' : 'linear-gradient(to right, rgb(96, 251, 181), #a31cd8)',  borderTop: english ? 'blue 0.3vh solid' : 'none',
    webkitBackgroundClip: 'text',
    color: english ? 'blue' : 'transparent'}}>
  
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
      <div className='container'>
        <div className='headAb'>
        { german ? (
       <span>
        Über uns
       </span>
      ): english ? (
        <span>
          About Us
        </span>
      ): (
        <span>
          Error
        </span>
      )}
        </div>
        <div className='imp'>
         <details>
           <summary className="text">  Impressum  </summary>
            <div> 
            <span className='theAb text'> 
             { german ? (
       <span>
      Datenschutzerklärung
       </span>
      ): english ? (
        <span>
        Data protection
        </span>
      ): (
        <span>
          Error
        </span>
      )}</span>
            <br/>
            { german ? (
       <span className="text">
       Die Daten werden dafür verwendet, damit die Nutzer unter einem
        Namen ein Account haben, wodurch sie die Videos schon vor Veröffentlichung 
        sehen auf Instagram und TikTok können, es zugeordnet werden kann welcher 
        Nutzer ein Bild kauft und damit der Chat mit Michael Ntrikos auch wirklich 
       nur unter dem Nutzer und Michael Ntrikos bleibt. 
       </span>
      ): english ? (
        <span className="text">
        The data is used so that the users have an account under one name, so that they can see the videos on Instagram and TikTok before they are
           published, it can be assigned
          which user buys a picture and so that the chat
          with Michael Ntrikos really only remains under the 
           user and Michael Ntrikos. 
        </span>
      ): (
        <span>
          Error
        </span>
      )}
             <br/>
             <br/>
          <span className='theAb  text'>
          { german ? (
       <span>
       Widerrufsrecht 
       </span>
      ): english ? (
        <span>
        Right of withdrawal
        </span>
      ): (
        <span>
          Error
        </span>
      )} </span>
      { german ? (
       <span className="text">
       <br/>
       Bürgerliches Gesetzbuch kurz BGB  § 312g Widerrufsrecht
  <br/>
  Das Widerrufsrecht besteht, soweit die Parteien nichts anderes vereinbart haben, nicht bei folgenden Verträgen:
  <br/>
  1.
  Verträge zur Lieferung von Waren, die nicht vorgefertigt sind und für 
  deren Herstellung eine individuelle Auswahl oder Bestimmung durch den 
  Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse
   des Verbrauchers zugeschnitten sind <br/>
  2.
  Verträge zur Lieferung von Waren, die schnell verderben können oder deren
   Verfallsdatum schnell überschritten würde
   <br/>
  3.
  Verträge zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes
   oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung 
   nach der Lieferung entfernt wurde
  <br/>
  11.
  Verträge, bei denen der Verbraucher den Unternehmer ausdrücklich aufgefordert hat, 
  ihn aufzusuchen, um dringende Reparatur- oder Instandhaltungsarbeiten vorzunehmen; 
  dies gilt nicht hinsichtlich weiterer bei dem Besuch erbrachter Dienstleistungen, 
  die der Verbraucher nicht ausdrücklich verlangt hat,
   oder hinsichtlich solcher bei dem Besuch gelieferter Waren,
    die bei der Instandhaltung oder Reparatur nicht unbedingt als
     Ersatzteile benötigt werden
     <br/>
       </span>
      ): english ? (
        <span className="text">
        <br/>
          
          German Civil Code (BGB) § 312g Right of revocation
  
            Unless the parties have agreed otherwise, the right of revocation does not apply to the following contracts:
            <br/>
            1. contracts for the supply of goods that are not prefabricated and 
            for the production of which an individual choice or determination 
           by the consumer is 
          decisive or which are clearly tailored to the personal 
           needs of the consumer.
            <br/>
           2. contracts for the supply of goods that are likely
            to deteriorate quickly or whose expiration date 
            would be quickly exceeded.
            <br/>
           3. contracts for the supply of sealed goods 
            that are not suitable for return for reasons 
           of health protection or hygiene if their seal has been
           removed after delivery.
           <br/>
              4. contracts where the consumer has expressly requested the trader 
               to visit him in order to carry out urgent repair
               or maintenance work; this does not apply to other 
               services provided during the visit that the consumer has not
              expressly requested, or to those goods delivered during the
               visit that are not necessarily required as spare parts
               for maintenance or repair.
        </span>
      ): (
        <span>
          Error
        </span>
      )} 
      
          
            </div>
          </details>
          <br/>
          <details>
            <summary className="text">
            { german ? (
       <span>
        Verkauf der Bilder
       </span>
      ): english ? (
        <span>
          Selling the pictures 
        </span>
      ): (
        <span>
          Error
        </span>
      )}
            </summary>
            <div>
            { german ? (
       <span className="text">
            Sobald der Nutzer ein Bild ausgewählt und es bezahlt hat, 
            wird er nähere Informationen darüber erhalten und anschließend wird
             es ihm zugesendet. Ab dem Zeitpunkt, wo es angekommen ist, 
             ohne Beschädigungen vom Versand, haften wir nicht mehr für
              die Beschädigung am Bild. Der Nutzer wird das Bild in einem
               Zeitraum von 3-5 Werktagen erhalten.
       </span>
      ): english ? (
        <span className="text">
        Once the user has selected an image and paid for it, they will receive further information about it
         and it will then be sent to them.
        Once it has arrived without any damage from shipping, we are no longer liable for any damage to the image.
        The user will receive the image in a period of 3-5 working days.
        </span>
      ): (
        <span>
          Error
        </span>
      )}
          
  
       
            </div>
          </details>
          <br/>
          <details>
            <summary className="text">
            { german ? (
       <span>
       Kontaktinformationen
       </span>
      ): english ? (
        <span>
      Contact informations
        </span>
      ): (
        <span>
          Error
        </span>
      )}
            </summary>
            <div className="text">
            { german ? (
       <span>
       Die Nutzer der Website können uns über E-Mail beispielsweise kontaktieren unter 
            michaelntrikosartist@gmail.com  oder auch über die bald kommende Chat-Funktion 
            auf der Website, wo man uns direkt kontaktieren kann.
            
       </span>
      ): english ? (
        <span className="text">
        Users of the website can contact us via email,
             for example at michaelntrikosartist@gmail.com,
              or via the upcoming chat function on the website, 
            where you can contact us directly.
        </span>
      ): (
        <span>
          Error
        </span>
      )}
      </div>
          </details>
          <br/>
          <br/>
          { german ? (
       <span className="text">
       Die Website wurde von Alexandros Ntrikos erstellt.
       Sie können mich auf <span className='ig'> Instagram  <img src='./instagram.jpeg' className='igimg2'/> </span>
      <br/> oder auf <a href='https://www.tiktok.com/@alexandros20092'> <span className='tt'>TikTok <img src='./tiktok.jpeg' className='ttimg2'/></span></a>
       kontaktieren.
       </span>
      ): english ? (
        <span className="text">
      The website was created by Alexandros Ntrikos.
      You can contact me on  <a href='https://www.instagram.com/alexandros_ntrikos/'><span className='ig'> Instagram  <img src='./instagram.jpeg' className='igimg2'/></span></a>
      <br/> or on <a href='https://www.tiktok.com/@alexandros20092'> <span className='tt'>TikTok <img src='./tiktok.jpeg' className='ttimg2'/></span></a>.
  
        </span>
      ): (
        <span>
          Error
        </span>
      )}
        </div>
        
         
      </div>
     </> 
    );
  }