import './NavBar.css';
import '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import ProfileWidget from '../ProfileWidget/ProfileWidget';

export default function NavBar() {
  return (
    <header>
      {/* <div>
        <span id='logo'> <Link to="/"> E-commerce </Link> </span>
      </div> */}
      <nav id='menu'>
        <ul className='burger'>
          <li><a href="#menu">abrir </a></li>
          <li><a href="#!">cerrar</a></li>
        </ul>
 
        <Link to='/'>
          <div className='logo'>       
            <h1> crocodrile </h1>
          </div>
        </Link>

        <ul className='navBar'>
          <li>
            <Link to='/'> Store </Link>
          </li>
          <li>
            <Link to='/contact'> Contact </Link>
          </li>
          <li>
            <Link to='/about'> About Us </Link>
          </li>
        </ul>

        <div className='prof'>
          <Link className='navCart' to='/cart'>
            <CartWidget/>
          </Link>

          <Link className='navProfile' to='/login'>
            <ProfileWidget/>
          </Link>
        </div> 
      </nav>
    </header>
  );
}
