import "./App.css";
import avatarUrl from "./assets/avatar.png";
import Profile from "./components/Profile";
import AdminPanel from "./components/AdminPanel";
import LoginForm from "./components/LoginForm";
import Products from "./components/Products";
import MyButton from "./components/MyButton";
import { useState } from "react";

const employee = {
  name: "John Doe",
  department: "IT",
};

const isLoggedIn = true;

let content = "";
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}

const sports = [
  {
    name: "Cricket",
    id: 1,
  },
  {
    name: "Tennis",
    id: 2,
  },
  {
    name: "Football",
    id: 3,
  },
];

const sportsList = sports.map((item) => {
  return <li key={item.id}>{item.name}</li>;
});

function TestButton() {
  return (
    <>
      <button>I am a test button</button>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Welcome to Dev React</h1>
      <TestButton />
      <div>
        <img className="avatar" src={avatarUrl} />
      </div>
      <p>{employee.name}</p>
      <p>{employee.department}</p>
      <Profile />
      {content}
      {isLoggedIn ? <AdminPanel /> : <LoginForm />}
      <h2>Rendering Lists</h2>
      <div>
        <ul>{sportsList}</ul>
      </div>
      <div>
        <Products />
      </div>
      <div>
        <h2>Generic buttons with props that have the same state</h2>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
    </>
  );
}

export default App;
