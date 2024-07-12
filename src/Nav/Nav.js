import Button from '../Button/Button';
import './Nav.css';
import logo from './logo.png';

function Nav(){
return(
<div className="Nav-container">
    <div className='logo-container'>
    <img  className="logo"src={logo} alt = "logo"></img>
    <h2 className="logo-text">LaslesVPN</h2>
    </div>

    <div className='Nav-Elements-container'>
    <ul className="Nav-Elements">
        <li className="Nav-Element">About</li>
        <li className="Nav-Element">Feature</li>
        <li className="Nav-Element">Pricing</li>
        <li className="Nav-Element">Testimonials</li>
        <li className="Nav-Element">Help</li>
    </ul> 
    </div>

    <Button/>
</div>
);
}
export default Nav;