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

function Products() {
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
    </>
  );
}

export default Products;
