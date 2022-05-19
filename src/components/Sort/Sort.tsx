import React from 'react';
import cx from 'classnames';

export const Sort: React.FC= () => {
  const [visiblePopup, setVisiblePopup] = useState(false)
  const sortIndex = useSelector(state => state ? state.sortIndex : 0)
  const sortItems = useSelector(state => state ? state.sortItems : [])
  const dispatch = useDispatch()
  const sortRef = useRef()

  const changeVisiblePopup = () => {
    setVisiblePopup(prev => !prev)
  }

  const closePopupOutside = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false)
    }
  }

  const changeActiveItem = (index) => {
    dispatch(setSortIndex(index))
    setVisiblePopup(false)
  }

  useEffect(() => {
    document.querySelector('html').addEventListener('click', closePopupOutside)
  }, [])

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <img className={visiblePopup ? 'sort__icon--active' : 'sort__icon'} src={sortSVG} alt="sort" />
        <b>Сортировка по:</b>
        <span onClick={changeVisiblePopup}>{sortItems[sortIndex]}</span>
      </div>
      {
        visiblePopup ?
          <div className="sort__popup">
            <ul>
              {
                sortItems.map((item, i) => (
                  <li
                    className={`sort__item ${sortIndex === i ? 'sort__item--active' : null}`}
                    key={i}
                    onClick={() => changeActiveItem(i)}>
                    по {item}
                  </li>
                ))
              }
            </ul>
          </div> : null
      }
    </div>
  );
};