import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Footer';
function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps([...laps, time]);
  };

  const handleClearLaps = () => {
    setLaps([]);
  };

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = Math.floor((time / 1000) % 60);
    const getSeconds = `0${seconds}`.slice(-2);
    const minutes = Math.floor((time / 60000) % 60);
    const getMinutes = `0${minutes}`.slice(-2);

    return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  return (
    <>
    <div className="App">
      <div className='header'>
        
          <img src="./stop-watch-logo.webp" alt='' className='stlogo' />
          <h1>StopWatch</h1>
      </div>
      <div className={`stopwatch ${isRunning ? 'running' : ''}`}>
        <div className="time-display">{formatTime(time)}</div>
        <div className="controls">
          {!isRunning && time === 0 ? (
            <button onClick={handleStartPause}>
              <i className="fas fa-play"></i> Start
            </button>
          ) : (
            <>
              <button onClick={handleStartPause}>
                <i className={isRunning ? 'fas fa-pause' : 'fas fa-play'}></i> {isRunning ? 'Pause' : 'Resume'}
              </button>
              <button onClick={handleReset}>
                <i className="fas fa-redo"></i> Reset
              </button>
              <button onClick={handleLap}>
                <i className="fas fa-stopwatch"></i> Lap
              </button>
            </>
          )}
        </div>
      </div>
      <div className="laps">
        {laps.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Lap Time</th>
              </tr>
            </thead>
            <tbody>
              {laps.map((lap, index) => (
                <tr key={index}>
                  <td><span className='lapserial'>#{index + 1}</span>  <span className='laptime'>{formatTime(lap)}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className='clrlaps'>
      <button className="clear-laps-button" onClick={handleClearLaps}>
        <i className="fas fa-trash-alt"></i> Clear Laps
      </button>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
