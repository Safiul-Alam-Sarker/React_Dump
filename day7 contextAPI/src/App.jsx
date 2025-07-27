import "./App.css";
import UserContextProvider from "./assets/Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <UserContextProvider>
      <>
        <h1>his afiul</h1>
        <Login />
        <Profile />
      </>
    </UserContextProvider>
  );
}

export default App;
