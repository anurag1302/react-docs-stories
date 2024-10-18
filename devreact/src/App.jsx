import "./App.css";
import avatarUrl from "./assets/avatar.png";
import Profile from "./components/Profile";
import AdminPanel from "./components/AdminPanel";
import LoginForm from "./components/LoginForm";

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

console.log("sportslist", sportsList);

function TestButton() {
  return (
    <>
      <button>I am a test button</button>
    </>
  );
}

function App() {
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
    </>
  );
}

export default App;
