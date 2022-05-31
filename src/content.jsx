import logoACM from './logoComp/logoACM.jsx';
import AccessButts from './Buttons/button.jsx';
import NavBar from './NavBar/NavBar.jsx'
import lappy from './myAssets/lappy.png'
import Header from './header/Header.jsx'
import TextPic from './content-Components/TextPic.jsx'

const element = <Header mylogo={logoACM()} mynavbar={NavBar()} myaccess={AccessButts()} />;

function Content(){
    return(
        <TextPic Header={element} image={lappyImg()} />
    );

}

function lappyImg(){
    return(
        <img src={lappy} alt={"lappy png logo"} width="40%" height="25%" id="lap"/>
);
}

export default Content;