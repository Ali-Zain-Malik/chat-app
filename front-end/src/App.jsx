import './assets/css/App.css';

// Components
import Body from './Components/Body/Body';
import Navbar from './Components/Navbar/Navbar';
import SideBar from './Components/SideBar/SideBar';

// Images
import menuIcon from "./assets/images/menu.svg";
function App() {

  return (
    <>
    <div className="d-flex">
      <SideBar />
      <div className="d-flex flex-column gap-2 w-100">
        <Navbar menuIcon={menuIcon} />
        <Body />
      </div>
    </div>
    </>
  );
}

export default App
