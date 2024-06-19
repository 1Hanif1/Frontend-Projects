import { AboutUs } from './components/AboutUs';
import { NavigationBar } from './components/NavigationBar';
import { HeaderMain } from "./components/HeaderMain"
import "./App.css"
export default function App() {
  return (
    <>
      <header>
        <NavigationBar />
        <HeaderMain />
      </header>
      <AboutUs/>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.linkedin.com/in/hanif-barbhuiya-aa0124218">Hanif Barbhuiya</a>.
      </div>
    </>
  );

}
