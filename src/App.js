import './App.css';

function Userlist () {
  return (
    <div className="userlist">
      <h1>Max</h1>
    </div>
  )
}

function Chat () {
  return (
    <div className="chat">
      <h1>Hello</h1>
    </div>
  )
}

function Inputbox () {
  return (
    <div className="inputbox">
      <h1>Option</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Userlist/>
      <Chat/>
      <Inputbox/>
    </div>
  );
}

export default App;
