import { useEffect, useState } from 'react';
import './App.css';

import abdul from './assets/Abdulrahman.jpeg';
import bigB from './assets/Big Bundle.jpeg';
import smallB from './assets/Bundle.jpeg';
import calendar from './assets/Calendar.jpeg';
import child from './assets/Child.jpeg';
import cup from './assets/Cup.jpeg';
import postIt from './assets/Post-it.jpeg'
import tray from './assets/Tray.jpeg';
import university from './assets/University.jpeg';

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);
  const [counter6, setCounter6] = useState(0);
  const [counter7, setCounter7] = useState(0);
  const [counter8, setCounter8] = useState(0);
  const [counter9, setCounter9] = useState(0);

  const buttonImgs = [
    abdul,
    bigB,
    smallB,
    calendar,
    child,
    cup,
    postIt,
    tray,
    university
  ]

  // const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault();

  // }

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.reload();
    localStorage.clear();
  };

  useEffect(() => {
    console.log('Grabbing local counter')
    const localCounter1 = localStorage.getItem('counter1');
    if (localCounter1) {
      console.log('here')
      setCounter1(parseInt(localCounter1));
    }
    const localCounter2 = localStorage.getItem('counter2');
    if (localCounter2) {
      setCounter2(parseInt(localCounter2));
    }
    const localCounter3 = localStorage.getItem('counter3');
    if (localCounter3) {
      setCounter3(parseInt(localCounter3));
    }
    const localCounter4 = localStorage.getItem('counter4');
    if (localCounter4) {
      setCounter4(parseInt(localCounter4));
    }
    const localCounter5 = localStorage.getItem('counter5');
    if (localCounter5) {
      setCounter5(parseInt(localCounter5));
    }
    const localCounter6 = localStorage.getItem('counter6');
    if (localCounter6) {
      setCounter6(parseInt(localCounter6));
    }
    const localCounter7 = localStorage.getItem('counter7');
    if (localCounter7) {
      setCounter7(parseInt(localCounter7));
    }
    const localCounter8 = localStorage.getItem('counter8');
    if (localCounter8) {
      setCounter8(parseInt(localCounter8));
    }
    const localCounter9 = localStorage.getItem('counter9');
    if (localCounter9) {
      setCounter9(parseInt(localCounter9));
    }

    // return (() => {
    //   console.log('Setting local counters')
    //   localStorage.setItem('counter1', counter1.toString());
    //   localStorage.setItem('counter2', counter2.toString());
    //   localStorage.setItem('counter3', counter3.toString());
    //   localStorage.setItem('counter4', counter4.toString());
    //   localStorage.setItem('counter5', counter5.toString());
    // });
  }, [])

  useEffect(() => {
    console.log('Setting local counters')
    if (counter1 != 0) localStorage.setItem('counter1', counter1.toString());
    if (counter2 != 0) localStorage.setItem('counter2', counter2.toString());
    if (counter3 != 0) localStorage.setItem('counter3', counter3.toString());
    if (counter4 != 0) localStorage.setItem('counter4', counter4.toString());
    if (counter5 != 0) localStorage.setItem('counter5', counter5.toString());
    if (counter6 != 0) localStorage.setItem('counter6', counter6.toString());
    if (counter7 != 0) localStorage.setItem('counter7', counter7.toString());
    if (counter8 != 0) localStorage.setItem('counter8', counter8.toString());
    if (counter9 != 0) localStorage.setItem('counter9', counter9.toString());
  }, [counter1, counter2, counter3, counter4, counter5, counter6, counter7, counter8, counter9])

  return (
    <div className='windowView'>
      <div className='col'>
        <div className='row'>
          <button className='counterBtn col' type='button'><img className='imgBtn' src={buttonImgs[0]} id='counter1' onClick={() => setCounter1(counter1 + 1)} /></button>
          {counter1}
          <button className='minusBtn' onClick={() => setCounter1(counter1 - 1)}>-</button>
        </div>
        <div className='row'>
          <button className='counterBtn' type='button'><img className='imgBtn' src={buttonImgs[1]} id='counter2' onClick={() => setCounter2(counter2 + 1)} /></button>
          {counter2}
          <button className='minusBtn' onClick={() => setCounter2(counter2 - 1)}>-</button>
        </div>
        <div className='row'>
          <button className='counterBtn' type='button'><img className='imgBtn' src={buttonImgs[2]} id='counter3' onClick={() => setCounter3(counter3 + 1)} /></button>
          {counter3}
          <button className='minusBtn' onClick={() => setCounter3(counter3 - 1)}>-</button>
        </div>
        <div className='row'>
          <button className='counterBtn' type='button'><img className='imgBtn' src={buttonImgs[3]} id='counter4' onClick={() => setCounter4(counter4 + 1)} /></button>
          {counter4}
          <button className='minusBtn' onClick={() => setCounter4(counter4 - 1)}>-</button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <button className='counterBtn' type='button'><img className='imgBtn' src={buttonImgs[4]} id='counter5' onClick={() => setCounter5(counter5 + 1)} /></button>
          {counter5}
          <button className='minusBtn' onClick={() => setCounter5(counter5 - 1)}>-</button>
        </div>
        <div className='row'>
          <button className='counterBtn' type='button'><img className='imgBtn' src={buttonImgs[5]} id='counter6' onClick={() => setCounter6(counter6 + 1)} /></button>
          {counter6}
          <button className='minusBtn' onClick={() => setCounter6(counter6 - 1)}>-</button>
        </div>
        <div className='row'>
          <button className='counterBtn' type='button'><img className='imgBtn' src={buttonImgs[6]} id='counter7' onClick={() => setCounter7(counter7 + 1)} /></button>
          {counter7}
          <button className='minusBtn' onClick={() => setCounter7(counter7 - 1)}>-</button>
        </div>
        <div className='row'>
          <button className='counterBtn' type='button'><img className='imgBtn' src={buttonImgs[7]} id='counter8' onClick={() => setCounter8(counter8 + 1)} /></button>
          {counter8}
          <button className='minusBtn' onClick={() => setCounter8(counter8 - 1)}>-</button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <button className='counterBtn' type='button'><img className='imgBtn' src={buttonImgs[8]} id='counter9' onClick={() => setCounter9(counter9 + 1)} /></button>
          {counter9}
          <button className='minusBtn' onClick={() => setCounter9(counter9 - 1)}>-</button>
        </div>
      </div>
      
      <button id='reset' className='resetBtn' type='button' onClick={handleReset}>إعادة</button>
    </div>
  );
}

export default App
