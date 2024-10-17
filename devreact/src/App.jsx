import "./App.css";
import avatarUrl from "./assets/avatar.png";
import Profile from "./components/Profile";
const employee = {
  name: "John Doe",
  department: "IT",
};

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
    </>
  );
}

export default App;
