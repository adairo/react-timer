import * as React from 'react';

const Timer = ({ max }: { max: number }) => {
  // State for handling the remaining time
  const [time, setTime] = React.useState(max);
  const [timerState, setTimerState] = React.useState<
    'playing' | 'paused' | 'stopped'
  >('stopped');

  const togglePlay = () => {
    setTimerState((state) => (state === 'playing' ? 'paused' : 'playing'));
  };

  React.useEffect(() => {
    let timer = null;
    switch (timerState) {
      case 'playing':
        timer = setInterval(() => {
          setTime((seconds) => seconds - 1);
        }, 1000);
        break;
      case 'paused':
        clearInterval(timer);
        break;
      default:
        setTime(max);
        clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timerState]);

  console.log(timerState);
  return (
    <React.Fragment>
      <div className="counter-time">{time}</div>
      <button onClick={togglePlay}>
        {timerState === 'playing' ? 'Pause' : 'Play'}
      </button>
      <button onClick={(e) => setTimerState('stopped')}>Reset</button>
    </React.Fragment>
  );
};

export default Timer;
