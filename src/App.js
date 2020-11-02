import './App.css';
import Navbar from './Components/Header/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";//Animation on scroll
import "aos/dist/aos.css";
import { useEffect, createContext } from 'react';
import Header from './Components/Header/Header/Header';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
// import Home from './Components/Home/Home';
export const UserContext = createContext();
function App() {
  // const [state, setState] = useState("primary");
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    // <UserContext.Provider value={[setState, state]}>
      <div className="bg-dark text-light first">
        <Navbar></Navbar>
        {/* <Home/> */}
        <Header/>
        <About/>
        <Project/>
        <Blogs/>
        <Contact/>
      </div>
    // </UserContext.Provider>
  );
}

export default App;
