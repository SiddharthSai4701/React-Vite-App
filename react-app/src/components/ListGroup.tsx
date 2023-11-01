import { useState } from "react";

function ListGroup() {
  let items = ["New Delhi", "Bangalore", "Mumbai", "Chennai"];
  
  // Hooks return arrays 
  const [selectedIndex, setSelectedIndex] = useState(-1);


  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          // Each item must be given a unique key while mapping. Here, the key is the item itself.
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
