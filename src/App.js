// import logo from './logo.svg';
// import clglogo from './images/Stjitlogo.png' ;

// import Header from './components/Header.js';
import Stjit from './images/Stjit.png';
import Campus from './images/Campus.JPEG';
import Front from './images/Front.jpg';
import Circle from'./images/Circle.jpg';
import Swamiji from './images/Swamiji.jpg';
import Lab from './images/Lab.jpg';
import Library from './images/Library.jpg';


import './App.css'
function App() {
  return (
    <div>
       <div className='header'>
        <h1 className='contact'> 08373-26643,262075 </h1>
        <h1 className='contact'> Fax:08373-266427 </h1>
        <h1 classname='contact'>Cet code-033</h1>
        <h1 className='contact'>Research program </h1>
        <h1 className='contact'> Alumni </h1>
    </div> 
    <div>
    
      <div className='nav'>
        <img src= {Stjit} alt='collage-logo'></img>
        <h2 classname='footer'>Home</h2>
        <h3 className='footer'>About</h3>
        <h3 className='footer'>Admissions</h3>
        <h3 className='footer'>Departments</h3>
        <h3 className='footer'>Placements</h3>
      </div>
      <div >
        <img src= {Campus} alt='collage'></img><br></br>
        <h4 classname="Photo">Welcome To Our College </h4 >
      </div>
      <div className="First">
        <img src= {Front} alt='collagefront'></img>
       <img src= {Circle} alt='circle'></img>
      </div>
      <div className='Second'>
        <img src= {Swamiji} alt='second'></img><br></br>
      </div> 
      <div className="Third">
        <img src={Lab} alt='labs'></img>
        <img src={Library} alt='library'></img>
      </div>
      <div classname="Profile">
       <h1 className="Profile"> A Commitment to Technical Education </h1> 
      </div>
    
  

      </div>


    </div>
  );
}

export default App;
