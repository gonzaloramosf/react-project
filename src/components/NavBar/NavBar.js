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
      <nav id='menu'>
          <ul id='burger'>
            <li><a href="#menu">abrir </a></li>
            <li><a href="#">cerrar</a></li>
          </ul>

          <ul id='navBar'>
            <li>
              <Link to='/'> Home </Link>
            </li>
            <li>
              <Link to='/products'> Products </Link>
            </li>
            <li>
              <Link to='/contact'> Contact </Link>
            </li>
            <li>
              <Link to='/about'> About Us </Link>
            </li>
            {/* <Link id='navCart' to='/cart'>
                <CartWidget/>
            </Link> */}
          </ul>
      </nav>
    </header>
  );
}
