import { useEffect, useState } from "react"
import PropTypes from 'prop-types';



export const FollowMouse = ({ enabled }) => {

  FollowMouse.propTypes = {
    enabled: PropTypes.bool.isRequired
  }

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [transition, setTransition] = useState(0.3)

  /* EJECUCION DE EFECTOS
  [] --> Solo se ejecuta una vez cuando se monta el componente
  [enabled] --> Se ejecuta cuando cambia enabled y cuando se monta el componente
  undefined --> Se ejecuta cada vez que se renderiza el componente 
  */


  // pointer move
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      setTransition(0)
      handleMove(event)
      window.addEventListener('pointermove', handleMove)
    }


    // CleanUp. 
    /* Se ejecuta cuando: 
    --- Cuando el componente se desmonta 
    --- Cuando cambian las dependencias, antes de ejecutar el efecto de nuevo.
    */
    return () => {
      setPosition({ x: 0, y: 0 })
      setTransition(0.3)
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])


  // Change body className

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }

  }, [enabled])
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: `${transition}s`
      }}
      />
    </>
  )
}