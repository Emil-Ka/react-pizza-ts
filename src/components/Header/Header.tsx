import React from 'react';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const totalPrice = useSelector(state => {
    if (state) {
      let total = 0
      state.cart.forEach(item => {
        total += item.price
      })
      return total
    } else {
      return []
    }
  })

  const cartItemsCount = useSelector(state => state ? state.cart.length : ' ')

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <div>
            <Link to="/">REACT PIZZA</Link>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <Link to="/cart" className={styles.button}>
          <span className={styles.price}>{totalPrice} р.</span>
          <div className={styles.line}></div>
          <img src={cart} alt="cart" />
          <span>{cartItemsCount}</span>
        </Link>
      </div>
    </header>
  );
};