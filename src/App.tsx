import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);

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
      setCounter1(parseInt(localCounter1));
    }

    const localCounter2 = localStorage.getItem('counter2');
    if (localCounter2) {
      setCounter1(parseInt(localCounter2));
    }

    const localCounter3 = localStorage.getItem('counter3');
    if (localCounter3) {
      setCounter1(parseInt(localCounter3));
    }

    const localCounter4 = localStorage.getItem('counter4');
    if (localCounter4) {
      setCounter1(parseInt(localCounter4));
    }

    const localCounter5 = localStorage.getItem('counter5');
    if (localCounter5) {
      setCounter1(parseInt(localCounter5));
    }

    return (() => {
      localStorage.setItem('counter1', counter1.toString());
      localStorage.setItem('counter2', counter2.toString());
      localStorage.setItem('counter3', counter3.toString());
      localStorage.setItem('counter4', counter4.toString());
      localStorage.setItem('counter5', counter5.toString());
    });
  }, [])

  return (
    <div className='windowView'>
      <div className='row'>
        <button className='counterBtn' type='button'><img src='' id='counter1' onClick={() => setCounter1(counter1 + 1)} /></button>
        <p>{counter1}</p>
      </div>
      <div className='row'>
        <button className='counterBtn' type='button'><img src='' id='counter1' onClick={() => setCounter2(counter2 + 1)} /></button>
        <p>{counter1}</p>
      </div>
      <div className='row'>
        <button className='counterBtn' type='button'><img src='' id='counter1' onClick={() => setCounter3(counter3 + 1)} /></button>
        <p>{counter1}</p>
      </div>
      <div className='row'>
        <button className='counterBtn' type='button'><img src='' id='counter1' onClick={() => setCounter4(counter4 + 1)} /></button>
        <p>{counter1}</p>
      </div>
      <div className='row'>
        <button className='counterBtn' type='button'><img src='' id='counter1' onClick={() => setCounter5(counter5 + 1)} /></button>
        <p>{counter1}</p>
      </div>
      <button id='reset' type='button' onClick={handleReset}>إعادة</button>
    </div>
  );
}

export default App
