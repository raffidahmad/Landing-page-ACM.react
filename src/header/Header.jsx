import './Header.css';

function Header(props){
	return (
    <div className='flex-header'>
      <div>{props.mylogo}</div>
      <div>{props.mynavbar}</div>
      <div>{props.myaccess}</div>
      </div>
    );
}
export default Header;