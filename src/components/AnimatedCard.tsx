import { motion } from 'framer-motion';
import { useState } from 'react';

interface AnimatedCardProps {
  className: string;
  title: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  className,
  title,
  onClick,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const renderMotionHr = () => (
    <motion.hr
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isHovered ? 1 : 0 }}
      transition={{ duration: 1 }}
      style={{
        border: 'none',
        height: '2px',
        backgroundColor: '#333',
        transformOrigin: 'left',
      }}
    />
  );

  return (
    <motion.div
      className={className}
      initial={{
        scale: 1,
        opacity: 0.4,
        x: '0vw',
        width: '26vw',
        height: '28vw',
      }}
      whileHover={{
        scale: 1.2,
        opacity: 0.8,
        transition: { duration: 0.5, type: 'spring', stiffness: 300 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 300,
      }}
      onClick={onClick}
      style={{ position: 'relative', overflow: 'hidden' }} // Ensure the card handles overflow properly
    >
      <motion.h1
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.2 : 1 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 400 }}
        style={{
          position: 'sticky', // Use sticky positioning
        }}
      >
        {title}
      </motion.h1>
      {renderMotionHr()}
      <div
        style={{
          scrollbarWidth: 'none',
          padding: '1em',
          overflowY: 'auto',
          height: 'calc(100% - 4em)',
        }}
      >
        {' '}
        {/* Adjust height to leave space for title */}
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
