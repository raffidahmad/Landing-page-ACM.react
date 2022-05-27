import './button.css'
function loginButt(){
    return (
        <div> <button className="button login"><a href="https://discord.gg/dpqgK7b5cs">Discord</a></button></div>
   
    );
}

function registerButt(){
    return (
        <div>
            <button className="button register">
                <a href="https://forms.gle/NZy7iGyEb2MygkAd6">Register</a>
            </button>
        </div>
    );
}

// right: login + register
function right(){
	return (
    <div className="rightFlex">
        <div>{loginButt()}</div>
        <div>{registerButt()}</div>
  </div>
    );
}

export default right;