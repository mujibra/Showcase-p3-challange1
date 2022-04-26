import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer";
import ProductPage from "./Pages/ProductPage";
import DetalPage from "./Pages/DetailPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HomePage></HomePage>
      <ProductPage></ProductPage>
      <DetalPage></DetalPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
