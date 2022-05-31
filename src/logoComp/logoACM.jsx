import acmSvg from './acm.svg';
import './logo.css'
//logo + name
function logoACM(){
	return (
    <div className="leftFlex">
    <div> <img src={acmSvg} alt={"ACM svg logo"} width="150" height="130" id="hp"/></div>
    <div className='acmFull'>
      <h1>
      <br></br>Association of<br></br>Computing Machinery
      </h1>
      </div>
  </div>
    );
}

export default logoACM;