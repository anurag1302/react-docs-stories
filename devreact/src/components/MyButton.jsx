function MyButton({ count, onClick }) {
  return (
    <>
      <button onClick={onClick}>Click Me</button>
      <p
        style={{
          backgroundColor: "crimson",
          color: "white",
          border: "1px solid black",
        }}
      >
        Counter: {count}
      </p>
    </>
  );
}

export default MyButton;
