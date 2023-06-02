import '../styles/about.css'
import Pretrazivanje from '../images/pretrazivanje.svg'
import Cv from '../images/cv.svg'
import Coding from '../images/coding.svg'
import Knjiga from '../images/knjiga.svg'



function About() {
  return (
    <div className="about-container">
      <h1>All in one</h1><h1>place</h1>
        <div className="card">
            <div className="front">
                <img src={Pretrazivanje}></img>
                <p>Search and upload</p>
            </div>
            <div className="back">
              <p>You can share your knowledge and also search for topics you are interested in</p>
            </div>
        </div>

        <div className="card">
            <div className="front">
                <img src={Cv}></img>
                <p>Make your CV</p>
            </div>
            <div className="back">
              <p>Let your profile be your CV. Put there your data, projects , finished school etc.Someone may hire you :)</p>
            </div>
        </div>

        <div className="card">
            <div className="front">
                <img src={Coding}></img>
                <p>Write code and win</p>
            </div>
            <div className="back">
              <p>You can share your knowledge and also search for topics you are interested in</p>
            </div>
        </div>

        <div className="card">
            <div className="front">
                <img src={Knjiga}></img>
                <p>Sell or buy coruses</p>
            </div>
            <div className="back">
              <p>You can share your knowledge and also search for topics you are interested in</p>
            </div>
        </div>
    </div>
  )
}

export default About