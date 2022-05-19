export const Cart = () => {
  const cart = useSelector(state => state ? state.cart : [])
  let totalPrice = 0
  let countOfPizzas = 0

  cart.forEach(item => {
    totalPrice += item.price
    countOfPizzas++
  })

  const calcCount = (arr, _id, doughLabel, diameterLabel) => {
    let count = 0
    arr.forEach(item => {
      if (item._id === _id && item.doughLabel === doughLabel && item.diameterLabel === diameterLabel) {
        count++
      }
    })
    return count
  }

  const cartWithoutRepeats = []

  for (let i = 0; i < cart.length; i++) {
    if (i === 0) {
      cartWithoutRepeats.push(cart[i])
      continue
    }

    let repeats = 0

    for (let j = 0; j < cartWithoutRepeats.length; j++) {
      if (JSON.stringify(cart[i]) === JSON.stringify(cartWithoutRepeats[j])) {
        repeats++
      }
    }

    if (!repeats) {
      cartWithoutRepeats.push(cart[i])
    }
  }
  
  return (
    <>
      <CartHeader/>
      <div className="cart">
        <div className="cart__container">
          <div className="cart__top">
            <div>
              <img src={cartLogo} alt="cart-logo" className="cart__logo" />
              <h1 className="cart__title">Корзина</h1>
            </div>
            <div>
              <img src={trashLogo} alt="trash-logo" className="cart__trash" />
              <p className="cart__remove">Очистить корзину</p>
            </div>
          </div>
          <div className="cart__content">
            {
              cartWithoutRepeats.map(item => {
                return (
                  <CartItem
                    imageUrl={item.imageUrl}
                    name={item.name}
                    price={item.price}
                    doughLabel={item.doughLabel}
                    diameterLabel={item.diameterLabel}
                    key={item.id}
                    id={item._id}
                    count={calcCount(cart, item._id, item.doughLabel, item.diameterLabel)}/>
                )
              })
            }
          </div>
          <div className="cart__total">
            <div>
              <p>Всего пицц: <span className="--fat">{countOfPizzas} шт.</span></p>
              <p>Сумма заказа: <span className="--fat --orange">{totalPrice} р.</span></p>
            </div>
            <div>
              <Link to="/" className="cart__back">
                <img src={arrow} alt="back" />
                <span>Вернуться назад</span>
              </Link>
              <button className="cart__pay-btn">
                <span>Оплатить сейчас</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};