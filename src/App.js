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