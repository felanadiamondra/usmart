import {UserMainPage} from './Pages/UserPage/UserMainPage';
import {Login} from "./components/Login/Login";
import {Registration} from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Login/>
      <UserMainPage/>
      <Registration/>
    </div>
  );
}

export default App;
