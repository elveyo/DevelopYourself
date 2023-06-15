import React ,{useState} from 'react'
import Zendev from '../../images/Zendev.png'
import Valens from '../../images/valens.jfif'
import walterCode from '../../images/waltercode.png'
import mistral from '../../images/mistral.png'
import { BiDownArrow } from "react-icons/bi";
import Logo from '../../images/logo.svg'


import './jobs.css'
const Jobs = () => {
    const[isShown, setShown] = useState(false);

  return (
    <>
       <div className="logo">
            <img src={Logo}></img>
            <p>Yrslf</p>
        </div>
    <h1 className="jobs-title">START YOUR <span>CAREER</span></h1>
    <div className="jobs">
        <div className="job">
            <img src={Zendev}></img>
            <h2>FULL STACK DEVELOPER</h2>
            {isShown && <p>
                We are loking for 5 developers for our team.
                We are working in these technologies:
                -Nodejs
                -React
                -Mongodb
                
                </p>}
            <div className="buttons">
            <BiDownArrow className="arrow" onClick={()=>setShown(!isShown)}/>
            <button>Apply</button>
            </div>
            
        </div>

        <div className="job">
            <img src={Valens}></img>
            <h2>Game developer</h2>
            <div className="buttons">
            <BiDownArrow className="arrow"/>
            <button>Apply</button>
            </div>
            
        </div>

        <div className="job">
            <img src={mistral}></img>
            <h2>backend developer</h2>
            <div className="buttons">
            <BiDownArrow className="arrow"/>
            <button>Apply</button>
            </div>
            
        </div>
        <div className="job">
            <img src={walterCode}></img>
            <h2>IT arhitect</h2>
            <div className="buttons">
            <BiDownArrow className="arrow"/>
            <button>Apply</button>
            </div>
            
        </div>
    </div>

    
    </>
  )
}

export default Jobs