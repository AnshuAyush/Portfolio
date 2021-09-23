import './App.css';
import Navbar from './Components/Navbar';
import My_image from './Components/My_image';
import Aboutme from './Components/Aboutme';
import Projects from './Components/Projects';
import LottieOne from './Components/LottieOne';
import Graph from './Components/Graph'
import Footer from './Components/Footer';

function App() {
  return (
    <>

  
      <Navbar/>

      <My_image/>

      <Aboutme/>
            
      <LottieOne/>
      
      <Graph/>

     <div className="projects-class">
          <Projects/>
          
      </div>

      <Footer/>
      </>

     
    




  );
}

export default App;
