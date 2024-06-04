import { useEffect, useState} from "react";

export const Point = () => {
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({x: 0, y:0});

    useEffect(() => {
        // Generar posición aleatoria en el eje X y Y
        const locatePoint = () => {
            const randomX = Math.floor(Math.random() * window.innerWidth);
            const randomY = Math.floor(Math.random() * window.innerHeight);
            setPosition({x:randomX, y:randomY});
        }
    }, [enabled])
    
    return (
        <div className="point"
        style={{
            transform: `translate(${position.x}px, ${position.y}px)`
        }}/>
    )
}