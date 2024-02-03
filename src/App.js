import "./App.css";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Reasons from "./components/Reasons";
import Plans from "./components/Plans";
import Testimonial from "./components/Testimonial";
import Join from "./components/Join";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Programs />
      <Reasons></Reasons>
      <Plans></Plans>
      <Testimonial></Testimonial>
      <Join></Join>
      <Footer></Footer>
    </div>
  );
}

export default App;
