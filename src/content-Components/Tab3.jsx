import './Tab3.css'
function Tab3(props){
    return(
        <div className="Tab3">
             <p className='Tab3-text'>
                    {props.header}
                </p>
                <div className='Tab3-inner'>
        <div className='tabs'>
            {props.Comp1}
            {props.Comp2}
            {props.Comp3}
            </div>
     </div>
        </div>
    );
}


function ColTabs(props){
    return (
            <div className={props.class}>
             <h1>{props.tabHead}</h1>
             <p>{props.tabText}</p>
             <hr></hr>
             <h1>{props.priceMonth}</h1>
             {props.list}
            </div>
    );
}
export {Tab3,ColTabs};