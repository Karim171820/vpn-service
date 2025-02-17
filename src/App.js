import logo from './logo.png';
import './App.css';
import Nav from './Nav/Nav.js'
import Getstartbody from './Getstartbody/Getstartbody.js';
import Cardslabel from './Cardslabel/Cardslabel.js';
import MapChart from './WorldMap/MapChart.js';

function App() {
  return (
    <>
    <Nav></Nav>
    <Getstartbody></Getstartbody>
    <Cardslabel></Cardslabel>
    <MapChart></MapChart>
    </>
  );
}

export default App;
