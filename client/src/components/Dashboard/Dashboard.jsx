import './dashboard.css'
import Avatar from '../../images/avatar.svg'
import Code from '../../images/code.svg'
import Event from '../../images/event.svg'
import Jobs from '../../images/jobs.svg'
import Post from '../../images/post.svg'
import Logo from '../../images/logo.svg'
import { Link } from "react-router-dom";



const Dashboard = () => {
  return (
    <div className="dash-container">
        <div className="logo">
            <img src={Logo}></img>
            <p>Yrslf</p>
        </div>
    <div className="dashboard">
       
       
        <Link to="/code-practice" className="item">
        <img className="avatar" src={Code}></img>
        Coding
        </Link>
        
        
        
        <Link to="/code-practice" className="item">
        <img className="avatar" src={Event}></img>
        Events
        </Link>
        

        
        <Link to="/code-practice" className="item">
        <img className="avatar" src={Avatar}></img>
        Profile
        </Link>
        

            
        <Link to="/code-practice" className="item">
        <img className="avatar" src={Jobs}></img>
        Jobs
        </Link>
       

     
        <Link to="/code-practice" className="item">
        <img className="avatar" src={Avatar}></img>
        Courses
        </Link>
        

        
        <Link to="/code-practice" className="item">
        <img className="avatar" src={Post}></img>
        Posts
        </Link>
        
    </div>
    </div>
  )
}

export default Dashboard