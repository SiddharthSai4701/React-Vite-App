import { useState } from "react";


// We are going to decide the shape of the i/p to this component.
// We will pass an object with 2 props { items: [], heading: string }

interface Props {
    items: string[];
    heading: string;

    onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {

  
  // Hooks return arrays 
  const [selectedIndex, setSelectedIndex] = useState(-1);


  return (
    <>
      <h1>{heading}</h1>
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
              onSelectItem(item);
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
