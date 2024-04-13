import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Offers from './components/Offers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Offers/>

      <Feature/>
      <About/>
      <Contact/>
    </div>
  );
}
export default App;
