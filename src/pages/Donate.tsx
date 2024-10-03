import '../view/css/donate.css';

import { motion } from 'framer-motion';

export function Donate() {
  return (
    <motion.div
      id="informations"
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      exit={{ x: 0, opacity: 0 }}
    >
      <div id="donate-page">
        <h1>Donate Page</h1>
        <ul className="donation-table">
          <li className="table-header">
            <span>Item</span>
            <span>Enchant</span>
            <span>Quantidade</span>
            <span>Valor</span>
          </li>
          <li className="table-row">
            <span>Item 1</span>
            <span>Enchant 1</span>
            <span>10</span>
            <span>$100</span>
          </li>
          <li className="table-row">
            <span>Item 2</span>
            <span>Enchant 2</span>
            <span>5</span>
            <span>$50</span>
          </li>
          <li className="table-row">
            <span>Item 3</span>
            <span>Enchant 3</span>
            <span>20</span>
            <span>$200</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
