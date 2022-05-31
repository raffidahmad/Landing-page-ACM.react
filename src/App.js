import Content from './content.jsx'
import Tab2 from './content-Components/Tab2.jsx';
import {Tab3,ColTabs} from './content-Components/Tab3.jsx'
import Tab4 from './content-Components/Tab4.jsx'
import compLogo from './myAssets/companies.svg'
import NavBar from './NavBar/NavBar.jsx'
import Header from './header/Header.jsx'
import logoACM from './logoComp/logoACM.jsx';
import AccessButts from './Buttons/button.jsx';

const listElem= <ul>
   <li>Up to 5 page each group</li>
   <li>Up to 10 group page</li>
   <li>5 Days group page saved</li>
</ul>;

const tab1= <ColTabs class="tab1" tabHead="Standard Plan" tabText="For everyone" list={listElem} />;
const tab2= <ColTabs class="tab2" tabHead="Premium Plan" tabText="For techies" list={listElem} />;
const tab3= <ColTabs class="tab3" tabHead="Superrr Plan" tabText="For riches" list={listElem} />;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Content()}
        {Tab2()}
        {<Tab4 image={comp()} />}
        <Tab3 header="Get the best deals" Comp1={tab1} Comp2={tab2} Comp3={tab3}/>
       
        <Header mylogo={logoACM()} mynavbar={NavBar()} myaccess={AccessButts()} />
      </header>
    </div>
  );
}

function comp(){
  return (
<img src={compLogo} alt={"comp svg logo"} width="60%" height="65%" id="comp"/>
  );
}

export default App;
