import './button.css'
function MyButton(props){
    return (
        <div> 
            <button className={props.classname}>
                <a href={props.url}>{props.name}
                </a>
            </button>
        </div>
    );
}

// right: login + register
function AccessButts(){
	return (
    <div className="rightFlex">
        <div>
            <MyButton classname="button login" url="https://discord.gg/dpqgK7b5cs" name="Discord"/>
        </div>
        <div>
            <MyButton classname="button register" url="https://forms.gle/NZy7iGyEb2MygkAd6" name="Register"/>
        </div>
          
  </div>
    );
}

export default AccessButts;