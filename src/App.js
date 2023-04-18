import {useState} from 'react';
import './App.css';

export default function App() {
  return (
    <main>
    <div className='home'>
    <Home/>
    </div>
    <div className='ham'>
      <Hamburger/>
    </div>
    </main>
  );
  // Aktualisierung einer React App: 1.npm run build 2.firebase deploy
  // 3.Quellcodeverwaltung unten dann oben commit 4. Aktualisieren
  // Wichtig: immer alles auf der neusten Version und updaten ab und zu
}
function Home() {
  return (
  <header>
    Home
  </header>
  );
}
function Hamburger() {
  return (
    <div>
      Hamburger Menu
    </div>
  );
}