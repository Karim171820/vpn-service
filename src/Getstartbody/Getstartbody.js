import './Getstartbody.css'
import Illustration1  from './Illustration1.svg';



function Getstartbody()
{
    return(
        <div className="GetStartbody-container">
            <div className="GetStartbody-text">
                <h1 className="Header">Want anything to be <br />easy with LaslesVPN</h1>
                <p className="GetStartbody-content">Provide a network for all your needs with ease and fun using LaselesVPN<br/> discover interseting features from us</p>
                <button className="GetStartbody-button">Get Started</button>
            </div>
            <div className='GetStartbody-Image-container'>
                <img className="GetStartbody-Image" src={Illustration1} alt="Animal" />
                </div>
        </div>
    );
}
export default Getstartbody;