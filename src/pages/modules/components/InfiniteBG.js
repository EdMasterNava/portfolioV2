import * as React from 'react';
import { motion } from 'framer-motion';

function InfiniteBG() {
    const [angle, setAngel] = React.useState(0)
    React.useEffect(() => {
        const calculateAngle = () => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const angleRad = Math.atan2(windowHeight, windowWidth);
            const angleDeg = (angleRad * 180) / Math.PI;
            const invertedAngle = 180 - angleDeg;
            setAngel(invertedAngle);
        };    
        calculateAngle();
        window.addEventListener('resize', calculateAngle);
        return () => {
            window.removeEventListener('resize', calculateAngle)
        }
    }, [])

  return (
    <>
        <div style={{ 
            overflow: 'hidden', 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0
        }}>
            <motion.div
                style={{
                    width: '100%',
                    height: '100vh',
                    backgroundImage: `linear-gradient(${angle}deg, #6A4698, #887E1D, #6A4698, #887E1D, #6A4698)`,
                    backgroundSize: '200% 200%',
                    zIndex: 0
                }}
                animate={{ backgroundPosition: '-200% -200%' }}
                transition={{ ease: 'linear', repeat: Infinity, duration: 20 }}
            />
        </div>
    </>
  );
}

export default InfiniteBG;