import React from 'react';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <div className="home__content-top">
            <Categories />
            <Sort />
          </div>
          <div className="home__content">
            <h1>{categoriesItems[categoryIndex]} пиццы</h1>
            <div className="home__cards cards">
              {
                pizzas.map((item, i) => (
                  <Card
                    key={item.id}
                    pizzas={pizzas[i]} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};