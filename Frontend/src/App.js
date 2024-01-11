// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./styles.css";

import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import SellBooks from "./components/SellBooks";
import BuyBooks from "./components/BuyBooks";
import JoinUs from "./components/JoinUs";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutUs />
      <BuyBooks />
      <SellBooks />
      <JoinUs />
      <ContactUs />
    </div>
  );
}