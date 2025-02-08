import {  useState } from "react";

function List_Group() {z

  const items = [
    "Delhi ",
    "Mumbai",
    "Kolkata",
    "Haryana",
    "Punjab",
    "Gurugram",
  ];

  
  const [ selectedIndex , setSelectedIndex] = useState(-1);

  return (
    <>
      <h1> This is the render list </h1>
      {items.length === 0 && <p> No item Found </p>}
      <ul className="list-group">
        {items.map((item , index) => (
          <li
            className={ selectedIndex === index ? ' list-group-item active': 'list-group-item'}
            key={item}
            onClick={ () => { setSelectedIndex (index ); }}
          > 
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List_Group;
