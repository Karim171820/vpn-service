import Card from "../Card/Card";
import './Cardslabel.css';
import user from '../assets/user.png';
import Server from '../assets/Server.png';
import location from '../assets/location.png';


function Cardslabel(){
    return(
        <div className="Cardslabel-container">
            <Card
            imgSrc={user}
            number = {90}
            text = "Users" 
            CustomStyles= {{   
                borderRightStyle: 'solid',
                borderColor: '#EEEFF2' 
                }}/>
            <Card
            imgSrc={location}
            number = {30}
            text = "Locations"/>
            <Card
            imgSrc={Server}
            number = {90}
            text = "Servers" 
            CustomStyles={{              
                borderLeftStyle: 'solid',
                borderColor: '#EEEFF2'  }}/>
        </div>
    );
}
export default Cardslabel;