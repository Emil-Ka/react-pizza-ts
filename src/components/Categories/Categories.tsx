import React from 'react';

export const Categories: React.FC = () => {
  const dispatch = useDispatch()
  const activeCategoryIndex = useSelector(state => state ? state.categoryIndex : null)
  const categoriesItems = useSelector(state => state ? state.categoriesItems : [])
  
  return (
    <ul className="home__categories categories">
      {
        categoriesItems.map((item, i) => (
          <li
            className={`${activeCategoryIndex === i ? 'categories__item--active' : null} categories__item`}
            key={i}
            onClick={() => dispatch(setCategory(i))}>
            {item}
          </li>
        ))
      }
    </ul>
  );
};