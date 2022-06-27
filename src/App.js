import About from "./components/About";
import Footer from "./components/Footer";
import Interests from "./components/Interests";
import Socials from "./components/Socials";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Title />
      <Socials/>
      <About/>
      <Interests/>
      <Footer />
    </div>
  );
}

export default App;
