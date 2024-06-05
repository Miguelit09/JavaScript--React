/* import { useEffect, useState} from "react"; */
import PropTypes from 'prop-types';

export const Point = ( {display, position, setScore} ) => {

    Point.propTypes = {
        display: PropTypes.string,
        position: PropTypes.object,
        setScore: PropTypes.func
    }
/*     const [display, setDisplay] = useState('none')
    const [position, setPosition] = useState({x: 0, y:0});

    useEffect(() => {
        // Generar posición aleatoria en el eje X y Y
        
        const locatePoint = () => {
            console.log(mainRef.offsetWidth)
            if (!mainRef) return;

            const maxWidth = mainRef.current.offsetWidth -30;  
            const maxHeight = mainRef.current.offsetHeight -30;
            console.log(maxWidth)
            console.log(maxHeight)
            const randomX = Math.floor(Math.random() * maxWidth);
            const randomY = Math.floor(Math.random() * maxHeight);
            console.log(randomX)
            console.log(randomY)
            setPosition({x:Math.min(randomX, maxWidth), y:Math.min(randomX, maxHeight)});
            setDisplay('block');
        }
        if (enabled) {
            locatePoint()
        }
    }, [enabled]) */

        
    
    return (
        <div className="point"
        style={{
            display: display,
            left: position.x + 'px',
            top: position.y + 'px'
        }}
        onClick={setScore}/>
    )
}