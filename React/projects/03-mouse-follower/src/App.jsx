
import { useRef, useState} from "react"
import { FollowMouse } from "./components/FollowMouse.jsx"
import { Point } from "./components/Point.jsx"





function App() {
  const [score, setScore] = useState(0)
  const [enabled, setEnabled] = useState(false)
  const [tiempoRestante, setTiempoRestante] = useState(5) // Tiempo en segundos
  const [displayPoint, setDisplayPoint] = useState('none')
  const [positionPoint, setPositionPoint] = useState({x: 0, y:0});
  const [maxTime, setMaxTime] = useState(5000) // Tiempo en milisegundos

  const mainRef = useRef(null);

  const timeControl = (grabPoint) => {
    const chronometer = setTimeout(() => {
      setDisplayPoint('none');
      setEnabled(false);
    }, maxTime);

    const intervalo = setInterval(() => {
      setTiempoRestante(prevTiempo => {
        if (prevTiempo <=0) {
          clearInterval(intervalo);
          clearTimeout(chronometer);
          console.log(prevTiempo)
          console.log('Se cierra')
          return 0;
        } else {
          return prevTiempo -1;
        }
      });
    }, 1000); // Actualiza el tiempo restante cada segundo
    
    /* const incrementMaxTime = () => {
      setMaxTime(maxTime + 1000);
      clearTimeout(chronometer);
      timeControl(grabPoint);
      grabPoint();
    } */
  }

  


  const locatePoint = () => {
    console.log(mainRef.offsetWidth)
    if (!mainRef) return;

    const maxWidth = mainRef.current.offsetWidth -30; /* -30 porque es el width del point */
    const maxHeight = mainRef.current.offsetHeight -30;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    setPositionPoint({x:Math.min(randomX, maxWidth), y:Math.min(randomY, maxHeight)});
    setDisplayPoint('block');
  } 

  const grabPoint = () => {
    setScore(score+1)
    setMaxTime(prevMaxTime => {
      return prevMaxTime +1000;
    })
    setTiempoRestante(tiempoRestante+1);
    locatePoint();
  }

  const controlGame = () => {
    if (!enabled) {
      setTiempoRestante(5);
      locatePoint();
      setScore(0);
      timeControl();

    } else {
      setDisplayPoint('none');
      setTiempoRestante(0);
    }
    setEnabled(!enabled);
  }

  return (
    <main ref={mainRef}>
      <div>Time: {tiempoRestante}</div>
      <FollowMouse enabled= {enabled}/>
      <Point display={displayPoint} position={positionPoint} setScore={grabPoint}/>
      <button onClick={controlGame}>{enabled ? 'Finaliza' : 'Empieza'} el juego</button>
      <p className="description">Atrapa tantos puntos como puedas</p>
      <h2>Puntaje: {score}</h2>
    </main>
  )
}

export default App
