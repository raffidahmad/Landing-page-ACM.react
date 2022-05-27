import acmSvg from './myAssets/acm.svg';
import './navBar.css';
import right from './buttons.js'

function acmLogo(){
	return (
        <img src={acmSvg} alt={"ACM svg logo"} width="65" height="75" id="hp" />
    );
}

function outerNavBar(){
	return (
    <div className="outerFlex">
    <div>{left()}</div>
    <div>{innerNavBar()}</div>
    <div>{right()}</div>
  </div>
    );
}

// left: logo + name
function left(){
	return (
    <div className="leftFlex">
    <div>{acmLogo()}</div>
    <div>
      <h4 style={{fontSize: "11px",color:"lightBlue"}}>
        Association of<br></br>Computing Machinery
      </h4>
      
      </div>
  </div>
    );
}

function innerNavBar(){
	return (
    <div className="innerFlex">
      <ul className="navList">
        <li><a href="https://www.facebook.com/UCP.ACM">About</a></li>
        <li><a href="https://www.facebook.com/UCP.ACM">Events</a></li>
        <li><a href="https://www.facebook.com/UCP.ACM">Team</a></li>
        <li><a href="https://www.facebook.com/UCP.ACM">Collaborate</a></li>
        </ul>
  </div>
    );
}

export default outerNavBar;