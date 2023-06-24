import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {SimpleButton} from "./SimpleButton";

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <LikeButton/>
        <br/>
        <SimpleButton/>
      </header>
    </div>
  );
}

function LikeButton(){
  const [count,setCount] = useState(999);
  const handleClick = () => {
    setCount(count+1);
  };
  return <span className='likeButton' onClick={handleClick}>♥ {count}</span>
}

export default App;
