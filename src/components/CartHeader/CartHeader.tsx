import React from 'react';

import styles from './CartHeader.module.scss';

export const CartHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <div>
            <Link to="/">REACT PIZZA</Link>
            <p>Самая реактивная пицца</p>
          </div>
        </div>
      </div>
    </header>
  );
};