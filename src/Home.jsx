import { Link } from 'react-router-dom'
import'./Home.css'
import Button from './Button'
import Card from './Card'

function Home(){
return(
    <>
     <nav className="navbar">
    <div className="logo">MySite</div>
    <ul className="nav-links">
      <li><Link to="#">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
    </ul>
  </nav>

  
    <div className="hero-content">
      <h1>Welcome to My Portfolio</h1>
      <p>I build modern web applications using MERN stack.</p>
      <button className="btn">View Projects</button>
    </div>

     <Button huhu='Home' haha='123'/>
     <Card title="Home Page"/>
    </>
    
 
  
 
  
)
}


export default Home