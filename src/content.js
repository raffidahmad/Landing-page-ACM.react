import outerNavBar from './navBar.js'
import lappy from './myAssets/lappy.png'
import './content.css'

/* send func in params, if func cuming to do that shiz (nav bar) else baki cum*/

function content(){
    return(
    <div className='contentComponent'>
        {outerNavBar()}
        <div className='content'>
            <h1>Association of Computing Machinery</h1>
                <h3 style={{marginLeft:"15px"}}>is much more than a student club.</h3>
        </div>
        {lappyImg()}
    </div>
    );
}

function lappyImg(){
    return(
        <img src={lappy} alt={"lappy png logo"} width="250" height="250" style={{float:"right"}}/>
);
}

export default content;