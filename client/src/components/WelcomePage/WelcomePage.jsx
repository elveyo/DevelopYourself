import ogledalo from '../../images/ogledalo.png'
import '../../styles/welcome.css'
import Logo from '../../images/logo.svg'
function WelcomePage() {
  return (
    <div className="welcome-page">
        <div className="logo">
            <img src={Logo}></img>
            <p>Yrslf</p>
        </div>
        <div className="text">
    <h2>Explore, learn, compete, teach and </h2>
<h2>Develop Yourself</h2>
<p>Welcome to all-in platform where you have everything<br></br> needed for successful career.</p>
<p>Register your profile and let the games begin!</p>
<button id="register">REGISTER</button>
<button id="login">LOG IN</button>
        </div>
        <img src={ogledalo}></img>
    </div>
  )
}

export default WelcomePage