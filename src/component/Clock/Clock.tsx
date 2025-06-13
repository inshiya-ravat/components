import { useEffect, useState } from 'react';
import styles from './Clock.module.css';
const Clock = () => {
    const [timePassed,setTimePassed] = useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setTimePassed((prev)=>prev+1);
        },1000);
    },[])
  return (
    <div className={styles.container}>
      <div className={styles.hour}>
        <p>{Math.floor(timePassed/3600)}</p>
      </div>
      <div className={styles.minutes}>
        <p>{Math.floor((timePassed % 3600)/60)}</p>
      </div>
      <div className={styles.seconds}>
        <p>{timePassed % 60}</p>
      </div>
    </div>
  )
}

export default Clock
