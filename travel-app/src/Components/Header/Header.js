import './Header.css';
import Navbar from '../Navbar/Navbar'
function Header() {
  return (
    <header>
      <img id='logo' alt='logo' src={require('../../assets/images/logo.png')}/>
      <Navbar />
    </header>
  );
}

export default Header;