import "./App.css";
import avatar from "./assets/avatar.png";

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
        <img className="avatar" src={avatar} />
      </div>
    </>
  );
}

export default App;
