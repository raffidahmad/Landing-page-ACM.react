import './TextPic.css'

function TextPic(props){
    return(
    <div className='contentComponent' style={{backgroundColor: "black"}}>
        {props.Header}
        <div className='sub'>
            <div className='subContent' >
                <h1>ACM UCP Student Chapter</h1>
                    <h3 style={{marginLeft:"15px"}}>is much more than a student club.</h3>
            </div>
            {props.image}
        </div>
        
    </div>
    );
}

export default TextPic;