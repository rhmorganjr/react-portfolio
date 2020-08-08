import React, { useEffect } from 'react';
import me from '../images/IMG_1672.jpg';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);

  return (
    <header>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <img
              src={me}
              alt="Russell Morgan"
              className="mx-1"
            />
          </li>
          <li>
            <h2 className="name">Russell Morgan</h2>
          </li>
          
          {categories.map((category) => (
            <li
              className={`categories mx-2 ${
                currentCategory.name === category.name && 'navActive'
              }`}
              key={category.name}
              >
              <span onClick={() => {setCurrentCategory(category)}} >
                {category.name}
              </span>
            </li>
          ))}
          
        </ul>
      </nav>
    </header>
  );
}

export default Nav;