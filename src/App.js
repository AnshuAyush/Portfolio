import './App.css';
import Navbar from './Components/Navbar';
import My_image from './Components/My_image';
import Aboutme from './Components/Aboutme';
import Projects from './Components/Projects';
import LottieOne from './Components/LottieOne';
import Graph from './Components/Graph'

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


      

      </>

     
    




  );
}

export default App;
