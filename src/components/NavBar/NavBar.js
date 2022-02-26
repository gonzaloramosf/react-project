import './NavBar.css';
import '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar() {
  return (
    <header>
      {/* <div>
        <span id='logo'> <Link to="/"> E-commerce </Link> </span>
      </div> */}
      <nav>
        <div className='menu'> 
        <div className='burger'>
          <ul className='burger'>
            <li><a href="#menu">abrir </a></li>
            <li><a href="#">cerrar</a></li>
          </ul>
        </div>

        <div className='logo'>
          <p> logo </p>
        </div>

        <div className='navBar'>
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
        </div>

        <div>        
          <Link className='navCart' to='/cart'>
            <CartWidget/>
          </Link> 
        </div>
        </div>
      </nav>
    </header>
  );
}
