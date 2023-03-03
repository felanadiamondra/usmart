import AddHackathon from './Pages/CompanyPage/AddHackathon';
import HackathonMainPage from './Pages/HackathonPage/HackathonMainPage';
import UserMainPage from './Pages/UserPage/UserMainPage';
import {UserMainPage} from './Pages/UserPage/UserMainPage';
import {Login} from "./components/Login/Login";
import {Registration} from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      {/* <HackathonMainPage/> */}
      <AddHackathon/>
      <Login/>
      <UserMainPage/>
      <Registration/>
    </div>
  );
}

export default App;
