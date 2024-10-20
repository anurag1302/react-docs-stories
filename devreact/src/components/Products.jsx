import { useState } from "react";
const products = [
  {
    id: 1,
    name: "Pen",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Pencil",
    isAvailable: true,
  },
  {
    id: 3,
    name: "Eraser",
    isAvailable: false,
  },
];

function handleClick() {
  console.log("button clicked");
}

function handleClick2(e) {
  console.log("button2 clicked", e);
}

function Products() {
  const [count, setCount] = useState(0);

  function handleClickNew() {
    setCount(count + 1);
  }

  return (
    <>
      <ul>
        {products.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                backgroundColor: item.isAvailable ? "green" : "red",
                border: "1px solid white",
                marginTop: "10px",
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={handleClick}>CLICK ME</button>
      </div>
      <div>
        <button onClick={(e) => handleClick2(e)}>CLICK ME 2</button>
      </div>
      <div>
        <button onClick={handleClickNew}>Click for Use State</button>
        <p>Count : {count}</p>
      </div>
    </>
  );
}

export default Products;
